import { ReactNode } from "react";
import FadeUpAnimation from "./FadeUpAnimation";

interface SectionProps extends React.HTMLProps<HTMLElement> {
  children: ReactNode;
}

const Section = ({ children, ...props }: SectionProps) => {
  return (
    <FadeUpAnimation>
      <section
        className={`flex flex-col items-center justify-center min-h-screen text-center p-10 
        dark:bg-dark-bg-default transition-colors duration-500`}
        {...props}
      >
        {children}
      </section>
    </FadeUpAnimation>
  );
};

export default Section;
