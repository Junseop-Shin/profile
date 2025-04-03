import React from "react";

const WorkSection: React.FC = () => {
  const projects = [
    { title: "Project A", description: "A web app for task management." },
    { title: "Project B", description: "A portfolio website for designers." },
  ];

  return (
    <section id="work" className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
        Work
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-700">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkSection;
