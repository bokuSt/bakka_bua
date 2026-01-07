"use client"
import { useCart } from "@/lib/cart-store"
import Link from "next/link"

export default function FloatingCheckoutButton() {
  const total = useCart((s) => s.total())

  if (!total) return null

  return (
    <Link href="/checkout">
      <div className="fixed bottom-6 right-6 bg-black text-white px-6 py-3 rounded-full shadow-xl">
        Checkout • KES {total}
      </div>
    </Link>
  )
}
