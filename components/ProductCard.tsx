"use client"
import { useCart } from "@/lib/cart-store"

export default function ProductCard({ product }: any) {
  const add = useCart((s) => s.add)

  return (
    <div className="border p-4 rounded-xl shadow">
      <h3 className="text-lg font-bold">{product.name}</h3>
      <p>KES {product.price}</p>
      <button
        onClick={() => add(product)}
        className="mt-3 bg-black text-white px-4 py-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  )
}
