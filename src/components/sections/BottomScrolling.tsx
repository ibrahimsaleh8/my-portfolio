import React from "react";
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "../ui/scroll-based-velocity";
const scrollingData = [
  "Fullstack Developer",
  "Next.js Developer",
  "TypeScript Enthusiast",
  "Building Scalable Web Apps",
  "Computer Science Student",
  "Passionate about Modern Web Development",
];

export default function BottomScrolling() {
  return (
    <ScrollVelocityContainer className="sm:text-4xl text-2xl font-bold bg-[#D8FD91] text-black mt-auto sm:py-4 py-3">
      <ScrollVelocityRow baseVelocity={4} direction={1}>
        {scrollingData.map((txt, i) => (
          <p className="ml-14 flex items-center gap-6" key={i}>
            <span>•</span> <span>{txt}</span>
          </p>
        ))}
      </ScrollVelocityRow>
    </ScrollVelocityContainer>
  );
}
