'use client'
import addProduct from '@/lib/add-product'
import { useMutation } from '@tanstack/react-query'

export function MutationSpike() {
  const mutation = useMutation({
    mutationFn: () => {
      return addProduct()
    },
  })

  return (
    <div>
      {mutation.isPending ? (
        'Adding product...'
      ) : (
        <>
          {mutation.isError ? <div>An error occurred: {mutation.error.message}</div> : null}

          {mutation.isSuccess ? <div>Product added!</div> : null}

          <button
            onClick={() => {
              mutation.mutate()
            }}
            className="border-black border-2 bg-slate-200"
          >
            Add Product
          </button>
        </>
      )}
    </div>
  )
}
