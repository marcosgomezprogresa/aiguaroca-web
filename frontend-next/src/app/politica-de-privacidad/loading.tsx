export default function PrivacyPolicyLoading() {
  return (
    <div className="custom-container py-10 space-y-10">
      <div className="h-8 w-20 bg-gray-200 rounded animate-pulse" />
      <div className="h-10 w-48 bg-gray-200 rounded animate-pulse" />
      <div className="space-y-4">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="space-y-2">
            <div className="h-6 bg-gray-200 rounded animate-pulse" />
            <div className="h-6 w-5/6 bg-gray-200 rounded animate-pulse" />
          </div>
        ))}
      </div>
    </div>
  );
}
