import { useOrderState } from '@/hooks/useOrder'

function Orders() {
  const { data } = useOrderState()
  console.log(data)
  return (
    <div>
      <header className="shadow-md bg-white p-6 border-b border-gray-200">
        <h1 className="font-bold text-3xl text-gray-800">Orders</h1>
      </header>
    </div>
  )
}

export default Orders
