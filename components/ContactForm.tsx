"use client";

import { useEffect, useState } from "react";
import { send } from "@emailjs/browser";

const defaultValues = {
  email: "",
  message: "",
  name: "",
};

export default function ContactForm() {
  const [values, setValues] = useState(defaultValues);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showFailToast, setShowFailToast] = useState(false);
  const [sending, setSending] = useState(false);

  // Hide show toast after 3seconds
  useEffect(() => {
    if (showSuccessToast === true) {
      setTimeout(() => {
        setShowSuccessToast(false);
      }, 3000);
    }

    if (showFailToast === true) {
      setTimeout(() => {
        setShowFailToast(false);
      }, 3000);
    }
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSend = () => {
    setSending(true);
    const templateParams = {
      to_name: "francisco",
      from_name: values.name,
      message: values.message,
      from_email: values.email,
    };

    if (!validateEmail()) {
      console.log("Invalid email");
      return;
    }

    send(
      "service_qxoh7ac",
      "template_8wx8nog",
      templateParams,
      "sBGoQ_4ebcMkj6UBk",
    )
      .then(() => {
        setShowSuccessToast(true);
        setSending(false);
        setValues(defaultValues);
      })
      .catch(() => {
        setShowFailToast(true);
        setSending(false);
      });
  };

  const validateEmail = (): boolean => {
    return /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/.test(values.email);
  };
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="custom-form-control">
        <Label>Your Name</Label>
        <input
          name="name"
          value={values.name}
          onChange={handleInputChange}
          className="custom-input custom-placeholder"
          placeholder="Susanito de la lola"
        />
      </div>
      <div className="custom-form-control">
        <Label>Your Email</Label>
        <input
          name="email"
          type="email"
          value={values.email}
          onChange={handleInputChange}
          className="custom-input custom-placeholder"
          placeholder="Susanito@domain.com"
        />
      </div>
      <div className="custom-form-control">
        <Label>Your Message</Label>
        <textarea
          name="message"
          value={values.message}
          onChange={handleInputChange}
          className="textarea rounded-lg bg-white custom-placeholder max-w-md"
          placeholder="Susanito says that he likes your portafolio."
        />
      </div>
      <div className="custom-form-control">
        <button
          disabled={sending}
          onClick={handleSend}
          className={`rounded-lg self-start max-md:mx-auto font-poppins btn w-40 bg-base-100 mt-4 ${
            sending && "flex items-center gap-4"
          }`}
        >
          {sending && (
            <span className="loading loading-spinner  text-primary"></span>
          )}
          Send
        </button>
      </div>
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="label text-white font-poppins text-md">{children}</label>
  );
}
