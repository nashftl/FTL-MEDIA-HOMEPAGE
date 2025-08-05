import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const recipientEmail = "info@ftlmediaagency.co.za"; // Your email address
  const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(`Name: ${name}
Email: ${email}

${message}`)}`;

  return (
    <section id="contact" className="bg-black text-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
        <p className="text-lg text-gray-300 mb-12">
          Ready to bring your ideas to life? Get in touch and let's discuss your
          project.
        </p>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Contact Details */}
          <div className="lg:w-1/3 space-y-8 text-left">
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold mb-2 text-white">Email</h3>
              <p className="text-gray-400">Drop me a line anytime</p>
              <a
                href="mailto:info@ftlmediaagency.co.za"
                className="text-white hover:underline"
              >
                info@ftlmediaagency.co.za
              </a>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold mb-2 text-white">Phone</h3>
              <p className="text-gray-400">Call for urgent projects</p>
              <a href="tel:+27714979978" className="text-white hover:underline">
                + (27) 714 979 9978
              </a>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold mb-2 text-white">
                Location
              </h3>
              <p className="text-gray-400">Based in</p>
              <p className="text-white">Johannesburg, South Africa</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold mb-2 text-white">
                Response Time
              </h3>
              <p className="text-gray-400">Typical response</p>
              <p className="text-white">Within 24 hours</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3 bg-gray-900 p-8 rounded-xl border border-gray-800 text-left">
            <h3 className="text-2xl font-semibold mb-6 text-white">
              Send Message
            </h3>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-400 text-sm font-bold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={handleNameChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-800 border-gray-700 text-white"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-400 text-sm font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-800 border-gray-700 text-white"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-gray-400 text-sm font-bold mb-2"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={subject}
                  onChange={handleSubjectChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-800 border-gray-700 text-white"
                  required
                >
                  <option value="">Select a subject...</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Project Proposal (Music)">
                    Project Proposal (Music)
                  </option>
                  <option value="Project Proposal (Utility)">
                    Project Proposal (Utility)
                  </option>
                  <option value="Project Proposal (Web Design)">
                    Project Proposal (Web Design)
                  </option>
                  <option value="Project Proposal (Small Business)">
                    Project Proposal (Small Business)
                  </option>
                  <option value="Partnership Opportunity">
                    Partnership Opportunity
                  </option>
                  <option value="Support Request">Support Request</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-400 text-sm font-bold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={message}
                  onChange={handleMessageChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-800 border-gray-700 text-white"
                  required
                ></textarea>
              </div>
              <a
                href={mailtoLink}
                className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition duration-300 text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Send Message
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
