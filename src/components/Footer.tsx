import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    'Digital Marketing',
    'Social Media Management',
    'Branding & Logo Design',
    'Banner Design',
    'SEO Services',
    'Content Creation',
    'Web Development',
  ];

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Process', href: '#process' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  ];

  return (
    <footer className="bg-black border-t border-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="mb-6">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-violet-400 text-transparent bg-clip-text">
                Yuga Digitals
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-violet-600 mt-2 rounded-full"></div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Creative digital marketing agency focused on growing brands through innovative strategies and result-driven campaigns.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:bg-purple-950 hover:border-purple-500 hover:text-purple-400 transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-purple-600 to-violet-600 rounded-full"></div>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-purple-600 to-violet-600 rounded-full"></div>
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-purple-600 to-violet-600 rounded-full"></div>
              Contact Info
            </h4>
            <div className="space-y-4">
              <a
                href="mailto:hello@yugadigitals.com"
                className="flex items-start gap-3 text-gray-400 hover:text-purple-400 transition-colors group"
              >
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 text-purple-500" />
                <span>yugadigitals@gmail.com</span>
              </a>
              <a
                href="tel:+919876543210"
                className="flex items-start gap-3 text-gray-400 hover:text-purple-400 transition-colors group"
              >
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 text-purple-500" />
                <span>+91 9543553550</span>
              </a>
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-purple-500" />
                <span>Tiruvannamalai, Tamil Nadu, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} <span className="text-purple-400 font-semibold">Yuga Digitals</span> – All Rights Reserved
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-600 to-transparent"></div>
    </footer>
  );
}
