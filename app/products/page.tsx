import { fetchProducts } from '@/entities/product/model/api';
import ProductList from '@/entities/product/ui/ProductList';
import { CreateButton } from '@/features/create-product/ui/CreateButton';

async function ProductPage() {
  const products = await fetchProducts();

  return (
    <div className="w-full flex flex-col justify-center items-center lg:gap-6">
      <CreateButton />
      <ProductList products={products} />
    </div>
  );
}

export default ProductPage;
