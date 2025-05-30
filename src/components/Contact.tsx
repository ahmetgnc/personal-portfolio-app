"use client";
import Heading from "./sub/Heading";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;
    const currentDate = new Date().getTime();
    formRef.current.setAttribute("time", currentDate.toString());
    emailjs
      .sendForm(
        "service_4piwtr3",
        "template_v3hbwia",
        formRef.current,
        "EIwTT0gqQEpPpAq3a"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          formRef.current?.reset();
        },
        (error) => {
          alert("Failed to send message. " + error.text);
        }
      );
  };
  return (
    <div className="py-20">
      <Heading title={"Get in touch"} />
      <div className="grid place-items- justify-center">
        <div className="w-full my-auto flex-row lg:flex items-center justify-between lg:justify-center gap-y-20">
          <motion.div
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="flex items-center justify-center rounded-md py-5 lg:p-0"
          >
            <Image
              src={"/contact.gif"}
              alt="Contact Image"
              width={400}
              height={400}
              className="w-[300px] md:w-[400px] rounded-md opacity-80"
            />
          </motion.div>
          <motion.form
            ref={formRef}
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="w-[300px] md:w-[500px] lg:w-[600px] sm:w-full flex flex-col gap-3"
            onSubmit={sendEmail}
          >
            <div className="w-full flex lg:flex-col gap-x-3 lg:gap-y-3">
              <input
                type="text"
                name="name"
                className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none"
                placeholder="Your Name"
              />
              <input
                type="email"
                name="email"
                className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none"
                placeholder="Your Email"
              />
            </div>
            <input
              type="text"
              name="title"
              className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none"
              placeholder="Subject"
            />
            <textarea
              name="message"
              className="max-h-[250px] min-h-[150px] border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none"
              placeholder="Write Me..."
            ></textarea>
            <input
              type="submit"
              className="w-full border border-yellow-500 rounded-md bg-yellow-600 px-4 py-2 text-sm font-light tracking-wider text-white outline-none hover:bg-yellow-500 transition-colors cursor-pointer"
              value="Send Message"
            />
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
