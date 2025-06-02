import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { ProductFormType } from '@/features/create-product/model/schema';
import { API_URLS } from '@/shared/constants';

interface UseCreateProductOptions {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

export function useCreateProduct(options?: UseCreateProductOptions) {
  return useMutation({
    mutationFn: async (data: ProductFormType) => {
      const res = await axios.post(API_URLS.CREATE_PRODUCT, data);
      return res.data;
    },
    onSuccess: options?.onSuccess,
    onError: options?.onError,
  });
}
