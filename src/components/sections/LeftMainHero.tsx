import { TextAnimate } from "../ui/text-animate";

export default function LeftMainHero({ firstDelay }: { firstDelay: number }) {
  return (
    <div className="w-full flex flex-col lg:gap-16 gap-10 lg:pt-36 pt-8">
      {/* Text */}
      <div className="xl:text-9xl md:text-7xl text-5xl font-bold capitalize">
        <TextAnimate
          once
          startOnView={false}
          animation="slideUp"
          by="word"
          duration={0.5}
          delay={firstDelay}>
          {"i'm ibrahim"}
        </TextAnimate>
        <TextAnimate
          once
          startOnView={false}
          animation="slideUp"
          by="word"
          delay={0.5 + firstDelay}>
          Saleh.
        </TextAnimate>
      </div>
      <TextAnimate
        once
        startOnView={false}
        className="lg:text-2xl md:text-xl text-lg"
        animation="slideUp"
        by="word"
        duration={1}
        delay={0.6 + firstDelay}>
        I build modern, high-performance web experiences with clean code and
        thoughtful design. Always pushing for quality and innovation. Open to
        new opportunities.
      </TextAnimate>
    </div>
  );
}
