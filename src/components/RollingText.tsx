"use client";
import { motion } from "framer-motion";

export default function RollingText({
  title,
  delay,
  classes,
}: {
  title: string;
  classes?: string;
  delay: number;
}) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay }}
      className={`font-medium capitalize relative flex flex-col text-center items-center justify-center gap-5 group duration-300 overflow-hidden ${
        classes || ""
      }`}>
      <span className="group-hover:translate-y-[-100%] duration-300">
        {title}
      </span>
      <span className="absolute w-full -translate-x-1/2 bottom-[-150%] left-1/2 group-hover:bottom-0 duration-300">
        {title}
      </span>
    </motion.span>
  );
}
