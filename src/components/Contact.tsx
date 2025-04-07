import React, { useState } from "react";
import Section from "./common/Section";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <Section id="contact">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
        Contact Me
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border rounded focus:ring focus:ring-blue-300"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border rounded focus:ring focus:ring-blue-300"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 border rounded focus:ring focus:ring-blue-300"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-3 px-6 rounded hover:bg-blue-600 transition"
        >
          Send Message
        </button>
      </form>
    </Section>
  );
};

export default ContactForm;
