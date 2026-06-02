import { Skeleton } from "@/components/ui/Skeleton";
import ActivityCardSkeleton from "./ActivityCardSkeleton";

export default function HomeActivitySectionSkeleton() {
  return (
    <div className="custom-container space-y-14">
      <Skeleton className="h-10 w-32 rounded-2xl" />
      <div className="space-y-7">
        <Skeleton className="h-6 w-64 mx-auto lg:mx-0 rounded-lg" />
        <Skeleton className="h-12 w-full lg:w-3/4 rounded-lg" />
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-10 pb-8">
        <ActivityCardSkeleton />
        <ActivityCardSkeleton />
        <ActivityCardSkeleton />
      </div>
    </div>
  );
}
