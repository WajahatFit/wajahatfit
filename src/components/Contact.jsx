import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import contactSvg from "../images/undraw_sign_in_re_o58h.svg";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_u53lwup",
        "template_v227996",
        form.current,
        "AnObA2XWVRXnAYdiG"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message successfully sent!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error("Error sending message.");
        }
      );
  };
  return (
    <div id="contact" className="p-8 font-serif mt-8">
      <h1 className="text-4xl font-semibold tracking-widest text-center p-8 lg:text-6xl">
        Contact
      </h1>
      <div className="lg:flex items-center justify-around mt-12">
        <form
          className="flex flex-col space-y-2 items-start"
          ref={form}
          onSubmit={sendEmail}
        >
          <label className="text-lg lg:text-xl">Name</label>
          <input
            required
            className="outline-none border-4 border-sky-100 border-b-sky-400 hover:border-sky-500/100 p-2 w-full invalid:border-4 invalid:text-pink-600
      focus:invalid:border-t-pink-500 focus:invalid:border-sky-100 focus:invalid:ring-pink-500 lg:w-72"
            type="text"
            name="user_name"
            placeholder="Enter your name"
          />
          <label className="text-lg lg:text-xl">Email</label>
          <input
            className="outline-none border-4 border-sky-100 border-b-sky-500 hover:border-sky-500/100 p-2 w-full
      invalid:border-4 invalid:text-pink-600
      focus:invalid:border-t-pink-500 focus:invalid:border-sky-100 focus:invalid:ring-pink-500 lg:w-80"
            type="email"
            name="user_email"
            placeholder="Enter your Email"
            required
          />
          <label className="text-lg lg:text-xl">Message</label>
          <textarea
            required
            className="outline-none border-4 border-sky-100 border-b-sky-500 hover:border-sky-500/100 p-2 w-full invalid:border-4 invalid:text-pink-600
      focus:invalid:border-t-pink-500 focus:invalid:border-sky-100 focus:invalid:ring-pink-500 lg:w-96"
            name="message"
            placeholder="Enter your message"
          />
          <input
            className="focus:border-sky-600 focus:ring-2 focus:ring-sky-500 bg-sky-500 p-4 text-white lg:w-46"
            type="submit"
            value="Send"
          />
        </form>
        <img className="md:w-3/6 lg:3/6" src={contactSvg} alt="contact svg" />
      </div>
    </div>
  );
}
