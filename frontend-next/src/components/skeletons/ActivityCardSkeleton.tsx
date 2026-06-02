import { Skeleton } from "@/components/ui/Skeleton";

export default function ActivityCardSkeleton() {
  return (
    <div className="w-full overflow-hidden rounded-[1.625rem] border border-neutral-200/80 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)] sm:rounded-[1.875rem]">
      <Skeleton className="aspect-[16/11] w-full rounded-none sm:aspect-[4/3]" />
      <div className="space-y-4 p-4 sm:space-y-5 sm:p-5 lg:p-6">
        <div className="space-y-2">
          <Skeleton className="h-4 w-full rounded-lg" />
          <Skeleton className="h-4 w-4/5 rounded-lg" />
        </div>
        <div className="grid grid-cols-3 gap-2 sm:gap-2.5">
          <Skeleton className="h-[4.5rem] w-full rounded-2xl" />
          <Skeleton className="h-[4.5rem] w-full rounded-2xl" />
          <Skeleton className="h-[4.5rem] w-full rounded-2xl" />
        </div>
        <Skeleton className="h-14 w-full rounded-2xl" />
        <Skeleton className="h-[4.5rem] w-full rounded-2xl" />
      </div>
    </div>
  );
}
