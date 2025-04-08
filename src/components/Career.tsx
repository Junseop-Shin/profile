import React from "react";
import Section from "./common/Section";
import { events } from "../assets/career";
import H2 from "./common/H2";
import H3 from "./common/H3";
import H4 from "./common/H4";
import Span from "./common/Span";

const CareerSection: React.FC = () => {
  return (
    <Section id="career">
      <H2 className="text-center">Career</H2>

      <div className="space-y-6">
        {events.reverse().map((event) => (
          <div
            key={event.fromTo}
            className="flex flex-col items-center p-4 shadow-lg rounded-lg nth-last-[-n+2]:opacity-50 dark:bg-gray-600"
          >
            <H3 className="text-2xl font-bold text-gray-800">
              {event.heading}
            </H3>
            <H4 className="flex items-center justify-center mb-3">
              {`${event.where} (${event.fromTo})`}
            </H4>
            <Span className="opacity-70">{event.description}</Span>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default CareerSection;
