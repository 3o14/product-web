import { useEffect, useState } from 'react';
import { getPersistedViewType, ViewType } from '@/shared/lib/view-type';

export function useViewType() {
  const [viewType, setViewType] = useState<ViewType>('list');

  useEffect(() => {
    const type = getPersistedViewType();
    setViewType(type);
  }, []);

  return { viewType };
}
