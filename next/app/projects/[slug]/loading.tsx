export default function Loading() {
  return (
    <div className="min-h-screen pt-14 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
        <p className="text-sm text-muted-foreground">불러오는 중...</p>
      </div>
    </div>
  );
}
