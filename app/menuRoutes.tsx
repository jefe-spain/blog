import { BlogIcon, AboutIcon, SubscribeIcon } from '@/components/ui/sidebarMenuIcons'

export interface NavItem {
  name: string
  path: string
  icon: React.ReactNode,
  isSidebarOnly?: boolean
  isHeaderOnly?: boolean
}

export const NAV_ITEMS: NavItem[] = [
  { name: 'Blog', path: '/', icon: BlogIcon },
  { name: 'About', path: '/about', icon: AboutIcon }, 
  { name: 'Subscribe', path: '/subscribe', icon: SubscribeIcon, isSidebarOnly: true },
]