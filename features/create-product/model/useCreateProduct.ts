import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { ProductFormType } from './schema';

export function useCreateProduct() {
  return useMutation({
    mutationFn: async (data: ProductFormType) => {
      const res = await axios.post('https://dummyjson.com/products/add', data);
      return res.data;
    },
  });
}
