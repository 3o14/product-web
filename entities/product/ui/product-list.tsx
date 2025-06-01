'use client';

import React from 'react';
import { cn } from '@/shared/lib/cn';
import { useViewType } from '@/entities/custom-hook/useViewType';
import { IProduct } from '../model/types';
import { ProductItem } from './product-item';

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
