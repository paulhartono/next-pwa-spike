import getProducts from '@/lib/get-products'
import { useQuery } from '@tanstack/react-query'

export function useGetProducts() {
  return useQuery({
    queryFn: async () => await getProducts(),
    queryKey: ['products'],
  })
}
