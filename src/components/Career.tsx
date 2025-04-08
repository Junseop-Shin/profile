import React from "react";
import Section from "./common/Section";
import { events } from "../assets/career";
import H2 from "./common/H2";

const CareerSection: React.FC = () => {
  return (
    <Section id="career">
      <H2 className="text-center">Career</H2>

      <div className="space-y-6">
        {events.reverse().map((event) => (
          <div
            key={event.fromTo}
            className="flex flex-col items-center p-4 shadow-lg rounded-lg nth-last-[-n+2]:opacity-50"
          >
            <h4 className="text-2xl font-bold text-gray-800">
              {event.heading}
            </h4>
            <div className="flex items-center justify-center text-lg font-semibold opacity-50">
              {`${event.where} (${event.fromTo})`}
            </div>
            <p className="text-sm text-gray-700">{event.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default CareerSection;
