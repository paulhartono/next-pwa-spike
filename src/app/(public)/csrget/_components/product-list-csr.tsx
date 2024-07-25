'use client'
import { useGetProducts } from '@/app/hooks/use-products'
import { DefaultLoading } from '@/components/default-loading'
import { ProductList } from '@/components/product-list'
import * as React from 'react'
import { Suspense } from 'react'

export function ProductListCSR() {
  const { data, error, isLoading } = useGetProducts()
  console.log(data)

  if (error) return <div>Error when trying to fetch products.</div>

  if (isLoading) return <DefaultLoading />

  return (
    <Suspense fallback={<DefaultLoading />}>
      <ProductList products={data} />
    </Suspense>
  )
}
