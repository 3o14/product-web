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
      <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-gray-100 data-[loaded=true]:bg-transparent transition-colors duration-200" />
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain transition-opacity duration-300 opacity-0 data-[loaded=true]:opacity-100"
          sizes="(max-width: 768px) 100vw, 300px"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0eHh0dHyMeHx8fHyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyP/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          onLoad={(e) => {
            const img = e.target as HTMLImageElement;
            img.dataset.loaded = 'true';
            img.parentElement?.querySelector('div')?.setAttribute('data-loaded', 'true');
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent animate-pulse data-[loaded=true]:hidden" />
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
