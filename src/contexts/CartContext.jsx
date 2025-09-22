import { create } from 'zustand'
import { persist } from 'zustand/middleware'

// Zustand store with localStorage persistence
export const useCartStore = create(
  persist(
    (set, get) => ({
      // State
      items: [],
      
      // Computed values
      get totalItems() {
        return get().items.reduce((sum, item) => sum + item.quantity, 0)
      },
      
      get totalPrice() {
        return get().items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
      },
      
      // Actions
      addItem: (product, quantity = 1) => {
        set((state) => {
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
        })
      },
      
      removeItem: (id) => {
        set((state) => ({
          items: state.items.filter(item => item.id !== id)
        }))
      },
      
      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          get().removeItem(id)
          return
        }
        
        set((state) => ({
          items: state.items.map(item =>
            item.id === id ? { ...item, quantity } : item
          )
        }))
      },
      
      clearCart: () => {
        set({ items: [] })
      }
    }),
    {
      name: 'ems-suits-cart', // localStorage key
      partialize: (state) => ({ items: state.items }) // Only persist items
    }
  )
)

// Legacy export for backward compatibility during migration
export const useCart = useCartStore