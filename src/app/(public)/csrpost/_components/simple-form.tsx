'use client'
import addProduct from '@/lib/add-product'

import { useForm, SubmitHandler } from 'react-hook-form'
import { z } from 'zod'

type FormData = {
  title: string
  price: number
  category: string
}

const formSchema = z.object({
  title: z.string(),
  price: z.number(),
  category: z.string(),
})

export function SimpleForm() {
  // 1. Define your form.
  const form = useForm<FormData>({
    defaultValues: {
      title: '',
      price: 10,
      category: 'electronic',
    },
  })

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const res = await addProduct()
  }

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col space-y-4">
      {/* register your input into the hook by invoking the "register" function */}
      <input {...form.register('title')} />

      {/* include validation with required or other standard HTML validation rules */}
      <input {...form.register('price', { required: true })} />
      {/* errors will return when field validation fails  */}
      {form.formState.errors.price && <span>Price is required</span>}

      <input type="submit" className="border-black border-2 bg-slate-200" />
    </form>
  )
}
