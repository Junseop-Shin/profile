import React from "react";
import Section from "./common/Section";
import { events } from "../assets/career";

const CareerSection: React.FC = () => {
  return (
    <Section id="career">
      <h2 className="text-3xl font-bold mb-12 text-gray-800 text-center">
        Career
      </h2>

      <div className="space-y-6 ">
        {events.reverse().map((event) => (
          <div
            key={event.fromTo}
            className="flex flex-col items-center p-4 shadow-lg rounded-lg  nth-last-[-n+2]:opacity-50"
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
