/**
 * UI 관련 상수들
 */
export const IMAGES = {
  LOGO_URL: 'https://cdn.weebur.com/assets/bi/logo.svg',
} as const;

export const BRAND_OPTIONS = ['Apple', 'Samsung', 'Weebur'] as const;

export const VIEW_TYPES = {
  LIST: 'list',
  GRID: 'grid',
} as const;

export const GRID_STYLES = {
  GAP: 'gap-4',
  GRID_LAYOUT: 'grid grid-cols-4 gap-y-6 xl:px-16 xl:px-32',
  LIST_LAYOUT: 'flex flex-col md:justify-center xl:px-32',
} as const;

export const FORM_VALIDATION = {
  MODE: 'onBlur',
} as const;
