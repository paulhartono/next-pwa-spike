import { ProductList } from '@/components/product-list'
import getProducts from '@/lib/get-products'

export default async function SSRGetPage() {
  const products = await getProducts()
  console.log('products = ', products)

  return (
    <div>
      <h1 className=" font-bold text-2xl">SSR-Get Page</h1>
      <div className="py-4">
        <ProductList products={products} />
      </div>
    </div>
  )
}
