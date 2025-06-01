'use client';

import { useRouter } from 'next/navigation';

export function CreateButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push('/products/new')}
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
    >
      상품 등록
    </button>
  );
}
