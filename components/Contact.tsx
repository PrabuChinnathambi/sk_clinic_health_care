import Link from "next/link";
import { useState } from "react";
import SectionTitle from "./SectionTitle";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while sending the message.");
    }
  };

  return (
    <section
      id="contact"
      className="max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center"
    >
      <SectionTitle title="Contact Us" titleNo="05" displayLine={false} />
      <h2 className="font-titleFont text-5xl font-semibold">Get In Touch</h2>
      <section className=" w-full py-8">
        <div className="max-w-4xl mx-auto px-4 flex flex-col lg:flex-row gap-8">
          {/* Contact Info */}
          <div className="w-full lg:w-1/2 bg-[#112240] shadow-md rounded-lg p-6">
            <h3 className="text-2xl font-bold text-textGreen">Contact Us</h3>

            <h3 className="text-xl font-bold2 py-3 text-textGreen">
              Our Address
            </h3>
            <p className="text-sm md:text-base">
              Sri Krishna Complex, 636/3B3 Tank ST, Sunnambukalvai Stop,
              Athipalayam Road, Coimbatore - 641049
            </p>

            <h3 className="text-xl font-bold2 py-3 text-textGreen">
              Hours of Operation
            </h3>
            <p className="text-sm md:text-base">Morning: 9 am to 2pm</p>
            <p className="text-sm md:text-base">Evening : 5 pm to 9pm</p>
            <h3 className="text-xl font-bold2 py-3">Phone</h3>
            <p className="text-sm md:text-base">
              <a
                href="tel:+917598776007"
                className="text-textGreen hover:underline"
              >
                +91 75987-76007
              </a>
            </p>
            <div className="w-full bg-white shadow-md rounded-lg p-6 my-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Our Location
              </h2>
              <div className="relative w-full h-64 rounded-lg overflow-hidden">
                <iframe
                  src="https://maps.google.com/maps?q=11.083721,76.981748&hl=en;z=14&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-1/2 bg-[#112240] shadow-md rounded-lg p-6">
            <h3 className="text-2xl font-bold text-textGreen">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6 my-6">
              <div>
                <label htmlFor="name" className="block text-sm md:text-base">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg text-black"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm md:text-base">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg text-black"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm md:text-base">
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg text-black"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm md:text-base">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg text-black"
                ></textarea>
              </div>

              {/* <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Send Message
              </button> */}

              <button className="w-40 h-14 border border-textGreen mt-6 font-titleFont text-sm text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* <a href="mailto:noor.jsdivs@gmail.com">
        <button className="w-40 h-14 border border-textGreen mt-6 font-titleFont text-sm text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300">
          Say Hello
        </button>
      </a> */}
    </section>
  );
};

export default Contact;
