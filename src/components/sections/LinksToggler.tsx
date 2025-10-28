"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/animate-ui/components/radix/sheet";
import { ArrowRight } from "lucide-react";
import { TextAnimate } from "../ui/text-animate";
type Props = {
  title: string;
  delay: number;
  content: ReactNode;
};
import { motion } from "framer-motion";
import { ReactNode } from "react";
export default function LinksToggler({ title, delay, content }: Props) {
  return (
    <Sheet>
      <SheetTrigger className="w-full overflow-hidden">
        <div className="xl:text-2xl lg:text-xl sm:text-lg relative text-base cursor-pointer !overflow-x-hidden link-arrow w-full py-4 group font-medium capitalize flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay }}
            className="absolute w-full h-[1px] bg-low-color left-0 bottom-0"></motion.div>
          <TextAnimate
            once
            startOnView={false}
            delay={delay}
            animation="slideLeft"
            by="character"
            as={"p"}>
            {title}
          </TextAnimate>

          <div className="overflow-hidden">
            <ArrowRight className="w-7 h-7 translate-x-[-100%] group-hover:translate-x-0 duration-500" />
          </div>
        </div>
      </SheetTrigger>
      <SheetContent className="gap-0">
        <SheetHeader className="p-0">
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        {/* Content */}
        {content}
      </SheetContent>
    </Sheet>
  );
}
