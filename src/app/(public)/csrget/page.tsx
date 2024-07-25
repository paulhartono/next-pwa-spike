import { ProductListCSR } from './_components/product-list-csr'

export default async function CSRGetPage() {
  return (
    <div>
      <h1 className=" font-bold text-2xl">CSR-Get Page</h1>
      <div className="py-4">
        <ProductListCSR />
      </div>
    </div>
  )
}
