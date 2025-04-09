import React, { useMemo } from "react";
import Section from "./common/Section";
import { events } from "../assets/career";
import H2 from "./common/H2";
import H3 from "./common/H3";
import H4 from "./common/H4";
import Span from "./common/Span";
import FadeUpAnimation from "./common/FadeUpAnimation";

const CareerSection: React.FC = () => {
  const reversedEvents = useMemo(() => [...events].reverse(), []);

  return (
    <Section id="career">
      <H2 className="text-center">Career</H2>

      <div className="space-y-6">
        {reversedEvents.reverse().map((event, index) => (
          <FadeUpAnimation delay={0.1 * index}>
            <div
              key={event.fromTo}
              className={`${
                index > events.length - 3 && "opacity-50"
              } flex flex-col items-center p-4 shadow-lg rounded-lg
                dark:bg-gray-600 transition-colors duration-500 hover-target`}
            >
              <H3 className="text-2xl font-bold text-gray-800">
                {event.heading}
              </H3>
              <H4 className="flex items-center justify-center mb-3">
                {`${event.where} (${event.fromTo})`}
              </H4>
              <Span className="opacity-70">{event.description}</Span>
            </div>
          </FadeUpAnimation>
        ))}
      </div>
    </Section>
  );
};

export default CareerSection;
