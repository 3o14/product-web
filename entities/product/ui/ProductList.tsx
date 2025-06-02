'use client';

import React from 'react';
import { cn } from '@/shared/lib/cn';
import { IProduct } from '@/entities/product/model/types';
import { ProductItem } from '@/entities/product/ui/ProductItem';
import { useViewType } from '@/shared/hooks/useViewType';
import { GRID_STYLES, VIEW_TYPES } from '@/shared/constants';

interface ProductListProps {
  products: IProduct[];
}

export default function ProductList({ products }: ProductListProps) {
  const { viewType } = useViewType();

  return (
    <ul
      className={cn(
        GRID_STYLES.GAP,
        viewType === VIEW_TYPES.GRID && GRID_STYLES.GRID_LAYOUT,
        viewType === VIEW_TYPES.LIST && GRID_STYLES.LIST_LAYOUT,
      )}
    >
      {products.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </ul>
  );
}
