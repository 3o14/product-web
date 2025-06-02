import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { ProductFormType } from './schema';

interface UseCreateProductOptions {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

export function useCreateProduct(options?: UseCreateProductOptions) {
  return useMutation({
    mutationFn: async (data: ProductFormType) => {
      const res = await axios.post('https://dummyjson.com/products/add', data);
      return res.data;
    },
    onSuccess: options?.onSuccess,
    onError: options?.onError,
  });
}
