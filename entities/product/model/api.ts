import { IProduct } from './types';

const API_BASE_URL = 'https://fakestoreapi.com';

const getProductsUrl = (params?: { limit?: number }) => {
  if (params?.limit) {
    return `${API_BASE_URL}/products?limit=${params.limit}`;
  }
  return `${API_BASE_URL}/products`;
};

export async function fetchProducts(limit?: number): Promise<IProduct[]> {
  const res = await fetch(getProductsUrl({ limit }), {
    cache: 'no-store',
  });

  if (!res.ok) throw new Error('상품 목록을 가져오는 데 실패했습니다.');

  return res.json();
}
