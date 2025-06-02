import { z } from 'zod';

export const productSchema = z.object({
  title: z.string().min(1, '제목은 필수입니다').max(15, '제목은 15자 이내로 입력해주세요'),
  description: z.string().optional(),
  price: z.number({ invalid_type_error: '가격은 숫자여야 합니다' }).min(1000, '1000원 이상 입력해주세요'),
  discountPercentage: z
    .number({ invalid_type_error: '할인율은 숫자여야 합니다' })
    .min(0, '할인율은 0 이상이어야 합니다')
    .max(100, '할인율은 100 이하이어야 합니다')
    .optional(),
  brand: z.enum(['Apple', 'Samsung', 'Weebur'], {
    errorMap: () => ({ message: '브랜드를 선택해주세요' }),
  }),
});

export type ProductFormType = z.infer<typeof productSchema>;
