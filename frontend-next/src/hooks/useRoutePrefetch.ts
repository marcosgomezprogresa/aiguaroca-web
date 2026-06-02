"use client";

import { useCallback, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

const IDLE_TIMEOUT_MS = 1500;

interface PrefetchOptions {
  immediate?: boolean;
}

const runWhenIdle = (callback: () => void) => {
  if (typeof window === "undefined") return;

  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(callback, { timeout: IDLE_TIMEOUT_MS });
    return;
  }

  globalThis.setTimeout(callback, 0);
};

export const useRoutePrefetch = () => {
  const router = useRouter();
  const prefetchedRoutes = useRef(new Set<string>());

  const prefetchRoute = useCallback(
    (href?: string, options: PrefetchOptions = {}) => {
      if (!href || href.startsWith("http") || href.startsWith("#")) return;
      if (prefetchedRoutes.current.has(href)) return;

      prefetchedRoutes.current.add(href);
      if (options.immediate) {
        router.prefetch(href);
        return;
      }

      runWhenIdle(() => router.prefetch(href));
    },
    [router],
  );

  const prefetchRoutes = useCallback(
    (hrefs: string[]) => {
      hrefs.forEach((href) => prefetchRoute(href));
    },
    [prefetchRoute],
  );

  return { prefetchRoute, prefetchRoutes };
};

export const usePrefetchOnVisible = (hrefs: string[], enabled = true) => {
  const { prefetchRoutes } = useRoutePrefetch();

  useEffect(() => {
    if (!enabled) return;
    runWhenIdle(() => prefetchRoutes(hrefs));
  }, [enabled, hrefs, prefetchRoutes]);
};
