import { VIEW_TYPES } from '@/shared/constants';

const VIEW_TYPE_KEY = 'product_view_type';
const VIEW_TYPE_TIMESTAMP_KEY = 'product_view_type_timestamp';
const EXPIRE_TIME = 4 * 1000; // 4초
// const EXPIRE_TIME = 24 * 60 * 60 * 1000; // 24시간 (밀리초)

/**
 * 브라우저 환경에서 'list' 또는 'grid' 중 랜덤하게 반환
 * 서버 환경에서는 항상 'list' 반환
 */
export type ViewType = typeof VIEW_TYPES.LIST | typeof VIEW_TYPES.GRID;

function getRandomViewType(): ViewType {
  return Math.random() < 0.5 ? VIEW_TYPES.LIST : VIEW_TYPES.GRID;
}

export function getPersistedViewType(): ViewType {
  if (typeof window === 'undefined') {
    // 서버 사이드에서는 기본값 반환
    return VIEW_TYPES.LIST;
  }

  const savedType = localStorage.getItem(VIEW_TYPE_KEY);
  const savedTimestamp = localStorage.getItem(VIEW_TYPE_TIMESTAMP_KEY);
  const now = Date.now();

  if (savedType && savedTimestamp) {
    const elapsed = now - Number(savedTimestamp);
    if (elapsed < EXPIRE_TIME) {
      return savedType as ViewType;
    }
  }

  // 저장된 값 없거나 24시간 지남 → 새로 랜덤 결정 후 저장
  const newViewType = getRandomViewType();
  localStorage.setItem(VIEW_TYPE_KEY, newViewType.toString());
  localStorage.setItem(VIEW_TYPE_TIMESTAMP_KEY, now.toString());

  return newViewType;
}
