import { create } from 'zustand'

interface AppState {
  openMenu: boolean
  setOpenMenu: (openMenu: boolean) => void
}

export const useAppStore = create<AppState>((set) => ({
  openMenu: true,
  setOpenMenu: (openMenu) => set({ openMenu }),
}))