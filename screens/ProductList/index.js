import ProductList from './ProductList'
import { ProductProvider } from '@context/product';

const Products = () => {
  return (
    <ProductProvider>
      <ProductList />
    </ProductProvider>
  )
}

export default Products;