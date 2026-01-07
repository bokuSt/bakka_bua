import { create } from "zustand"

type Item = { id: number; name: string; price: number }

type CartState = {
  items: Item[]
  add: (item: Item) => void
  total: () => number
}

export const useCart = create<CartState>((set, get) => ({
  items: [],
  add: (item) => set({ items: [...get().items, item] }),
  total: () => get().items.reduce((a, b) => a + b.price, 0)
}))
