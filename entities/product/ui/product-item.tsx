import Image from 'next/image';
import { IProduct } from '../model/types';
// todo 경로 수정
// import { IProduct } from '@/types/product';

interface ProductItemProps {
  product: IProduct;
}

export function ProductItem({ product }: ProductItemProps) {
  return (
    <div className="w-full max-w-sm rounded-2xl p-4 bg-white">
      <div className="relative w-full h-64 mb-4">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain rounded-lg"
          sizes="(max-width: 768px) 100vw, 300px"
        />
      </div>

      <h2 className="text-lg font-semibold line-clamp-2 mb-1">{product.title}</h2>
      <p className="text-sm text-gray-500 line-clamp-2 mb-2">{product.description}</p>

      <div className="flex items-center justify-between text-sm mb-2">
        <span className="text-gray-600">{product.category}</span>
        <span className="text-yellow-500 font-medium">
          ⭐ {product.rating.rate.toFixed(1)} ({product.rating.count})
        </span>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-xl font-bold">${product.price.toFixed(2)}</span>
      </div>
    </div>
  );
}
