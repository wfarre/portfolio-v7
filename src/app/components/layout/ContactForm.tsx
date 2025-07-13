import React, { useRef, useState } from "react";
import FormInput from "../ui/FormInput";
import emailjs from "@emailjs/browser";

const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_KEY as string;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;

const ContactForm = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  console.log(PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID);

  const form = useRef<HTMLFormElement>(null);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!form.current) return;

    console.log(contactForm);
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log(error);

          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <form
      ref={form}
      action=""
      className="flex flex-col gap-6"
      onSubmit={handleSubmit}
    >
      <FormInput
        type="text"
        id="name"
        value={contactForm.name}
        label="Name"
        onChange={(e) =>
          setContactForm({ ...contactForm, name: e.target.value })
        }
      />
      <FormInput
        type="email"
        id="email"
        value={contactForm.email}
        label="email"
        onChange={(e) =>
          setContactForm({ ...contactForm, email: e.target.value })
        }
      />
      <FormInput
        type="textarea"
        id="message"
        value={contactForm.message}
        label="Message"
        onChange={(e) =>
          setContactForm({
            ...contactForm,
            message: e.target.value,
          })
        }
      />
      <button className=" text-white font-title text-2xl bg-gradient-to-br from-pink-500 to-purple-500 h-12 px-8 rounded-xl font-bold uppercase hover:scale-110 transition-all duration-300 cursor-pointer">
        Say Hi!
      </button>
    </form>
  );
};

export default ContactForm;
