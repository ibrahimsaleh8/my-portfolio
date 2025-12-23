"use client";
import Image from "next/image";
import { ThemeToggleBtn } from "./ThemeToggleBtn";
import myImage from "@images/my-image.webp";
import { motion } from "framer-motion";
const firstDelay = 2.3;

export default function MainHeader() {
  return (
    <header className="flex items-center justify-between gap-4 py-4 md:px-10 px-5 h-16">
      <motion.div
        initial={{ opacity: 0, x: 150, y: 105 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.2 + firstDelay,
          ease: "circOut",
        }}
        className="flex items-center gap-3">
        <Image
          src={myImage}
          alt="My image"
          width={500}
          height={500}
          className="w-11 h-11 object-cover object-top rounded-full"
        />
        <p>Ibrahim</p>
      </motion.div>
      <ThemeToggleBtn />
    </header>
  );
}
