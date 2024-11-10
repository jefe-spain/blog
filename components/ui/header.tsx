"use client";

import Link from "next/link";
import ThemeToggle from "./theme-toggle";
import { MainNav } from "./main-nav";
import { motion, useCycle } from "framer-motion";
import HamburgerMenu from "./hamburger-menu";


const navigation = [
  {
    title: "Blog",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
];

export default function Header() {
  return (
    <header>
      <div className="flex items-center justify-between ">
        <div className="flex items-center">
          <div className="md:hidden mt-2 ml-6 w-[64px]">
            <HamburgerMenu/>
          </div>
        </div>
        <MainNav items={navigation} />
        <div className="flex space-x-4 mr-4">
          {/* Search form */}
          <form className="w-full">
            <div className="flex flex-wrap">
              <div className="w-[180px] md:w-[220px]">
                <label className="block text-sm sr-only" htmlFor="search">
                  Search
                </label>
                <div className="relative flex items-center">
                  <input
                    id="search"
                    type="search"
                    className="form-input py-1 w-full pl-10"
                  />
                  <div className="absolute inset-0 right-auto flex items-center justify-center">
                    <svg
                      className="w-4 h-4 shrink-0 mx-3"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="fill-slate-400"
                        d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm8.707 12.293a.999.999 0 11-1.414 1.414L11.9 13.314a8.019 8.019 0 001.414-1.414l2.393 2.393z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </form>

          {/* Light switch */}
          <ThemeToggle />

          {/* Button */}
          <Link
            className="btn-sm text-slate-100 bg-sky-500 hover:bg-sky-600"
            href="/subscribe"
          >
            Subscribe
          </Link>
        </div>
      </div>
    </header>
  );
}
