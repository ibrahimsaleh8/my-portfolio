"use client";
import { motion } from "framer-motion";
import RollingText from "../RollingText";
import { SheetClose } from "../animate-ui/primitives/radix/sheet";
export default function SectionHeader({ title }: { title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.3 }}
      className="sm:overflow-x-hidden flex items-center justify-between flex-wrap">
      <RollingText delay={0.2} title={title} classes="sm:text-3xl text-2xl" />

      <SheetClose asChild>
        <button className="bg-transparent border-2 border-low-text duration-500 text-black dark:text-white rounded-2xl px-4 py-2 hover:!border-red-500 hover:!text-red-500">
          Close
        </button>
      </SheetClose>
    </motion.div>
  );
}
