import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/animate-ui/components/radix/accordion";
import SectionHeader from "./SectionHeader";
import ProjectCard from "./ProjectCard";
import gamingStoreImage from "@images/projects/gameingStore.webp";
import megazaStoreImage from "@images/projects/MegazaStore.webp";
import universitySystemImage from "@images/projects/University_Management_System.webp";
import optimoImage from "@images/projects/Optimo.webp";

export default function Projects() {
  return (
    <div className="md:p-6 p-4 !overflow-x-hidden">
      <SectionHeader title="Projects" />

      <Accordion defaultValue={"project-1"} type="single">
        <AccordionItem value="project-1">
          <AccordionTrigger className="sm:!text-2xl !text-xl !flex !items-center !gap-1 !text-left">
            <div className="flex items-center gap-4">
              <span className="font-bold">1.</span> <span>Gameing Store</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="overflow-hidden pt-4">
            <ProjectCard
              description="
            A feature-rich e-commerce platform for purchasing video games
              across PC, PlayStation, and Xbox. Delivers an engaging shopping
              experience with real-time order tracking, wishlist functionality,
              and discount codes that increased average session duration by 35%.
              Built with secure Firebase authentication and includes a
              comprehensive admin dashboard for order and product management.
              Features a responsive, animated UI with smooth interactions that
              achieved a 25% lower bounce rate on mobile devices through
              optimized performance and intuitive design.
            "
              previewLink="https://gaming-ecommerce-a7eac.web.app/"
              repoLink="https://github.com/ibrahimsaleh8/gaming-store"
              techStack="
              React, TypeScript, Redux Toolkit, RTK Query, React Hook Form, Yup,
              Tailwind CSS, Shadcn UI, Framer Motion, Firebase
              "
              videoLink="https://www.facebook.com/share/v/1CyZtccTCc/"
              imageAlt="Gameing Store Image"
              imageUrl={gamingStoreImage}
            />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="project-2">
          <AccordionTrigger className="sm:!text-2xl !text-xl !flex !items-center !gap-1 !text-left">
            <div className="flex items-center gap-4">
              <span className="font-bold">2.</span> <span>Megaza Store</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="overflow-hidden pt-4">
            <ProjectCard
              description="
A full-stack e-commerce platform built for men's fashion with a focus on performance and user experience. Features dynamic product filtering and advanced search functionality that reduced user search time by 50%, along with seamless pagination for browsing. Integrated Stripe for secure payments and developed a comprehensive admin dashboard for managing inventory, orders, and discount codes. Implemented lazy loading, server-side rendering, and API caching to achieve 40% faster page load times and 90+ SEO scores on Google Lighthouse.
            "
              previewLink="https://megaza-store.vercel.app/"
              repoLink="https://github.com/ibrahimsaleh8/megaza-store"
              techStack="
              Next.js, TypeScript, React Query, Zustand, Prisma, PostgreSQL, Stripe, Cloudinary, Tailwind CSS, Zod
              "
              videoLink="https://www.linkedin.com/posts/ibrahim-saleh-dev_nextjs-typescript-react-activity-7307411410517401600-qyzA?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC8yZigBd20_s3xE1AX3NVXezXx69C7vAlg"
              imageAlt="Megaza Store Image"
              imageUrl={megazaStoreImage}
            />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="project-3">
          <AccordionTrigger className="sm:!text-2xl !text-xl !flex !items-center !gap-1 !text-left">
            <div className="flex items-center gap-4">
              <span className="font-bold">3.</span>{" "}
              <span>University Management System</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="overflow-hidden pt-4">
            <ProjectCard
              description="
A comprehensive academic management system designed to streamline university operations for students, teachers, and administrators. Built with role-based dashboards enabling efficient class scheduling, exam creation, and result tracking. Features a Classroom Management system where teachers can create classes, assign students, and share course materials seamlessly. Includes secure authentication, protected API routes, and optimized database queries for fast performance and scalability across all user roles.
            "
              previewLink="https://university-management-system-eta.vercel.app/"
              repoLink="https://github.com/ibrahimsaleh8/university-management-system"
              techStack="
Next.js 15, TypeScript, Prisma, PostgreSQL, Tailwind CSS, Shadcn UI, React Query, Redux Toolkit, Zod, Cloudinary, Nodemailer              "
              videoLink="https://www.linkedin.com/posts/ibrahim-saleh-dev_universitymanagement-webdevelopment-nextjs-activity-7375186042393489408-4euh?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC8yZigBd20_s3xE1AX3NVXezXx69C7vAlg"
              imageAlt="University Management System Image"
              imageUrl={universitySystemImage}
            />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="project-4">
          <AccordionTrigger className="sm:!text-2xl !text-xl !flex !items-center !gap-1 !text-left">
            <div className="flex items-center gap-4">
              <span className="font-bold">4.</span>{" "}
              <span>Optimo - Image Compression & Conversion</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="overflow-hidden pt-4">
            <ProjectCard
              description="
Optimo is a lightweight and efficient web app for compressing images and converting them between formats while maintaining optimal quality. Users can adjust compression levels to reduce file size without losing much visual fidelity. The tool supports multiple image formats and provides a fast, intuitive interface for developers, designers, and content creators.
      "
              previewLink="https://optimizer-frontend.vercel.app/"
              repoLink="https://github.com/ibrahimsaleh8/optimo-backend"
              techStack="
Node.js, Express.js, Sharp, Next js, Tailwind CSS, Shadcn UI,Vercel"
              videoLink="https://www.linkedin.com/posts/ibrahim-saleh-dev_%D8%A7%D9%84%D8%AD%D9%85%D8%AF%D9%84%D9%84%D9%87-%D8%A7%D9%88%D9%84-%D9%85%D8%B4%D8%B1%D9%88%D8%B9-%D9%84%D9%8A%D8%A7-%D8%A8-node-js-%D9%88-express-activity-7403763016099569664-orZm?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC8yZigBd20_s3xE1AX3NVXezXx69C7vAlg"
              imageAlt="Optimo Project Screenshot"
              imageUrl={optimoImage}
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
