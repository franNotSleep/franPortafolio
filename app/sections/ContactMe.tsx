"use client"

import { useEffect, useState } from "react";
import { github2, linkedin, phone } from "../../public/assets";
import { send } from "@emailjs/browser";
import Image from "next/image"

const defaultValues = {
  email: "",
  message: "",
  name: "",
};
const ContactMe = () => {
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
    <section id="contact" className="mt-32">
      <p className="heading text-center mb-16">Contact Me</p>
      <div className="bg-primary flex max-sm:flex-col-reverse md:divide-x-2 p-4">
        <div className="p-2 mr-2">
          <div className="flex gap-2 items-center">
            <Image
              className="max-sm:h-20 max-sm:w-20 h-36 w-36"
              src={github2}
              alt="github"
            />
            <a className="link" href="https://github.com/frannotsleep">
              https://github.com/frannotsleep
            </a>
          </div>
          <div className="flex gap-2 items-center">
            <Image
              className="max-sm:h-20 max-sm:w-20 h-36 w-36"
              src={linkedin}
              alt="linkedin"
            />
            <a className="link" href="https://www.linkedin.com/in/frannotsleep">
              https://www.linkedin.com/in/frannotsleep
            </a>
          </div>
          <div className="flex gap-2 items-center">
            <Image
              className="max-sm:h-20 max-sm:w-20 h-36 w-36"
              src={phone}
              alt="github"
            />
            <a className="link" href="#">
              +1 (829)-669-4314
            </a>
          </div>
        </div>

        <div className="p-4 flex grow flex-col gap-2 justify-between">
          <div className="flex flex-col max-w-3xl gap-2">
            <label className="text-white font-palanquin text-md font-bold">
              Your Name
            </label>
            <input
              name="name"
              value={values.name}
              onChange={handleInputChange}
              className="rounded-lg placeholder:text-gray-400  transition ease-in-out duration-200 hover:bg-sky-100"
              placeholder="Susanito de la lola"
            />
          </div>
          <div className="flex flex-col max-w-3xl gap-2">
            <label className="text-white font-palanquin text-md font-bold">
              Your Email
            </label>
            <input
              name="email"
              type="email"
              value={values.email}
              onChange={handleInputChange}
              className="rounded-lg  placeholder:text-gray-400 w-full  transition ease-in-out duration-200 hover:bg-sky-100"
              placeholder="Susanito@domain.com"
            />
          </div>
          <div className="flex flex-col max-w-3xl gap-2">
            <label className="text-white font-palanquin text-md font-bold">
              Your Message
            </label>
            <textarea
              name="message"
              value={values.message}
              onChange={handleInputChange}
              className="rounded-lg h-36 placeholder:text-gray-400"
              placeholder="Susanito says that he likes your portafolio."
            />
          </div>
          <button
            disabled={sending}
            onClick={handleSend}
            className={`button w-28 rounded-md ${
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
      {showSuccessToast && (
        <div className="toast toast-top toast-start">
          <div className="alert alert-success">
            <span>Message sent successfully.</span>
          </div>
        </div>
      )}
      {showFailToast && (
        <div className="toast toast-top toast-start">
          <div className="alert alert-error">
            <span>Something went wrong.</span>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactMe;
