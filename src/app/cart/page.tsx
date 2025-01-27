"use client"
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useRouter } from "next/navigation"
import { clearCart, increaseTheQuantity, decreaseTheQuantity, removeFromCart } from "@/app/redux/cartSlice"
import type { RootState } from "@/app/redux/store"
import Image from "next/image"
import { Bounce, toast } from "react-toastify"

const CheckoutPage = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const dispatch = useDispatch()
  const router = useRouter()

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    paymentMethod: "credit_card",
  })

  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" })) // Clear error when user types
  }

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {}
    Object.entries(formData).forEach(([key, value]) => {
      if (!value.trim()) {
        newErrors[key] = `${key.replace(/([A-Z])/g, " $1")} is required`
      }
    })
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) {
      toast.error("Please fill in all fields before placing the order!", { theme: "dark", transition: Bounce })
      return
    }

    console.log("Order submitted:", { items: cartItems, ...formData, total })
    dispatch(clearCart())
    toast.success("Order placed successfully!", { theme: "dark", transition: Bounce })
    router.push("/orderConfirm")
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shippingCost = 5.99
  const total = subtotal + shippingCost

  if (cartItems.length === 0) {
    return (
      <div className="h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
          <p className="mb-4">Add some items to your cart before checking out.</p>
          <button
            onClick={() => router.push("/")}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center mb-8">Checkout</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <ul className="space-y-4">
                {cartItems.map((item) => (
                  <li key={item.id} className="flex items-center gap-4">
                    <div className="w-16 h-16 relative">
                      <Image
                        src={item.image || "/placeholder-image.jpg"}
                        alt={item.productName}
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-medium">{item.productName}</h3>
                      <p className="text-sm text-gray-500">
                        {item.quantity} x Rs.{item.price.toFixed(2)}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => dispatch(decreaseTheQuantity(item.id))}
                          className="bg-gray-200 text-gray-700 px-2 py-1 rounded hover:bg-gray-300 transition-colors"
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => dispatch(increaseTheQuantity(item.id))}
                          className="bg-gray-200 text-gray-700 px-2 py-1 rounded hover:bg-gray-300 transition-colors"
                        >
                          +
                        </button>
                        <i
                          onClick={() => dispatch(removeFromCart(item.id))}
                          className='bx bxs-trash-alt text-red-800 cursor-pointer'
                        ></i>
                      </div>
                    </div>
                    <span className="font-semibold">Rs.{(item.price * item.quantity).toFixed(2)}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>Rs.{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Rs.{shippingCost.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span>Rs.{total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
              {Object.entries(formData).map(([key, value]) => (
                key !== "paymentMethod" && (
                  <div key={key}>
                    <input
                      type="text"
                      name={key}
                      placeholder={key.replace(/([A-Z])/g, " $1")}
                      required
                      className={`w-full px-3 py-2 border rounded ${errors[key] ? "border-red-500" : ""}`}
                      value={value}
                      onChange={handleInputChange}
                    />
                    {errors[key] && <p className="text-red-500 text-sm">{errors[key]}</p>}
                  </div>
                )
              ))}

              <div>
                <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
                <select
                  name="paymentMethod"
                  className="w-full px-3 py-2 border rounded"
                  value={formData.paymentMethod}
                  onChange={handleInputChange}
                >
                  <option value="credit_card">Credit Card</option>
                  <option value="paypal">PayPal</option>
                  <option value="bank_transfer">Bank Transfer</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Place Order
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage
