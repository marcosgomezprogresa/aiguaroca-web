"use client";

import { ReactNode } from "react";
import { IoShareOutline } from "react-icons/io5";
import { toast } from "sonner";
import BreadCrumbs from "./BreadCrumbs";

interface ActivityHeroTopProps {
  topClassName: string;
  breadcrumbClassName?: string;
  shareClassName?: string;
  startIcon?: ReactNode;
  pages: string[];
}

const ActivityHeroTop = ({
  topClassName,
  breadcrumbClassName,
  shareClassName,
  startIcon,
  pages,
}: ActivityHeroTopProps) => {
  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast.success("¡Texto copiado al portapapeles!");
    } catch {
      toast.error("No se pudo copiar el texto.");
    }
  };

  return (
    <div className={topClassName}>
      <BreadCrumbs
        className={breadcrumbClassName}
        startIcon={startIcon}
        pages={pages}
      />
      <button
        type="button"
        onClick={handleShare}
        className={`text-base lg:text-xl align-center gap-2 lg:gap-5 cursor-pointer ${shareClassName ?? ""}`}
      >
        <IoShareOutline aria-hidden />
        <span className="underline">Compartir</span>
      </button>
    </div>
  );
};

export default ActivityHeroTop;
