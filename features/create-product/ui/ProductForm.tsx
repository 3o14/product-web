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

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ProductFormType>({
    resolver: zodResolver(productSchema),
    mode: 'onBlur',
  });

  const { mutate, isPending } = useCreateProduct({
    onSuccess: () => {
      router.replace('/products');
      toast.success('상품이 성공적으로 생성되었습니다!');
      reset();
    },
    onError: (error) => {
      const errorMessage = error.message || '상품 생성에 실패했습니다.';
      toast.error(errorMessage);
    },
  });

  const price = watch('price');
  const discount = watch('discountPercentage') ?? 0;
  const finalPrice = price ? price - (price * discount) / 100 : 0;

  const onSubmit = (data: ProductFormType) => {
    if (isPending || isSubmitting) return;
    mutate(data);
  };

  const isLoading = isPending || isSubmitting;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md space-y-4">
      <Input label="제목" {...register('title')} error={errors.title?.message} />
      
      <textarea
        placeholder="설명"
        {...register('description')}
        className={cn(
          'w-full rounded border border-zinc-300 p-2 focus:outline-none focus:ring focus:ring-blue-500',
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
        <label className="mb-1 block text-sm font-medium">브랜드</label>
        <select
          {...register('brand')}
          className={cn(
            'w-full rounded border border-zinc-300 p-2 focus:outline-none focus:ring focus:ring-blue-500',
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
          disabled={isLoading}
          className={cn(
            "w-full rounded py-2 font-bold transition-colors",
            isLoading
              ? "cursor-not-allowed bg-gray-400 text-gray-600"
              : "bg-blue-600 text-white hover:bg-blue-700",
          )}
        >
          {isLoading ? (
            <div className="flex items-center justify-center gap-2">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
              상품 생성 중...
            </div>
          ) : (
            '상품 생성'
          )}
        </button>
      </div>
    </form>
  );
}
