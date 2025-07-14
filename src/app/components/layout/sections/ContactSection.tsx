import React from "react";
import ContactForm from "../ContactForm";

const ContactSection = () => {
  return (
    <section id="contact" className="relative my-40 z-50">
      <div className="bg-white rounded-2xl p-4 md:p-8 text-black">
        <header className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold">
            Let{"'"}s work together!
          </h2>
          <p className="opacity-75 text-sm md:text-base">
            Feel free to contact me! I am open to short or long term projects.
          </p>
        </header>
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;
