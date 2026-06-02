import { Skeleton } from "@/components/ui/Skeleton";

export default function HomeGridGallerySkeleton() {
  return (
    <div className="custom-container h-[80dvh] lg:h-[85dvh] 2xl:h-[680px] grid grid-cols-12 gap-2 lg:gap-5 my-10">
      <Skeleton className="col-span-12 lg:col-span-4 rounded-lg" />
      <Skeleton className="col-span-7 lg:col-span-3 rounded-lg" />
      <Skeleton className="col-span-5 rounded-lg" />
      <Skeleton className="col-span-5 rounded-lg" />
      <Skeleton className="col-span-7 lg:col-span-3 rounded-lg" />
      <Skeleton className="col-span-12 lg:col-span-4 rounded-lg" />
    </div>
  );
}
