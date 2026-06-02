const ActivityPageSkeleton = () => {
  return (
    <div className="custom-container space-y-8 py-8 lg:py-12">
      <div className="h-[45dvh] w-full animate-pulse rounded-[2rem] bg-neutral-200 lg:h-[80dvh] 2xl:h-[700px]" />

      <div className="flex flex-col gap-3 rounded-3xl border border-neutral-100 bg-white p-4 shadow-sm lg:flex-row lg:items-center lg:justify-between">
        <div className="h-4 w-52 animate-pulse rounded bg-neutral-200" />
        <div className="h-4 w-28 animate-pulse rounded bg-neutral-200" />
      </div>

      <div className="grid gap-3 lg:grid-cols-3">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="h-16 animate-pulse rounded-2xl bg-brand-100" />
        ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="col-span-2 space-y-4">
          <div className="h-8 w-3/4 animate-pulse rounded bg-neutral-200" />
          <div className="h-4 w-full animate-pulse rounded bg-neutral-200" />
          <div className="h-4 w-full animate-pulse rounded bg-neutral-200" />
          <div className="h-4 w-2/3 animate-pulse rounded bg-neutral-200" />
        </div>
        <div className="h-64 animate-pulse rounded-3xl bg-neutral-200" />
      </div>
    </div>
  );
};

export default ActivityPageSkeleton;
