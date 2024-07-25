export default async function addProduct() {
  const res = await fetch('https://fakestoreapi.com/products', {
    method: 'POST',
    body: JSON.stringify({
      title: 'test product',
      price: 13.5,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic',
    }),
  })

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to add a product')
  }

  const productAdded = await res.json()
  console.log('product added = ', productAdded)

  return productAdded
}
