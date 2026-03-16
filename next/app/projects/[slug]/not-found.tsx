import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-14">
      <div className="text-center">
        <p className="text-muted-foreground mb-4">프로젝트를 찾을 수 없습니다.</p>
        <Link href="/" className="text-primary text-sm hover:underline">
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  );
}
