import { fetchProducts } from '@/entities/product/model/api';
import ProductList from '@/entities/product/ui/product-list';

async function ProductPage() {
  const products = await fetchProducts();

  return <ProductList products={products} />;
}

export default ProductPage;
