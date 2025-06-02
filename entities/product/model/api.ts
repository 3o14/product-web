import { IProduct } from '@/entities/product/model/types';
import { API_URLS } from '@/shared/constants';

const getProductsUrl = (params?: { limit?: number }) => {
  if (params?.limit) {
    return `${API_URLS.PRODUCTS}?limit=${params.limit}`;
  }
  return API_URLS.PRODUCTS;
};

export async function fetchProducts(limit?: number): Promise<IProduct[]> {
  const res = await fetch(getProductsUrl({ limit }), {
    cache: 'no-store',
  });

  if (!res.ok) throw new Error('상품 목록을 가져오는 데 실패했습니다.');

  return res.json();
}
