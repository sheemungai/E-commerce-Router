import { createFileRoute } from '@tanstack/react-router'
import Products from '@/components/Admin.tsx/Products'

export const Route = createFileRoute('/Dashboard/product')({
  component: Products,
})



