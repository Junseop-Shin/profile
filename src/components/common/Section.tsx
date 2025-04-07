import { ReactNode } from "react";
import FadeUpAnimation from "./FadeUpAnimation";

interface SectionProps extends React.HTMLProps<HTMLElement> {
  children: ReactNode;
}

const Section = ({ children, ...props }: SectionProps) => {
  return (
    <FadeUpAnimation>
      <section className="h-[100vh] pt-[130px] text-center" {...props}>
        {children}
      </section>
    </FadeUpAnimation>
  );
};

export default Section;
