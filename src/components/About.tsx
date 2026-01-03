import { Target, Lightbulb, Rocket, Shield } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Target,
      title: 'Strategic Focus',
      description: 'Data-driven strategies tailored to your business goals and target audience.',
    },
    {
      icon: Lightbulb,
      title: 'Creative Innovation',
      description: 'Fresh, bold ideas that make your brand stand out in the digital landscape.',
    },
    {
      icon: Rocket,
      title: 'Growth Acceleration',
      description: 'Proven methods to scale your brand and maximize ROI rapidly.',
    },
    {
      icon: Shield,
      title: 'Trusted Partnership',
      description: 'Transparent communication and dedicated support every step of the way.',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgxNDcsIDUxLCAyMzQsIDAuMSkiLz48L2c+PC9zdmc+')] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-purple-950/50 border border-purple-500/30 backdrop-blur-sm mb-4">
            <span className="text-purple-400 text-sm font-semibold">WHO WE ARE</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            About <span className="text-purple-400">Yuga Digitals</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We are a creative digital marketing agency focused on growing brands through innovative strategies,
            powerful branding, and result-driven campaigns. Your growth is our mission.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(147,51,234,0.3)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-purple-950/50 border border-purple-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform group-hover:bg-purple-900/50">
                  <feature.icon className="w-7 h-7 text-purple-400" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
