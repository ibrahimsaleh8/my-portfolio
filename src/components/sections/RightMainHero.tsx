import { TextAnimate } from "../ui/text-animate";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import LinksToggler from "./LinksToggler";
import MyExperiences from "./MyExperiences";
import Projects from "./Projects";

export default function RightMainHero({ firstDelay }: { firstDelay: number }) {
  return (
    <div className="w-full flex flex-col justify-center gap-2 sm:pb-0 pb-4">
      <TextAnimate
        className="uppercase text-low-text font-bold lg:text-xl text-base tracking-wider"
        animation="slideUp"
        by="word"
        delay={0.5 + firstDelay}>
        select option
      </TextAnimate>

      <ul className="flex flex-col gap-5 mt-5">
        <li className="w-full">
          <LinksToggler
            content={<AboutMe />}
            delay={0.3 + firstDelay}
            title="About me"
          />
        </li>
        <li className="w-full">
          <LinksToggler
            content={<Projects />}
            delay={0.6 + firstDelay}
            title="Projects"
          />
        </li>
        <li className="w-full">
          <LinksToggler
            content={<ContactMe />}
            delay={0.9 + firstDelay}
            title="Contact me"
          />
        </li>
        <li className="w-full">
          <LinksToggler
            content={<MyExperiences />}
            delay={1.2 + firstDelay}
            title="Experience"
          />
        </li>
      </ul>
    </div>
  );
}
