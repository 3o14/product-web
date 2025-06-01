import Link from 'next/link';
import { MdErrorOutline } from 'react-icons/md';

export default function NotFound() {
  return (
    <div className="h-full flex flex-col justify-center items-center gap-5">
      <div className="flex flex-col justify-center items-center gap-2">
        <MdErrorOutline size="40" className="text-primary" />
        <h1 className="text-xl">페이지를 찾을 수 없습니다. :(</h1>
      </div>
      <Link
        href="/products"
        className="flex h-10 bg-primary justify-center items-center text-white rounded-xl px-2 hover:bg-blue-500 transition"
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
}
