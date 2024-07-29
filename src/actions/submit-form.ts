'use server'

import addProduct from '@/lib/add-product'
import { redirect } from 'next/navigation'

export async function submitForm() {
  await addProduct()

  redirect('/submitted')
}
