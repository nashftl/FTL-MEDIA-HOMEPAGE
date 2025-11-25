import React from "react";
import { useForm, ValidationError } from '@formspree/react';
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Contact = () => {
  const { ref: contactRef, isVisible } = useScrollAnimation({ threshold: 0.1 });
  
  // Replace 'YOUR_FORM_ID' with your actual FormSpree form ID
  // Get it from https://formspree.io after signing up
  const [state, handleSubmit] = useForm("xovzrdba");

  if (state.succeeded) {
    return (
      <section id="contact" className="bg-black text-white py-20">
        <div className="container mx-auto text-center px-4">
          <div className="max-w-2xl mx-auto bg-gray-900 p-12 rounded-xl border border-gray-800">
            <div className="mb-6">
              <svg className="w-20 h-20 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-4xl font-bold mb-4">Thank You!</h2>
            <p className="text-lg text-gray-300 mb-8">
              Your message has been sent successfully. We'll get back to you within 24 hours.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-white text-black px-8 py-3 rounded-md font-semibold transition-all duration-300 hover:bg-gray-200 hover:scale-105 active:scale-95"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="bg-black text-white py-20">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
        <p className="text-lg text-gray-300 mb-12">
          Ready to bring your ideas to life? Get in touch and let's discuss your
          project.
        </p>

        <div 
          ref={contactRef}
          className={`flex flex-col lg:flex-row gap-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Contact Details */}
          <div className="lg:w-1/3 space-y-8 text-left">
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 transition-all duration-300 hover:border-gray-600 hover:shadow-xl">
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
            <form onSubmit={handleSubmit} className="space-y-4">
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
                  className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-gray-800 border-gray-700 text-white"
                  required
                />
                <ValidationError 
                  prefix="Name" 
                  field="name"
                  errors={state.errors}
                  className="text-red-500 text-sm mt-1"
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
                  className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-gray-800 border-gray-700 text-white"
                  required
                />
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-gray-400 text-sm font-bold mb-2"
                >
                  I'm interested in
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-gray-800 border-gray-700 text-white"
                  required
                >
                  <option value="">Select a service or package...</option>
                  
                  <optgroup label="Web & Logo Design Packages">
                    <option value="Essential LaunchPad Package">Essential LaunchPad (from R1,499)</option>
                    <option value="Professional Brand Builder Package">Professional Brand Builder (R6,500)</option>
                    <option value="Strategic Growth Partner Package">Strategic Growth Partner (from R8,500)</option>
                  </optgroup>
                  
                  <optgroup label="Individual Design Services">
                    <option value="Logo Design - Simple">Logo Design - Simple</option>
                    <option value="Logo Design - Full CI">Logo Design - Full CI (Brand Identity)</option>
                    <option value="1-Page Website">1-Page Website</option>
                    <option value="3-5 Page Website">3-5 Page Website</option>
                    <option value="Website Maintenance">Website Maintenance</option>
                  </optgroup>
                  
                  <optgroup label="Social Media Management">
                    <option value="Startup Launch Package">Startup Launch Package (R1,000)</option>
                    <option value="Basic Social Media Package">Basic Package (R3,000/mo)</option>
                    <option value="Advanced Social Media Package">Advanced Package (R4,500/mo)</option>
                    <option value="Premium Social Media Package">Premium Package (R6,500/mo)</option>
                  </optgroup>
                  
                  <optgroup label="Other">
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Custom Project">Custom Project</option>
                    <option value="Partnership Opportunity">Partnership Opportunity</option>
                  </optgroup>
                </select>
                <ValidationError 
                  prefix="Subject" 
                  field="subject"
                  errors={state.errors}
                  className="text-red-500 text-sm mt-1"
                />
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
                  className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-gray-800 border-gray-700 text-white"
                  required
                ></textarea>
                <ValidationError 
                  prefix="Message" 
                  field="message"
                  errors={state.errors}
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <button
                type="submit"
                disabled={state.submitting}
                className="bg-white text-black px-6 py-3 rounded-md font-semibold transition-all duration-300 hover:bg-gray-200 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {state.submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
