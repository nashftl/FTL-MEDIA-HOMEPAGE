import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      rating: 5,
      quote: 'The audio platform built for our studio exceeded all expectations. The real-time collaboration features have revolutionized how we work with musical artists.',
      author: 'Sarah Chen',
      title: 'CEO & Founder at Sonic Studios',
      avatar: '/src/assets/images/avatar-sarah.png', // Placeholder
    },
    {
      id: 2,
      rating: 5,
      quote: 'Our e-commerce platform has increased sales by 300% since launch. The attention to detail and user experience is outstanding.',
      author: 'Michael Rodriguez',
      title: 'CEO at LocalCraft Co.',
      avatar: '/src/assets/images/avatar-michael.png', // Placeholder
    },
    {
      id: 3,
      rating: 5,
      quote: 'The booking system has streamlined our operations completely. Patient satisfaction is up and no-shows are down 40%.',
      author: 'Dr. Emily Watson',
      title: 'Practice Manager at MedCare Clinic',
      avatar: '/src/assets/images/avatar-emily.png', // Placeholder
    },
    {
      id: 4,
      rating: 5,
      quote: 'The nifty tools developed for our team have saved us countless hours. Clean code, perfect documentation, and ongoing support!',
      author: 'James Park',
      title: 'Startup Founder at TechFlow',
      avatar: '/src/assets/images/avatar-james.png', // Placeholder
    },
  ];

  return (
    <section id="testimonials" className="bg-black text-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Client Success Stories</h2>
        <p className="text-lg text-gray-300 mb-12">Don't just take my word for it. Here's what clients say about working together.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-900 p-6 rounded-xl border border-gray-800 text-left">
              {/* Star Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 text-sm mb-4">{testimonial.quote}</p>
              <div className="flex items-center">
                <img src={testimonial.avatar} alt={testimonial.author} className="h-10 w-10 rounded-full mr-4" />
                <div>
                  <p className="text-white font-semibold">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
