const VIEW_TYPE_KEY = 'product_view_type';
const VIEW_TYPE_TIMESTAMP_KEY = 'product_view_type_timestamp';
const EXPIRE_TIME = 4 * 1000; // 4초
// const EXPIRE_TIME = 24 * 60 * 60 * 1000; // 24시간 (밀리초)

export type ViewType = 'list' | 'grid';

function getRandomViewType(): ViewType {
  return Math.random() < 0.5 ? 'list' : 'grid';
}

export function getPersistedViewType(): ViewType {
  if (typeof window === 'undefined') {
    // 서버 환경일 땐 기본값 리턴
    return 'list';
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
  localStorage.setItem(VIEW_TYPE_KEY, newViewType);
  localStorage.setItem(VIEW_TYPE_TIMESTAMP_KEY, now.toString());

  return newViewType;
}
