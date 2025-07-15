import React, { useRef, useState } from "react";
import FormInput from "../ui/FormInput";
import { checkIfFormIsValid } from "@/app/utils/validation";
import Button from "../ui/Button";

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

  const form = useRef<HTMLFormElement>(null);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (!form.current) return;

    const { formIsValid, formErrors } = checkIfFormIsValid(contactForm);
    setContactFormError(formErrors);

    if (!formIsValid) return;

    // emailjs
    //   .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
    //     publicKey: PUBLIC_KEY,
    //   })
    //   .then(
    //     () => {
    //       console.log("SUCCESS!");
    //     },
    //     (error) => {
    //       console.log(error);
    //       console.log("FAILED...", error.text);
    //     }
    //   );

    try {
      const res = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactForm),
      });

      const data = await res.json();
      if (data.success) {
        console.log("SUCCESS");
      } else {
        console.error("Email failed", data.error);
      }
    } catch (err) {
      console.error("Request error:", err);
    }
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
