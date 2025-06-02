'use client';

import React from 'react';
import { cn } from '@/shared/lib/cn';
import { IProduct } from '@/entities/product/model/types';
import { ProductItem } from '@/entities/product/ui/ProductItem';
import { useViewType } from '@/shared/hooks/useViewType';

interface ProductListProps {
  products: IProduct[];
}

export default function ProductList({ products }: ProductListProps) {
  const { viewType } = useViewType();

  return (
    <ul className={cn('gap-4', viewType === 'grid' && 'grid grid-cols-4', viewType === 'list' && 'flex flex-col')}>
      {products.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </ul>
  );
}
