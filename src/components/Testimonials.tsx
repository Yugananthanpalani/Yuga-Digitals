import { Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'CEO, TechVista Solutions',
      content: 'Yuga Digitals transformed our brand identity completely. Their creative approach and attention to detail exceeded our expectations. Our online presence has grown exponentially.',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      role: 'Marketing Director, Fashion Hub',
      content: 'The social media campaigns created by Yuga Digitals brought us incredible engagement. They truly understand how to connect with audiences and drive results.',
      rating: 5,
    },
    {
      name: 'Amit Patel',
      role: 'Founder, EcoLife Products',
      content: 'From branding to website development, the team delivered excellence at every step. Their transparent workflow and regular updates made the entire process smooth.',
      rating: 5,
    },
    {
      name: 'Sneha Reddy',
      role: 'Owner, Cafe Delight',
      content: 'Outstanding service! The creative banners and content strategy helped us reach our target audience effectively. Highly recommend Yuga Digitals for any digital needs.',
      rating: 5,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-purple-950/50 border border-purple-500/30 backdrop-blur-sm mb-4">
            <span className="text-purple-400 text-sm font-semibold">TESTIMONIALS</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            What Our <span className="text-purple-400">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real feedback from businesses we've helped grow
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative min-h-[400px] flex items-center">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ${
                  index === activeIndex
                    ? 'opacity-100 translate-x-0'
                    : index < activeIndex
                    ? 'opacity-0 -translate-x-full'
                    : 'opacity-0 translate-x-full'
                }`}
              >
                <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-purple-500/30 rounded-3xl p-8 md:p-12 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-violet-600 to-purple-600"></div>

                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-600/10 rounded-full filter blur-2xl"></div>
                  <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-violet-600/10 rounded-full filter blur-2xl"></div>

                  <div className="relative z-10">
                    <Quote className="w-12 h-12 text-purple-400 mb-6" />

                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-purple-400 text-purple-400" />
                      ))}
                    </div>

                    <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-8 italic">
                      "{testimonial.content}"
                    </p>

                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 to-violet-600 flex items-center justify-center">
                        <span className="text-white font-bold text-lg">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                        <p className="text-purple-400 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'w-8 bg-purple-500'
                    : 'w-2 bg-gray-700 hover:bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { stat: '4.5/5', label: 'Average Rating' },
            { stat: '50+', label: 'Reviews' },
            { stat: '100%', label: 'Satisfaction' },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">{item.stat}</div>
              <div className="text-gray-400">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
