import React, { useMemo } from "react";
import Section from "./common/Section";
import { events } from "../assets/career";
import H2 from "./common/H2";
import H3 from "./common/H3";
import P from "./common/P";
import FadeUpAnimation from "./common/FadeUpAnimation";

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

const CareerSection: React.FC = () => {
  const reversedEvents = useMemo(() => [...events].reverse(), []);

  return (
    <Section id="career">
      <H2 className="mb-10 text-center">Career</H2>

      <div className="relative w-[90vw] max-w-[1000px] px-4 sm:px-6 md:px-10 before:absolute before:left-1/2 before:top-0 before:h-full before:w-[2px] before:-translate-x-1/2 before:bg-gray-300 dark:before:bg-gray-700">
        {reversedEvents.map((event, index) => {
          const isLeft = index % 2 === 0;

          return (
            <FadeUpAnimation
              delay={0.1 * index}
              key={event.fromTo}
              className="flex "
            >
              <div
                className={cn(
                  "relative w-full md:w-1/2 py-6 px-2 md:px-4 ",
                  isLeft
                    ? "md:ml-10 md:justify-self-start"
                    : "md:mr-10 md:justify-self-end"
                )}
              >
                {/* 타임라인 점 */}
                <div
                  className={cn(
                    "absolute z-10 -translate-x-1/2 top-7 left-1/2 md:top-1/9 lg:top-1/6",
                    isLeft
                      ? "md:right-11 md:translate-x-[100%] lg:right-13 lg:translate-x-[100%]"
                      : "md:left-8 lg:left-10"
                  )}
                >
                  <div className="relative w-5 h-5">
                    <span className="absolute inset-0 rounded-full opacity-75 bg-gradient-to-br from-indigo-400 to-purple-500 animate-ping" />
                    <span className="relative inline-block w-5 h-5 bg-white border-4 border-black rounded-full dark:border-white" />
                  </div>
                </div>

                {/* 박스 내용 */}
                <div
                  className={cn(
                    "rounded-lg p-4 shadow-lg  bg-white dark:bg-dark-bg-item transition-all duration-500 hover-target",
                    event.highlight
                      ? "opacity-100 hover:shadow-xl"
                      : "opacity-70"
                  )}
                >
                  {/* {event.icon && (
                    <div className="mb-2 text-xl">{event.icon}</div>
                  )} */}
                  <H3 className="mb-2">{event.heading}</H3>
                  <P pSize="xl" className="mb-2 opacity-60">
                    {`${event.where}`}
                  </P>
                  <P pSize="xl" className="mb-2 opacity-60">
                    {`(${event.fromTo})`}
                  </P>
                  <P
                    pSize="sm"
                    className="leading-snug whitespace-pre-line opacity-80"
                  >
                    {event.description}
                  </P>
                </div>
              </div>
            </FadeUpAnimation>
          );
        })}
      </div>
    </Section>
  );
};

export default CareerSection;
