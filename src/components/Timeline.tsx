import React from "react";

const TimelineSection: React.FC = () => {
  const events = [
    { year: "2020", description: "Started my journey as a developer." },
    { year: "2021", description: "Built my first portfolio website." },
    { year: "2022", description: "Worked on several freelance projects." },
  ];

  return (
    <section id="timeline" className="p-8 bg-white">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
        Timeline
      </h2>
      <div className="space-y-6">
        {events.map((event, index) => (
          <div key={index} className="flex items-center space-x-4">
            <div className="bg-blue-500 text-white w-16 h-16 flex items-center justify-center rounded-full font-bold">
              {event.year}
            </div>
            <p className="text-lg text-gray-700">{event.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TimelineSection;
