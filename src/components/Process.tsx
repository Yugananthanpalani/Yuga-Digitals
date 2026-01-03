import { Search, Lightbulb, Palette, Rocket, TrendingUp } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      icon: Search,
      title: 'Discover',
      description: 'We analyze your business, audience, and goals to understand your unique needs.',
    },
    {
      icon: Lightbulb,
      title: 'Plan',
      description: 'Strategic planning and roadmap creation tailored to your objectives.',
    },
    {
      icon: Palette,
      title: 'Design',
      description: 'Creative execution with stunning visuals and compelling brand messaging.',
    },
    {
      icon: Rocket,
      title: 'Execute',
      description: 'Launch campaigns across channels with precision and attention to detail.',
    },
    {
      icon: TrendingUp,
      title: 'Grow',
      description: 'Continuous optimization and scaling for sustained growth and success.',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-950/10 via-transparent to-purple-950/10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-purple-950/50 border border-purple-500/30 backdrop-blur-sm mb-4">
            <span className="text-purple-400 text-sm font-semibold">HOW WE WORK</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our <span className="text-purple-400">Process</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A proven methodology that transforms ideas into impactful digital experiences
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-violet-600 to-purple-600 transform -translate-y-1/2"></div>

          <div className="grid md:grid-cols-5 gap-8 md:gap-4">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center group">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-600 to-violet-600 flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(147,51,234,0.6)] relative z-10">
                      <step.icon className="w-10 h-10 text-white" />
                    </div>

                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-600 to-violet-600 filter blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>

                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-black border-2 border-purple-500 flex items-center justify-center text-purple-400 font-bold text-sm z-20">
                      {index + 1}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {index < steps.length - 1 && (
                  <div className="md:hidden h-12 w-1 bg-gradient-to-b from-purple-600 to-violet-600 mx-auto my-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-gray-900 to-black border border-purple-500/30 rounded-full">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-violet-600 border-2 border-black"></div>
              ))}
            </div>
            <div className="text-left">
              <p className="text-white font-semibold">Trusted by 25+ Clients</p>
              <p className="text-gray-400 text-sm">Join brands that chose excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
