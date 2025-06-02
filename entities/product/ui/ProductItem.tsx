import Image from 'next/image';
import { IProduct } from '@/entities/product/model/types';
import { useViewType } from '@/shared/hooks/useViewType';
import { cn } from '@/shared/lib/cn';
import { VIEW_TYPES } from '@/shared/constants';
// todo 경로 수정
// import { IProduct } from '@/types/product';

interface ProductItemProps {
  product: IProduct;
}

export function ProductItem({ product }: ProductItemProps) {
  const { viewType } = useViewType();

  return (
    <div className={cn('w-full rounded-2xl p-4 bg-white', viewType === VIEW_TYPES.LIST && 'sm:flex sm:gap-4')}>
      <div
        className={cn(
          'relative w-full h-64 mb-4 rounded-lg overflow-hidden',
          viewType === VIEW_TYPES.LIST && 'sm:w-1/3 md:max-w-64',
        )}
      >
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

      <div className={cn(viewType === VIEW_TYPES.LIST && 'sm:w-2/3 sm:py-4 md:grow')}>
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
    </div>
  );
}
