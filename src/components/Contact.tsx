import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'yugadigitals@gmail.com',
      link: 'mailto:yugadigitals@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 9543553550',
      link: 'tel:+919543553550',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Tiruvannamalai, Tamil Nadu, India',
      link: '#',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-950 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgxNDcsIDUxLCAyMzQsIDAuMSkiLz48L2c+PC9zdmc+')] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-purple-950/50 border border-purple-500/30 backdrop-blur-sm mb-4">
            <span className="text-purple-400 text-sm font-semibold">GET IN TOUCH</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Let's Start Your <span className="text-purple-400">Growth Journey</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to elevate your brand? Get a free consultation today
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-center gap-4 p-4 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl hover:border-purple-500/50 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600/20 to-violet-600/20 border border-purple-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <info.icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.title}</p>
                      <p className="text-white font-semibold">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <a
                href="https://wa.me/+919543553550"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl text-white font-semibold hover:scale-105 transition-transform hover:shadow-[0_0_30px_rgba(34,197,94,0.4)]"
              >
                <MessageSquare className="w-5 h-5" />
                WhatsApp Us
              </a>

              <a
                href="mailto:yugadigitals@gmail.com"
                className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-violet-600 rounded-2xl text-white font-semibold hover:scale-105 transition-transform hover:shadow-[0_0_30px_rgba(147,51,234,0.4)]"
              >
                <Mail className="w-5 h-5" />
                Send Email
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full px-4 py-3 bg-black border rounded-xl text-white placeholder-gray-500 focus:outline-none transition-all ${
                    focusedField === 'name'
                      ? 'border-purple-500 shadow-[0_0_20px_rgba(147,51,234,0.3)]'
                      : 'border-gray-700'
                  }`}
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full px-4 py-3 bg-black border rounded-xl text-white placeholder-gray-500 focus:outline-none transition-all ${
                    focusedField === 'email'
                      ? 'border-purple-500 shadow-[0_0_20px_rgba(147,51,234,0.3)]'
                      : 'border-gray-700'
                  }`}
                  required
                />
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  onFocus={() => setFocusedField('phone')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full px-4 py-3 bg-black border rounded-xl text-white placeholder-gray-500 focus:outline-none transition-all ${
                    focusedField === 'phone'
                      ? 'border-purple-500 shadow-[0_0_20px_rgba(147,51,234,0.3)]'
                      : 'border-gray-700'
                  }`}
                  required
                />
              </div>

              <div>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  onFocus={() => setFocusedField('service')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full px-4 py-3 bg-black border rounded-xl text-white focus:outline-none transition-all ${
                    focusedField === 'service'
                      ? 'border-purple-500 shadow-[0_0_20px_rgba(147,51,234,0.3)]'
                      : 'border-gray-700'
                  }`}
                  required
                >
                  <option value="">Select a Service</option>
                  <option value="digital-marketing">Digital Marketing</option>
                  <option value="social-media">Social Media Management</option>
                  <option value="branding">Branding & Logo Design</option>
                  <option value="design">Banner & Creative Design</option>
                  <option value="seo">SEO & Performance Marketing</option>
                  <option value="content">Content Creation</option>
                  <option value="web">Website Design & Development</option>
                </select>
              </div>

              <div>
                <textarea
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  rows={4}
                  className={`w-full px-4 py-3 bg-black border rounded-xl text-white placeholder-gray-500 focus:outline-none resize-none transition-all ${
                    focusedField === 'message'
                      ? 'border-purple-500 shadow-[0_0_20px_rgba(147,51,234,0.3)]'
                      : 'border-gray-700'
                  }`}
                  required
                />
              </div>

              <button
                type="submit"
                className="group w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-violet-600 rounded-xl text-white font-semibold text-lg hover:scale-[1.02] transition-all hover:shadow-[0_0_30px_rgba(147,51,234,0.6)] flex items-center justify-center gap-2"
              >
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
