'use client'
import Image from "next/image";
import HeroImage from "@/public/images/me.png";
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from "react";

export default function Hero() {
  const phrases = [
    "whatever I want",
    "cool stuff", 
    "tech insights",
    "random thoughts",
    "coding adventures"
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % phrases.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <div className="max-w-[800px] h-[250px]">
        <div className="pt-8 pb-10">
          <div className="w-24 h-24 relative overflow-hidden rounded-full mx-auto">
            <Image
              src={HeroImage}
              alt="Profile picture"
              className="object-cover"
              fill
              sizes="(max-width: 120px) 100vw, 120px"
              priority
            />
          </div>
          <h1 className="h2 font-aspekta mb-5 text-center italic">
            I'm just a guy who writes about{" "}
            <AnimatePresence mode="popLayout">
              <motion.span
                key={phrases[currentIndex]}
                className="inline-flex italic relative text-sky-500 before:absolute before:inset-0 before:bg-sky-200 dark:before:bg-sky-500 before:opacity-30 before:-z-10 before:-rotate-2 before:translate-y-1/4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {phrases[currentIndex]}
              </motion.span>
            </AnimatePresence>
            {" "}
            and ships code.
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400">
          </p>
        </div>
      </div>
    </section>
  );
}
