import BottomScrolling from "@/components/sections/BottomScrolling";
import LeftMainHero from "@/components/sections/LeftMainHero";
import RightMainHero from "@/components/sections/RightMainHero";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
const firstDelay = 2.3;
export default function Home() {
  return (
    <div
      className="flex flex-col "
      style={{
        minHeight: "calc(100vh - 4rem)",
      }}>
      <div
        style={{
          minHeight: "calc(100vh - 12rem)",
        }}
        className="flex flex-col lg:flex-row gap-10 w-full lg:justify-between md:px-10 px-5 ">
        <LeftMainHero firstDelay={firstDelay} />
        <RightMainHero firstDelay={firstDelay} />
      </div>
      <BottomScrolling />
      <SmoothCursor
        springConfig={{
          damping: 45,
          stiffness: 320,
          mass: 1,
          restDelta: 0.001,
        }}
      />
    </div>
  );
}
