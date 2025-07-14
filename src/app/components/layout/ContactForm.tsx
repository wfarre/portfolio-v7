import React, { useRef, useState } from "react";
import FormInput from "../ui/FormInput";
import emailjs from "@emailjs/browser";
import { checkIfFormIsValid } from "@/app/utils/validation";
import Button from "../ui/Button";

const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_KEY as string;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;

const ContactForm = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [contactFormError, setContactFormError] = useState({
    name: "",
    email: "",
    message: "",
  });

  console.log(PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID);

  const form = useRef<HTMLFormElement>(null);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!form.current) return;

    const { formIsValid, formErrors } = checkIfFormIsValid(contactForm);
    setContactFormError(formErrors);

    if (!formIsValid) return;

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
      className="flex flex-col md:gap-6 gap-3"
      onSubmit={handleSubmit}
    >
      <FormInput
        type="text"
        id="name"
        value={contactForm.name}
        label="Name"
        error={contactFormError.name}
        onChange={(e) =>
          setContactForm({ ...contactForm, name: e.target.value.trimStart() })
        }
      />
      <FormInput
        type="email"
        id="email"
        value={contactForm.email}
        label="email"
        error={contactFormError.email}
        onChange={(e) =>
          setContactForm({ ...contactForm, email: e.target.value.trimStart() })
        }
      />
      <FormInput
        type="textarea"
        id="message"
        value={contactForm.message}
        label="Message"
        error={contactFormError.message}
        onChange={(e) =>
          setContactForm({
            ...contactForm,
            message: e.target.value.trimStart(),
          })
        }
      />
      <div className="ml-auto">
        <Button text="Send" styleType="primary"></Button>
      </div>
    </form>
  );
};

export default ContactForm;
