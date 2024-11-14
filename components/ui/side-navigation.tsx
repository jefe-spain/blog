'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import HeroImage from '@/public/images/me.png'
import { useAppStore } from '@/store/store';
import { motion } from 'motion/react';
import { NAV_ITEMS } from '@/app/menuRoutes';

export default function SideNavigation() {
  const { isMenuOpen } = useAppStore();


  const pathname = usePathname()

  return (
    <div>
    <motion.div
      className={`md:hidden sticky shrink-0 h-screen overflow-y-auto no-scrollbar border-r border-slate-200 dark:border-slate-800`}
      animate={{ width: isMenuOpen ? 0 : 64 }}
      transition={{ duration: isMenuOpen ? 0.1 : 0.3, ease: isMenuOpen ? "easeIn" : "easeOut" }}
      initial={false}
    >
      <div className="h-full flex flex-col justify-between after:flex-1 after:mt-auto">
        <div className="flex-1 max-h-[150px]">
          {pathname !== '/' && (
            <div className="flex justify-center my-4">
              <Link href="/">
                <Image className="rounded-full" src={HeroImage} width={36} height={36} priority alt="Me" />
              </Link>
            </div>
          )}
        </div>
        <div className="flex-1 grow flex items-center">
          <nav className="w-full">
            <ul className="space-y-4">
              {NAV_ITEMS.map((item) => (
              <li className="py-2">
                <Link
                  href={item.path}
                  className={`w-full h-6 flex items-center justify-center relative after:absolute after:w-0.5 after:right-0 after:top-0 after:bottom-0 ${pathname === item.path
                      ? 'text-sky-500 after:bg-sky-500'
                      : 'text-slate-400 hover:text-slate-500 dark:text-slate-500 dark:hover:text-slate-400'
                    }`}
                >
                  <span className="sr-only">{item.name}</span>
                  {item.icon}
                </Link>
              </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      </motion.div>
    </div>
  )
}
