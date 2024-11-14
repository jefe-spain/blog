"use client";

import { motion, useCycle } from "motion/react";
import { useAppStore } from "@/store/store";

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="2"
    stroke="grey"
    strokeLinecap="round"
    {...props}
  />
);

interface HamburgerMenuProps {
  isOpen: boolean;
  toggleOpen: () => void;
}

export default function HamburgerMenu() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const { setMenu } = useAppStore();

  return (
    <motion.nav initial={false} animate={isOpen ? "open" : "closed"}>
      <button className="" onClick={() => {
          toggleOpen();
          setMenu(isOpen);
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24">
          <Path
            variants={{
              closed: { d: "M 2 2.5 L 20 2.5" },
              open: { d: "M 3 16.5 L 17 2.5" },
            }}
          />
          <Path
            d="M 2 9.423 L 20 9.423"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            transition={{ duration: 0.1 }}
          />
          <Path
            variants={{
              closed: { d: "M 2 16.346 L 20 16.346" },
              open: { d: "M 3 2.5 L 17 16.346" },
            }}
          />
        </svg>
      </button>
    </motion.nav>
  );
}
