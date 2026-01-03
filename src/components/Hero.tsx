import { ArrowRight, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(147, 51, 234, 0.3) 0%, transparent 50%)`,
        }}
      />

      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-violet-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-950/50 border border-purple-500/30 backdrop-blur-sm mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span className="text-purple-300 text-sm font-medium">Digital Excellence Redefined</span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 animate-fade-in-up tracking-tight">
          We Grow Brands
          <span className="block bg-gradient-to-r from-purple-400 via-violet-400 to-purple-600 text-transparent bg-clip-text animate-gradient">
            Digitally
          </span>
        </h1>

        <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto animate-fade-in-up animation-delay-200 leading-relaxed">
          Creative marketing, powerful branding, and digital growth solutions
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-400">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full text-white font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(147,51,234,0.6)]">
            <span className="relative z-10 flex items-center gap-2">
              Get a Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-violet-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>

          <button className="px-8 py-4 border-2 border-purple-500 rounded-full text-purple-300 font-semibold text-lg hover:bg-purple-950/30 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(147,51,234,0.4)]">
            View Our Services
          </button>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-in animation-delay-600">
          {[
            { number: '20+', label: 'Projects Completed' },
            { number: '25+', label: 'Happy Clients' },
            { number: '98%', label: 'Success Rate' },
            { number: '10+', label: 'Team Members' },
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                {stat.number}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-purple-500 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-2 bg-purple-500 rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  );
}
