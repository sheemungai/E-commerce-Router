import { createFileRoute } from '@tanstack/react-router'
import Payments from '@/components/Admin.tsx/Payments'

export const Route = createFileRoute('/Dashboard/paymnets')({
  component: Payments,
})


