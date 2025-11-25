import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      rating: 5,
      quote: 'The interactive 3D elements completely transformed our user experience. It’s rare to find a developer who can blend technical performance with such high-end visuals.',
      author: 'Alex Morgan',
      title: 'Creative Director, Digital Agency',
    },
    {
      id: 2,
      rating: 5,
      quote: 'We needed a robust dashboard to manage complex data, and the result was intuitive and powerful. It streamlined our entire workflow from day one.',
      author: 'Sarah Jenkins',
      title: 'Operations Manager, Music Label',
    },
    {
      id: 3,
      rating: 5,
      quote: 'The e-commerce platform built for us is fast, secure, and incredibly easy to manage. Our customers love the seamless checkout experience.',
      author: 'David Chen',
      title: 'Owner, Retail Brand',
    },
    {
      id: 4,
      rating: 5,
      quote: 'Exceptional attention to detail. The media management tool helps us organize content efficiently, with a clean design that makes it a joy to use.',
      author: 'Emily Carter',
      title: 'Product Lead, Streaming Startup',
    },
  ];

  return (
    <section id="testimonials" className="bg-black text-white py-20">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-4">Client Success Stories</h2>
        <p className="text-lg text-gray-300 mb-12">Don't just take my word for it. Here's what clients say about the impact of my work.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-900 p-6 rounded-xl border border-gray-800 text-left flex flex-col justify-between hover:border-gray-600 transition-colors duration-300">
              <div>
                {/* Star Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 text-sm mb-6 italic">"{testimonial.quote}"</p>
              </div>
              <div className="flex items-center mt-auto">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-600 flex items-center justify-center mr-4 text-sm font-bold text-white">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{testimonial.author}</p>
                  <p className="text-gray-500 text-xs">{testimonial.title}</p>
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
