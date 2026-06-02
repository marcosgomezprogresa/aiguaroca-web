import { Skeleton } from "@/components/ui/Skeleton";

interface SectionSkeletonProps {
  height?: string;
}

export default function SectionSkeleton({ height = "h-96" }: SectionSkeletonProps) {
  return (
    <div className="custom-container space-y-6 py-10">
      <Skeleton className={`w-full ${height} rounded-2xl`} />
    </div>
  );
}
