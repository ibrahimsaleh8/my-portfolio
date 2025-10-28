"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";

import cssSvg from "../../../public/images/icons/css_old.svg";
import htmlSvg from "../../../public/images/icons/html5.svg";
import jsSvg from "../../../public/images/icons/javascript.svg";
import bootstrapSvg from "../../../public/images/icons/bootstrap.svg";
import tailwindcssSvg from "../../../public/images/icons/tailwindcss.svg";
import reactSvg from "../../../public/images/icons/react_light.svg";
import reactquerySvg from "../../../public/images/icons/reactquery.svg";
import nextjsDarkSvg from "../../../public/images/icons/nextjs_logo_dark.svg";
import nextjsLightSvg from "../../../public/images/icons/nextjs_logo_light.svg";
import nodejsSvg from "../../../public/images/icons/nodejs.svg";
import expressjsLightSvg from "../../../public/images/icons/expressjs.svg";
import expressjsDarkSvg from "../../../public/images/icons/expressjs_dark.svg";
import postgresqlSvg from "../../../public/images/icons/postgresql.svg";
import prismaLightSvg from "../../../public/images/icons/prisma.svg";
import prismaDarkSvg from "../../../public/images/icons/prisma_dark.svg";
import reduxSvg from "../../../public/images/icons/redux.svg";
import zustandSvg from "../../../public/images/icons/zustand-original.svg";
import zodSvg from "../../../public/images/icons/zod.svg";
import reactRouterSvg from "../../../public/images/icons/reactrouter.svg";
import shadcnLightSvg from "../../../public/images/icons/shadcn-ui.svg";
import shadcnDarkSvg from "../../../public/images/icons/shadcn-ui_dark.svg";

export default function MyTechnologies() {
  const { theme } = useTheme();

  const techs = [
    { src: htmlSvg, title: "HTML" },
    { src: cssSvg, title: "CSS" },
    { src: jsSvg, title: "JavaScript" },
    { src: bootstrapSvg, title: "Bootstrap" },
    { src: tailwindcssSvg, title: "Tailwind CSS" },
    { src: reactSvg, title: "React" },
    { src: reactquerySvg, title: "React Query" },
    { src: reduxSvg, title: "Redux" },
    { src: zustandSvg, title: "zustand" },
    { src: reactRouterSvg, title: "reactrouter" },
    { src: zodSvg, title: "Zod" },
    {
      src: theme === "dark" ? shadcnDarkSvg : shadcnLightSvg,
      title: "Shadcn UI",
    },
    {
      src: theme === "dark" ? nextjsDarkSvg : nextjsLightSvg,
      title: "Next.js",
    },
    { src: nodejsSvg, title: "Node.js" },
    {
      src: theme === "dark" ? expressjsDarkSvg : expressjsLightSvg,
      title: "Express.js",
    },
    { src: postgresqlSvg, title: "PostgreSQL" },
    { src: theme === "dark" ? prismaDarkSvg : prismaLightSvg, title: "Prisma" },
  ];

  return (
    <div className="flex flex-wrap items-center gap-5">
      {techs.map((tech, i) => (
        <motion.div
          key={tech.title}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: i * 0.2 }}
          title={tech.title}>
          <Image
            src={tech.src}
            alt={tech.title}
            width={100}
            height={100}
            className="w-10 sm:w-12 md:w-14"
          />
        </motion.div>
      ))}
    </div>
  );
}
