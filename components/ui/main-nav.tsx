"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavItem } from "@/types";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";

interface MainNavProps {
  items?: NavItem[];
  children?: React.ReactNode;
}

export function MainNav({ items }: MainNavProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest: number) => {
    if (latest > 50 && !isScrolled) {
      setIsScrolled(true);
    } else if (latest <= 50 && isScrolled) {
      setIsScrolled(false);
    }
  });

  return (
    <div className="container flex h-16 items-center justify-center transition-all md:visible w-0">
      {items && items.length ? (
        <nav className="hidden px-4 py-2 md:block">
          <ul className="flex space-x-4">
            {items.map((item) => (
              <li
                key={item.title}
                className={`cursor-pointer text-muted-foreground transition-all hover:text-secondary-foreground text-lg relative group`}
              >
                <Link href={item.href} className={`${
                  item.href === pathname ? 'text-sky-500' : 'text-black text-slate-400 hover:text-sky-500 dark:text-white dark:hover:text-slate-200'
                }`}>
                  {item.title}
                  <motion.div
                    className="absolute -bottom-1 left-0 h-[2px] bg-sky-500 w-0"
                    initial={{ width: item.href === pathname ? "100%" : "0%" }}
                    animate={{ width: item.href === pathname ? "100%" : "0%" }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </div>
  );
}
