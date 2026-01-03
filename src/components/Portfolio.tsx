import { ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      title: 'Brand Identity Design',
      category: 'Branding',
      gradient: 'from-purple-600 to-violet-600',
    },
    {
      title: 'Social Media Campaign',
      category: 'Social Media',
      gradient: 'from-violet-600 to-purple-800',
    },
    {
      title: 'E-commerce Website',
      category: 'Web Development',
      gradient: 'from-purple-800 to-purple-600',
    },
    {
      title: 'Creative Banner Series',
      category: 'Design',
      gradient: 'from-purple-600 to-violet-800',
    },
    {
      title: 'SEO Optimization',
      category: 'Digital Marketing',
      gradient: 'from-violet-800 to-purple-600',
    },
    {
      title: 'Content Strategy',
      category: 'Content Marketing',
      gradient: 'from-purple-600 to-violet-600',
    },
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgxNDcsIDUxLCAyMzQsIDAuMSkiLz48L2c+PC9zdmc+')] opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-purple-950/50 border border-purple-500/30 backdrop-blur-sm mb-4">
            <span className="text-purple-400 text-sm font-semibold">OUR WORK</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Featured <span className="text-purple-400">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our portfolio of successful campaigns and creative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80 group-hover:opacity-90 transition-opacity`}></div>

              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    <ExternalLink className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                <div className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-3">
                  <span className="text-white text-xs font-medium">{project.category}</span>
                </div>
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              </div>

              <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-400/50 rounded-3xl transition-all duration-300"></div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
        </div>
      </div>
    </section>
  );
}
