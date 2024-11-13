// Import Zustand for state management and icons for navigation
import { create } from 'zustand'
interface AppState {
  isMenuOpen: boolean 
  setMenu: (open: boolean) => void 
}

// Create the store with initial state and actions
export const useAppStore = create<AppState>((set) => ({
  isMenuOpen: true,
  setMenu: (open: boolean) => set({ isMenuOpen: open }),
}))


