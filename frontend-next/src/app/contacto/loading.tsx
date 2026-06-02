export default function Loading() {
  return (
    <div className="custom-container py-20">
      <div className="w-full max-w-6xl space-y-16 mx-auto border-2 border-neutral-100 shadow-lg rounded-3xl p-5 md:p-10 animate-pulse">
        <div className="h-16 bg-neutral-200 rounded w-3/4 mx-auto" />
        
        <div className="space-y-10">
          <div className="flex flex-col md:flex-row gap-5 md:gap-10">
            <div className="w-full h-16 bg-neutral-200 rounded-lg" />
            <div className="w-full h-16 bg-neutral-200 rounded-lg" />
          </div>
          
          <div className="flex flex-col md:flex-row gap-5 md:gap-10">
            <div className="w-full h-16 bg-neutral-200 rounded-lg" />
            <div className="w-full h-1" />
          </div>
          
          <div className="space-y-2">
            <div className="h-40 bg-neutral-200 rounded-lg" />
          </div>

          <div className="h-12 bg-neutral-200 rounded-lg w-32 mx-auto" />
        </div>
      </div>

      <div className="custom-container my-20">
        <div className="w-full h-[50dvh] lg:h-[80dvh] 2xl:h-[600px] bg-neutral-200 rounded-3xl animate-pulse" />
      </div>
    </div>
  );
}
