"use client";

import { ReactNode } from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import LoadingPage from "./LoadingPage";

export default function ManageLoading({ children }: { children: ReactNode }) {
  return (
    <AnimatePresence mode="wait">
      <LoadingPage key={1} />
      <motion.div
        key={2}
        initial={{ opacity: 0, display: "none" }}
        animate={{ opacity: 1, display: "block" }}
        transition={{ delay: 2.3 }}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
