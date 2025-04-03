import React from "react";

const HomeSection: React.FC = () => {
  return (
    <section id="about" className="p-8 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">About Me</h2>
      <p className="text-lg text-gray-700 leading-relaxed">
        Hello! I'm a passionate developer with experience in building modern web
        applications. I enjoy solving complex problems and creating
        user-friendly designs.
      </p>
      <img
        src="/images/profile.jpg"
        alt="Profile"
        className="w-32 h-32 rounded-full mx-auto mt-6 border-4 border-blue-500"
      />
    </section>
  );
};

export default HomeSection;
