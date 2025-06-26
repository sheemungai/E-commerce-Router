import { createFileRoute } from '@tanstack/react-router'
import Orders from '@/components/Admin.tsx/Orders'

export const Route = createFileRoute('/Dashboard/orders')({
  component: Orders,
})


