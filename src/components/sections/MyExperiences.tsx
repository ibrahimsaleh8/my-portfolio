import { Eye, Github, Pin } from "lucide-react";
import SectionHeader from "./SectionHeader";
import RollingTextWithIcon from "../RollingLinkWithIcon";

export default function MyExperiences() {
  return (
    <div className="md:p-6 p-4 !overflow-x-hidden flex flex-col gap-6">
      <SectionHeader title="My Experience" />

      <div className="flex flex-col gap-4">
        <p className="text-lg font-bold flex items-center gap-1">
          <Pin className="w-5 h-5 dark:text-[#D8FD91] text-[#77b600]" />{" "}
          Freelance Frontend Developer — Wesal Project
        </p>
        <p className="text-sm w-fit">May 2025 | Remote</p>
        <ul className="flex flex-col gap-2 list-disc pl-4">
          <li>
            Developed Wesal: an Arabic Sign Language Converter Web App to
            support accessibility for deaf users.
          </li>
          <li>
            Completed full UI/UX and development using HTML, CSS, JavaScript in
            one week.{" "}
          </li>
          <li>
            Delivered a responsive, lightweight, and user-friendly interface.
          </li>
          <li>
            Worked directly with the client, gathering requirements and applying
            feedback efficiently.
          </li>
          <li>
            Key Impact: Helped improve communication accessibility for the deaf
            community.
          </li>
        </ul>

        <div className="flex items-center gap-5 flex-wrap mt-5">
          <div className="w-48">
            <RollingTextWithIcon
              delay={0.2}
              link={"https://github.com/ibrahimsaleh8/sign-language"}
              title="Github Repo"
              classes="w-full bg-box-bg px-4 py-1.5 rounded-2xl border-2 hover:border-black dark:hover:border-low-color border-low-color hover:bg-transparent duration-300"
              icon={<Github className="w-5 h-5" />}
            />
          </div>
          <div className="w-48">
            <RollingTextWithIcon
              delay={0.4}
              link={"https://sign-language-project.netlify.app/index.html"}
              title="Live Preview"
              classes="w-full bg-box-bg px-4 py-1.5 rounded-2xl border-2 hover:border-black dark:hover:border-low-color border-low-color hover:bg-transparent duration-300"
              icon={<Eye className="w-5 h-5" />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
