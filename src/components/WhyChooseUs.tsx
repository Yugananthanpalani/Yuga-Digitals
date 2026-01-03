import { Zap, Target, Cog, Eye } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Zap,
      title: 'Creative Strategy',
      description: 'We blend creativity with analytics to craft strategies that deliver measurable impact and lasting results.',
    },
    {
      icon: Target,
      title: 'Result-Oriented Growth',
      description: 'Every campaign is optimized for performance, ensuring your investment translates into tangible business growth.',
    },
    {
      icon: Cog,
      title: 'Latest Digital Tools',
      description: 'Leveraging cutting-edge technology and industry-leading tools to keep you ahead of the competition.',
    },
    {
      icon: Eye,
      title: 'Transparent Workflow',
      description: 'Clear communication, regular updates, and complete visibility into every stage of your project.',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-950 to-black relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-violet-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-purple-950/50 border border-purple-500/30 backdrop-blur-sm mb-4">
            <span className="text-purple-400 text-sm font-semibold">WHY YUGA DIGITALS</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Why <span className="text-purple-400">Choose Us</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We combine creativity, technology, and transparency to deliver exceptional results
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="relative z-10 flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-violet-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <reason.icon className="w-8 h-8 text-white" />
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-purple-600/10 rounded-full filter blur-2xl group-hover:bg-purple-600/20 transition-all"></div>
            </div>
          ))}
        </div>

        <div className="relative bg-gradient-to-br from-purple-950/30 to-black/50 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-12 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-transparent to-violet-600/10"></div>

          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '1', label: 'Years Experience', suffix: '' },
              { value: '20', label: 'Projects Delivered', suffix: '+' },
              { value: '25', label: 'Happy Clients', suffix: '+' },
              { value: '98%', label: 'Success Rate', suffix: '' },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-5xl md:text-6xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">
                  <span className="bg-gradient-to-r from-purple-400 to-violet-400 text-transparent bg-clip-text">
                    {stat.value}{stat.suffix}
                  </span>
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
