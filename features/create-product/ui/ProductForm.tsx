'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { productSchema, ProductFormType } from '../model/schema';
import { useCreateProduct } from '../model/useCreateProduct';
import { useRouter } from 'next/navigation';
import { cn } from '@/shared/lib/cn';
import { toast } from 'sonner';
import { Input } from '../../../shared/ui/Input';

export default function ProductForm() {
  const router = useRouter();
  const { mutate } = useCreateProduct();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ProductFormType>({
    resolver: zodResolver(productSchema),
    mode: 'onBlur',
  });

  const price = watch('price');
  const discount = watch('discountPercentage') ?? 0;
  const finalPrice = price ? price - (price * discount) / 100 : 0;

  const onSubmit = (data: ProductFormType) => {
    mutate(data, {
      onSuccess: () => {
        toast.success('상품이 성공적으로 생성되었습니다!');
        router.push('/products');
      },
      onError: () => {
        toast.error('상품 생성에 실패했습니다.');
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md">
      <Input label="제목" {...register('title')} error={errors.title?.message} />
      <textarea
        placeholder="설명"
        {...register('description')}
        className={cn(
          'w-full border border-zinc-300 p-2 rounded focus:outline-none focus:ring focus:ring-blue-500',
          errors.description && 'border-red-500',
        )}
      />
      {errors.description && <p className="text-sm text-red-500">{errors.description.message}</p>}

      <Input
        label="가격 (원)"
        type="number"
        {...register('price', { valueAsNumber: true })}
        error={errors.price?.message}
      />

      <Input
        label="할인율 (%)"
        type="number"
        {...register('discountPercentage', { valueAsNumber: true })}
        error={errors.discountPercentage?.message}
      />

      <div>
        <label className="block mb-1 text-sm font-medium">브랜드</label>
        <select
          {...register('brand')}
          className={cn(
            'w-full border border-zinc-300 p-2 rounded focus:outline-none focus:ring focus:ring-blue-500',
            errors.brand && 'border-red-500',
          )}
        >
          <option value="">선택하세요</option>
          <option value="Apple">Apple</option>
          <option value="Samsung">Samsung</option>
          <option value="Weebur">Weebur</option>
        </select>
        {errors.brand && <p className="text-sm text-red-500">{errors.brand.message}</p>}
      </div>

      <p className="text-sm text-gray-600">할인가: {finalPrice.toLocaleString()}원</p>
      <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-md">
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 font-bold rounded hover:bg-blue-700 disabled:opacity-50"
        >
          상품 생성
        </button>
      </div>
    </form>
  );
}
