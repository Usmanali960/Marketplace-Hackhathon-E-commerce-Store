import Link from "next/link"

export default function CheckoutSuccess() {
  return (
    <div className="max-w-4xl mx-auto p-4 text-center">
      <h1 className="text-3xl font-bold mb-4">Thank You for Your Order!</h1>
      <p className="mb-8">Your order has been successfully placed and is being processed.</p>
      <Link href="/" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
        Return to Store
      </Link>
    </div>
  )
}

