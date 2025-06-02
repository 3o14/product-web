/**
 * API 관련 상수들
 */
export const API_ENDPOINTS = {
  FAKE_STORE: 'https://fakestoreapi.com',
  DUMMY_JSON: 'https://dummyjson.com',
} as const;

export const API_URLS = {
  PRODUCTS: `${API_ENDPOINTS.FAKE_STORE}/products`,
  CREATE_PRODUCT: `${API_ENDPOINTS.DUMMY_JSON}/products/add`,
} as const;
