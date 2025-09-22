import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      
      // Getters
      getTotalItems: () => {
        const state = get()
        return state.items.reduce((sum, item) => sum + item.quantity, 0)
      },
      
      getTotalPrice: () => {
        const state = get()
        return state.items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
      },
      
      // Actions
      addItem: (product, quantity = 1) => set((state) => {
        const existingItem = state.items.find(item => item.id === product.id)
        
        if (existingItem) {
          return {
            items: state.items.map(item =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + quantity }
                : item
            )
          }
        }
        
        return {
          items: [...state.items, { ...product, quantity }]
        }
      }),
      
      removeItem: (id) => set((state) => ({
        items: state.items.filter(item => item.id !== id)
      })),
      
      updateQuantity: (id, quantity) => set((state) => {
        if (quantity <= 0) {
          return {
            items: state.items.filter(item => item.id !== id)
          }
        }
        
        return {
          items: state.items.map(item =>
            item.id === id ? { ...item, quantity } : item
          )
        }
      }),
      
      clearCart: () => set({ items: [] }),
      
      setIsOpen: (isOpen) => set({ isOpen }),
      
      toggleCart: () => set((state) => ({ isOpen: !state.isOpen }))
    }),
    {
      name: 'ems-suits-cart', // localStorage key
      partialize: (state) => ({ items: state.items }) // Only persist items
    }
  )
)

export default useCartStore