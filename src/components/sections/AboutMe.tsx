"use client";
import SectionHeader from "./SectionHeader";
import { TextAnimate } from "../ui/text-animate";
import MyTechnologies from "./MyTechnologies";
import { motion } from "framer-motion";
import myImage from "@images/Myimage.jpg";
import Image from "next/image";
export default function AboutMe() {
  return (
    <div className="md:p-6 p-4 !overflow-x-hidden">
      <SectionHeader title="About Me" />
      <div className="flex flex-col gap-4 mt-3">
        {/* TOP */}
        <div className="flex items-center gap-7 flex-wrap">
          <div className="w-44 h-44 dark:bg-[#131313] bg-[#dbdbdb] rounded-full">
            <Image
              src={myImage}
              alt="My Image"
              width={1000}
              height={1000}
              className="w-44 h-44 object-cover object-top-left rounded-full"
            />
          </div>

          <div className="flex flex-col gap-4">
            <div className="text-lg ">
              <p className="font-medium">Ibrahim Saleh Ibrahim</p>
              <p className="font-bold">Frontend Developer - Nextjs</p>
            </div>
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="w-fit"
              transition={{ duration: 0.3, delay: 0.4 }}
              target="_blank"
              href="https://drive.google.com/file/d/1wY0mYwjgi98Vr2KtrKmPxrnlXAd-z37V/view?usp=drive_link">
              <TextAnimate
                delay={0.3}
                animation="blurInUp"
                startOnView={false}
                by="character"
                as={"button"}
                className="bg-black text-white rounded-2xl dark:bg-white dark:text-black border-2 dark:border-white border-black hover:bg-transparent duration-300 dark:hover:bg-transparent hover:text-black dark:hover:text-white text-sm px-4 py-2 font-bold"
                once>
                Show My CV
              </TextAnimate>
            </motion.a>
          </div>
        </div>
        {/*Text */}
        <div className="flex flex-col gap-5 md:text-2xl text-xl font-medium leading-[1.5]">
          <TextAnimate
            animation="fadeIn"
            once={true}
            by="line"
            as="p"
            startOnView={false}
            delay={0.3}
            transition={{ duration: 1 }}>
            {`Hi, I’m Ibrahim Saleh — a passionate Frontend Developer and Computer Science student at Menoufia University, Faculty of Computers and Information.

I specialize in building modern, high-performance web applications using Next.js 14, React, and TypeScript. My focus is on crafting clean, responsive, and user-friendly interfaces that combine great design with solid functionality.

Over the past period, I’ve worked on several full-featured e-commerce projects, integrating technologies like Redux Toolkit, React Query, Prisma, PostgreSQL, and Firebase. I’m also experienced with Shadcn UI, Tailwind CSS, Zustand, and React Hook Form for building sleek, scalable UI experiences.

I’m constantly improving my skills, exploring Node.js, Express, and NextAuth for backend and authentication solutions — aiming to become a well-rounded Full Stack Developer.

When I’m not coding, I love learning about UI/UX design, experimenting with animations using Framer Motion, and working on personal portfolio projects that reflect my growth and creativity.

My Technologies:`}
          </TextAnimate>

          <MyTechnologies />
        </div>
      </div>
    </div>
  );
}
