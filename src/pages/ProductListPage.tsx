
import { useParams } from 'react-router-dom';
import ProductGrid from '@/components/products/ProductGrid';
import { getProductsByCategory } from '@/data/products';

export default function ProductListPage() {
  const { category } = useParams<{ category: string }>();
  const validCategory = category === 'smartphones' ? 'smartphone' : 
                       category === 'earbuds' ? 'earbuds' : undefined;
  
  if (!validCategory) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-8">Category Not Found</h1>
        <p>The category you're looking for does not exist.</p>
      </div>
    );
  }
  
  const products = getProductsByCategory(validCategory);
  const categoryTitle = validCategory === 'smartphone' ? 'Smartphones' : 'Earbuds';
  
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">{categoryTitle}</h1>
      <ProductGrid products={products} showFilters={true} />
    </div>
  );
}
