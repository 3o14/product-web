'use client';

import { useRouter } from 'next/navigation';

export function CreateButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push('/products/new')}
      className="border-2 border-primary text-primary font-bold bg-transparent px-4 py-2 rounded hover:bg-primary hover:text-white transition-colors cursor-pointer"
    >
      👉🏻 상품 등록하러 가기
    </button>
  );
}
