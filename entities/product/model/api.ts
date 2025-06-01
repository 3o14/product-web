import { IProduct } from './types';

export async function fetchProducts(): Promise<IProduct[]> {
  const res = await fetch('https://fakestoreapi.com/products', {
    cache: 'no-store',
  });

  if (!res.ok) throw new Error('상품 목록을 가져오는 데 실패했습니다.');

  return res.json();
}
