'use client';

import { useRouter } from 'next/navigation';

export function CreateButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push('/products/new')}
      className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-hover transition-colors"
    >
      상품 등록
    </button>
  );
}
