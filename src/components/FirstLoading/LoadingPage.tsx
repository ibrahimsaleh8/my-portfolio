"use client";
import { motion } from "framer-motion";
import { TextAnimate } from "../ui/text-animate";
export default function LoadingPage() {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: "-120%" }}
      transition={{ duration: 0.8, delay: 2.3 }}
      className="h-screen w-screen z-50 absolute flex items-center justify-center bg-[#111315] text-white overflow-hidden">
      <div className="lg:text-6xl md:text-4xl text-2xl pb-5 flex flex-col gap-4">
        <TextAnimate
          delay={0.7}
          duration={0.5}
          animation="blurInUp"
          by="character"
          as={"p"}
          once>
          Are you ready?
        </TextAnimate>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.7 }}
          className="w-full h-[1px] bg-white"></motion.div>
      </div>
    </motion.div>
  );
}
