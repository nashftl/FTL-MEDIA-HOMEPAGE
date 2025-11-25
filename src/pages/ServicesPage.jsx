import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Lightbulb, Calendar, Palette, MessageCircle, Camera, Users, TrendingUp, BarChart3, X } from 'lucide-react';

const ServicesPage = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const navigate = useNavigate();

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const handleClose = () => {
    navigate('/');
  };

  const processSteps = [
    {
      title: "Step 1: Discovery & Consultation",
      content: "We start with a 30-60 minute call or a detailed questionnaire to fully understand your vision, goals, target audience, timeline, and budget. We'll ask for inspiration websites and brand preferences to ensure we're aligned from day one."
    },
    {
      title: "Step 2: Proposal & Quote",
      content: "You'll receive a comprehensive proposal outlining the project scope (pages, features, logo deliverables), a clear timeline, a detailed cost breakdown, and our 50% upfront payment structure."
    },
    {
      title: "Step 3: Contract & Deposit",
      content: "To make it official, we'll send a straightforward service agreement for you to sign. Once the contract is signed and the 50% deposit is received, we'll schedule your project and begin work."
    },
    {
      title: "Step 4: Client Onboarding & Asset Collection",
      content: "We make it easy to get us what we need. You'll receive a checklist and a shared Google Drive or Dropbox folder to upload your content, images, brand guidelines, and any other necessary files."
    },
    {
      title: "Step 5: Logo Design",
      content: "If a logo is part of your package, we'll present 2-3 initial concepts for your review. Based on your feedback, we'll refine the chosen direction and deliver final files in all necessary formats (PNG, JPG, SVG) including color and monochrome variants."
    },
    {
      title: "Step 6: Website Design (Wireframe & Mockup)",
      content: "We design with a strategy. First, we create a wireframe or mockup of the homepage to establish the layout and user flow. We'll present this for your approval before building out the full website."
    },
    {
      title: "Step 7: Website Development",
      content: "Using modern platforms like WordPress, Wix, or Squarespace, we build a fully responsive website that looks great on all devices. This phase includes basic on-page SEO, contact form setup, and any necessary integrations."
    },
    {
      title: "Step 8: Revisions & Testing",
      content: "Your satisfaction is key. We include 1-2 rounds of revisions in our proposals to ensure everything is perfect. We rigorously test the site on all major browsers and devices before the final review with you."
    },
    {
      title: "Step 9: Launch & Final Payment",
      content: "Once you give the final approval, we go live! We'll handle all the technical steps to launch your website. The final 50% invoice is sent at this stage."
    },
    {
      title: "Step 10: Post-Launch Support",
      content: "We're here for you after launch. We offer monthly or quarterly retainer packages for backups, security, content updates, and technical troubleshooting to keep your site running smoothly."
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen pt-24 pb-20">
      {/* Close Button */}
      <button
        onClick={handleClose}
        className="fixed top-24 right-4 z-50 bg-gray-900 hover:bg-gray-800 text-white p-2 rounded-full border border-gray-700 transition-all duration-300 hover:scale-110"
        aria-label="Close Services Page"
      >
        <X className="h-6 w-6" />
      </button>

      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to elevate your brand. From creative design to strategic social media management, we have you covered.
          </p>
        </div>

        {/* Design Services Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center border-b border-gray-800 pb-4">Web & Logo Design</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Essential LaunchPad */}
            <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-gray-600 transition-all">
              <h3 className="text-2xl font-bold mb-2">Essential LaunchPad</h3>
              <p className="text-3xl font-bold text-blue-400 mb-6">from R1,499</p>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li>• <strong>Simple & Clean Logo</strong> to get you started</li>
                <li>• <strong>Professional 1-Page Website</strong> to build trust</li>
                <li>• <strong>WhatsApp & Contact Form</strong> for easy leads</li>
                <li>• Perfect for new ventures & getting online fast</li>
              </ul>
            </div>

            {/* Professional Brand Builder */}
            <div className="bg-gray-800 p-8 rounded-xl border-2 border-blue-500 transform scale-105 shadow-2xl relative">
              <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">BEST VALUE</div>
              <h3 className="text-2xl font-bold mb-2">Professional Brand Builder</h3>
              <p className="text-3xl font-bold text-blue-400 mb-2">R6,500</p>
              <p className="text-sm text-green-400 mb-6">Save R1,500+</p>
              <div className="space-y-4 text-gray-300 mb-8">
                <div>
                  <p className="font-bold text-white mb-2">Full Brand Identity (CI):</p>
                  <ul className="space-y-1 pl-4 border-l-2 border-gray-700">
                    <li>• Complete Logo Suite</li>
                    <li>• Color Palette & Font System</li>
                    <li>• Brand Style Guide PDF</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold text-white mb-2">Plus:</p>
                  <ul className="space-y-1 pl-4 border-l-2 border-gray-700">
                    <li>• Custom 3-Page Website</li>
                    <li>• Google Business Profile Setup</li>
                    <li>• 1 Month of Maintenance</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Strategic Growth Partner */}
            <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-gray-600 transition-all">
              <h3 className="text-2xl font-bold mb-2">Strategic Growth Partner</h3>
              <p className="text-3xl font-bold text-blue-400 mb-6">from R8,500</p>
              <div className="space-y-4 text-gray-300 mb-8">
                <div>
                  <p className="font-bold text-white mb-2">Strategic Brand Identity (CI):</p>
                  <ul className="space-y-1 pl-4 border-l-2 border-gray-700">
                    <li>• In-depth research & concepts</li>
                    <li>• Full Logo Suite & Brand Guide</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold text-white mb-2">Plus:</p>
                  <ul className="space-y-1 pl-4 border-l-2 border-gray-700">
                    <li>• Comprehensive 5-Page Website</li>
                    <li>• Basic SEO & Analytics Setup</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Individual Service Tiers Table */}
          <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden mb-16">
            <div className="p-6 border-b border-gray-800">
              <h3 className="text-xl font-bold">Individual Service Tiers</h3>
              <p className="text-gray-400 text-sm mt-2">Choose the level of depth and complexity that matches your budget.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-gray-800 text-gray-300">
                  <tr>
                    <th className="p-4">Service</th>
                    <th className="p-4">Essential</th>
                    <th className="p-4">Professional</th>
                    <th className="p-4">Strategic</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800 text-gray-300">
                  <tr>
                    <td className="p-4 font-medium text-white">Logo Design (Simple)</td>
                    <td className="p-4">R500</td>
                    <td className="p-4">R800 – R1,200</td>
                    <td className="p-4">R1,500 – R2,000</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-white">
                      Logo Design (Full CI)
                      <span className="block text-xs text-gray-500">Includes Brand Guide</span>
                    </td>
                    <td className="p-4">R1,800</td>
                    <td className="p-4">R3,000 – R4,000</td>
                    <td className="p-4">R5,000+</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-white">1-Page Website</td>
                    <td className="p-4">R800</td>
                    <td className="p-4">R1,500 – R2,000</td>
                    <td className="p-4">R2,200 – R2,500</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-white">3–5 Page Website</td>
                    <td className="p-4">R2,800</td>
                    <td className="p-4">R4,500 – R6,500</td>
                    <td className="p-4">R7,500+</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-white">Monthly Maintenance</td>
                    <td className="p-4">R200</td>
                    <td className="p-4">R400 – R600</td>
                    <td className="p-4">R800 – R1,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Process Accordion */}
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center">Our 10-Step Client Process</h3>
            <div className="space-y-4">
              {processSteps.map((step, index) => (
                <div key={index} className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800">
                  <button
                    className="w-full p-4 text-left flex justify-between items-center hover:bg-gray-800 transition-colors"
                    onClick={() => toggleAccordion(index)}
                  >
                    <span className="font-semibold">{step.title}</span>
                    <span className={`transform transition-transform ${activeAccordion === index ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  </button>
                  {activeAccordion === index && (
                    <div className="p-4 text-gray-300 border-t border-gray-800 bg-gray-800/50">
                      {step.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Media Services Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center border-b border-gray-800 pb-4">Social Media Management</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Startup Launch */}
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-gray-600 transition-all">
              <h3 className="text-xl font-bold mb-2">Startup Launch</h3>
              <p className="text-2xl font-bold text-blue-400 mb-4">R1,000</p>
              <p className="text-xs text-gray-500 mb-4">Once-off, First Month</p>
              <p className="text-gray-300 text-sm">Perfect for getting started! Includes complete social media page setup and configuration.</p>
            </div>

            {/* Basic Package */}
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-gray-600 transition-all">
              <h3 className="text-xl font-bold mb-2">Basic Package</h3>
              <p className="text-2xl font-bold text-blue-400 mb-4">R3,000 <span className="text-sm text-gray-500">/mo</span></p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• 12x posts (8 static, 4 reels)</li>
                <li>• 12x stories</li>
                <li>• Daily engagement (30 acc)</li>
                <li>• Community Management</li>
                <li>• Monthly Report</li>
              </ul>
            </div>

            {/* Advanced Package */}
            <div className="bg-gray-800 p-6 rounded-xl border-2 border-blue-500 transform scale-105 shadow-xl relative">
              <div className="absolute top-0 right-0 bg-blue-500 text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg rounded-tr-lg">POPULAR</div>
              <h3 className="text-xl font-bold mb-2">Advanced Package</h3>
              <p className="text-2xl font-bold text-blue-400 mb-4">R4,500 <span className="text-sm text-gray-500">/mo</span></p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• 20x posts (12 static, 8 reels)</li>
                <li>• 20x stories</li>
                <li>• Daily engagement (50 acc)</li>
                <li>• Community Management</li>
                <li>• Monthly Report</li>
              </ul>
            </div>

            {/* Premium Package */}
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-gray-600 transition-all">
              <h3 className="text-xl font-bold mb-2">Premium Package</h3>
              <p className="text-2xl font-bold text-blue-400 mb-4">R6,500 <span className="text-sm text-gray-500">/mo</span></p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• 28x posts (16 static, 12 reels)</li>
                <li>• 28 stories</li>
                <li>• Daily engagement (70 acc)</li>
                <li>• Community Management</li>
                <li>• Monthly Report</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 text-center max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">What We Do</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
              <div className="flex items-center space-x-2 text-gray-300">
                <Lightbulb className="h-5 w-5" /> <span>Content Strategy</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Calendar className="h-5 w-5" /> <span>Content Plan</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Palette className="h-5 w-5" /> <span>Custom Design</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <MessageCircle className="h-5 w-5" /> <span>Engaging Captions</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Camera className="h-5 w-5" /> <span>Stories & Reels</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Users className="h-5 w-5" /> <span>Community Mgmt</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <TrendingUp className="h-5 w-5" /> <span>Audience Growth</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <BarChart3 className="h-5 w-5" /> <span>Analytics Reports</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center mt-20">
          <h2 className="text-3xl font-bold mb-6">Ready to Elevate Your Brand?</h2>
          <p className="text-gray-300 mb-8">Let's discuss your goals and find the perfect package for you.</p>
          <Link to="/#contact" className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors">
            Get Started
          </Link>
        </div>

      </div>
    </div>
  );
};

export default ServicesPage;
