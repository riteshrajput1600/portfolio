import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const contact_info = [
    { logo: "mail", text: "riteshsingh1600@gmail.com" },
    { logo: "logo-whatsapp", text: "+91 709 168 7597" },
    {
      logo: "location",
      text: "Patna, Bihar",
    },
  ];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs.sendForm("service_bqj1hjr", "template_daa2s81", e.target, "NdTjfpYrUxskarrND")
      .then((result) => {
        console.log("Email sent successfully");
        // Perform any success actions or display a success message to the user
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        // Perform any error handling or display an error message to the user
      });

    // Reset form fields
    setName("");
    setEmail("");
    setMessage("");
  };


  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div className="mt-16 flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto">
          <form className="flex flex-col flex-1 gap-5" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={handleNameChange}
              name="user_name" 
            />
            <input
              type="email"
              placeholder="Your Email Address"
              value={email}
              onChange={handleEmailChange}
              name="user_email"
            />
            <textarea
              placeholder="Your Message"
              rows={10}
              value={message}
              onChange={handleMessageChange}
              name="message"
            ></textarea>
            <button type="submit" className="btn-primary w-fit">
              Send Message
            </button>
          </form>
          


          <div className="flex flex-col  gap-7 ">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="md:text-base text-sm  break-words">
                  {contact.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
