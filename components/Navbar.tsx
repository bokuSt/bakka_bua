"use client"
import { ShoppingCart, Gamepad2, BookOpen } from "lucide-react"

export default function Navbar({ brand }: { brand: string }) {
  return (
    <nav className="flex items-center justify-between p-4 border-b">
      <h1 className="font-bold text-xl">{brand}</h1>
      <div className="flex gap-4">
        <ShoppingCart />
        <Gamepad2 />
        <BookOpen />
      </div>
    </nav>
  )
}
