import { Skeleton } from "@/components/ui/Skeleton";

export default function ActivityCardSkeleton() {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-neutral-200/70 bg-white">
      <Skeleton className="h-60 w-full rounded-none sm:h-64" />
      <div className="space-y-4 p-4 sm:p-5">
        <Skeleton className="h-6 w-4/5 rounded-lg" />
        <div className="grid grid-cols-3 gap-2">
          <Skeleton className="h-14 w-full rounded-xl" />
          <Skeleton className="h-14 w-full rounded-xl" />
          <Skeleton className="h-14 w-full rounded-xl" />
        </div>
        <Skeleton className="h-2 w-full rounded-full" />
        <Skeleton className="h-10 w-full rounded-lg" />
        <Skeleton className="h-12 w-full rounded-lg" />
      </div>
    </div>
  );
}
