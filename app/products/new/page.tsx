'use client';

import ProductForm from '@/features/create-product/ui/ProductForm';

export default function CreateProductPage() {
  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="w-full text-center text-2xl font-bold mb-4">상품 생성</h1>
      <ProductForm />
    </div>
  );
}
