export default function LoadingSpinner() {
  return (
    <div className="w-full h-screen center">
      <div className="w-16 h-16 border-4 border-b-transparent border-brand-400 rounded-full animate-spin center">
        <div className="w-10 h-10 border-4 border-t-transparent border-brand-300 rounded-full animate-spin" />
      </div>
    </div>
  );
}
