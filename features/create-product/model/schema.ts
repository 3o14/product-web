import { z } from 'zod';
import { BRAND_OPTIONS } from '@/shared/constants';

export const productSchema = z.object({
  title: z.string().min(1, { message: '제목은 필수입니다' }),
  description: z.string().min(1, { message: '설명은 필수입니다' }),
  price: z.number({ invalid_type_error: '가격은 숫자여야 합니다' }).min(0, { message: '가격은 0 이상이어야 합니다' }),
  discountPercentage: z.number().min(0).max(100).optional(),
  brand: z.enum(BRAND_OPTIONS, {
    required_error: '브랜드를 선택해주세요',
  }),
});

export type ProductFormType = z.infer<typeof productSchema>;
