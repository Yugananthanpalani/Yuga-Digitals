import { TrendingUp, Share2, Palette, Image, Search, FileText, Code } from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceId: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  const services = [
    {
      id: 'digital-marketing',
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to boost your online presence and drive conversions.',
    },
    {
      id: 'social-media',
      icon: Share2,
      title: 'Social Media Management',
      description: 'Engaging content and strategic posting to build your community and amplify your brand voice.',
    },
    {
      id: 'branding-logo',
      icon: Palette,
      title: 'Branding & Logo Design',
      description: 'Unique brand identities that resonate with your audience and set you apart from competitors.',
    },
    {
      id: 'banner-creative',
      icon: Image,
      title: 'Banner & Creative Design',
      description: 'Eye-catching banners, posters, and creative visuals that capture attention and drive engagement.',
    },
    {
      id: 'seo-performance',
      icon: Search,
      title: 'SEO & Performance Marketing',
      description: 'Data-driven SEO and performance marketing to maximize visibility and ROI.',
    },
    {
      id: 'content-creation',
      icon: FileText,
      title: 'Content Creation',
      description: 'Compelling content that tells your story and connects with your audience authentically.',
    },
    {
      id: 'website-design',
      icon: Code,
      title: 'Website Design & Development',
      description: 'Modern, responsive websites that deliver exceptional user experiences and drive results.',
    },
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/10 via-transparent to-purple-950/10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-purple-950/50 border border-purple-500/30 backdrop-blur-sm mb-4">
            <span className="text-purple-400 text-sm font-semibold">WHAT WE DO</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our <span className="text-purple-400">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            End-to-end digital solutions designed to elevate your brand and accelerate growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => onSelectService(service.id)}
              className="group relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_0_50px_rgba(147,51,234,0.4)] text-left w-full"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-violet-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <div className="absolute -inset-[100%] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 animate-spin-slow bg-gradient-conic from-purple-500 via-transparent to-transparent blur-xl"></div>
              </div>

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600/20 to-violet-600/20 border border-purple-500/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-purple-400/50 transition-all duration-300">
                  <service.icon className="w-8 h-8 text-purple-400 group-hover:text-purple-300 transition-colors" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="flex items-center gap-2 text-purple-400 font-semibold group-hover:text-purple-300 transition-colors">
                  Learn More
                  <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 rounded-full filter blur-3xl group-hover:bg-purple-600/20 transition-all duration-500"></div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
