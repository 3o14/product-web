import { useEffect, useState } from 'react';
import { getPersistedViewType, ViewType } from '@/shared/lib/view-type';
import { VIEW_TYPES } from '@/shared/constants';

export function useViewType() {
  const [viewType, setViewType] = useState<ViewType>(VIEW_TYPES.LIST);

  useEffect(() => {
    const type = getPersistedViewType();
    setViewType(type);
  }, []);

  return { viewType };
}
