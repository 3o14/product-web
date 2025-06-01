import { useEffect, useState } from 'react';
import { getPersistedViewType, ViewType } from '../product/utils/viewType';

export function useViewType() {
  const [viewType, setViewType] = useState<ViewType>('list');

  useEffect(() => {
    const type = getPersistedViewType();
    setViewType(type);
  }, []);

  return { viewType };
}
