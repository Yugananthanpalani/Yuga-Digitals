import { ArrowLeft, Search, TrendingUp, Zap, BarChart3 } from 'lucide-react';

export default function SEOPerformanceMarketing({ onBack }: { onBack: () => void }) {
  const features = [
    { icon: Search, title: 'Technical SEO', description: 'Optimize site structure, speed, and architecture for search engines' },
    { icon: TrendingUp, title: 'Ranking Growth', description: 'Strategic keyword targeting and content optimization for rankings' },
    { icon: BarChart3, title: 'Performance Metrics', description: 'Track rankings, traffic, and conversions with detailed analytics' },
    { icon: Zap, title: 'Link Building', description: 'Strategic authority building through quality backlink acquisition' },
  ];

  return (
    <section className="pt-32 pb-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 via-transparent to-purple-950/20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors mb-8 font-semibold"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Services
        </button>

        <div className="mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-purple-950/50 border border-purple-500/30 backdrop-blur-sm mb-4">
            <span className="text-purple-400 text-sm font-semibold">SERVICE DETAILS</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            SEO & Performance <span className="text-purple-400">Marketing</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Data-driven SEO and performance marketing strategies to maximize your online visibility, dominate search results, and achieve maximum ROI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-violet-600/20 rounded-3xl blur-xl"></div>
            <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-gray-800 rounded-3xl p-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">What's Included</h3>
                <ul className="space-y-4">
                  {['SEO Audit & Analysis', 'Keyword Research & Strategy', 'On-Page SEO Optimization', 'Technical SEO Improvements', 'Link Building Campaign', 'Monthly Reporting & Optimization'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600/20 to-violet-600/20 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-600/20 via-violet-600/20 to-purple-600/20 border border-purple-500/30 rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-white mb-6">Our SEO Strategy</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Research', desc: 'Deep keyword and competitor analysis' },
              { title: 'Optimize', desc: 'Improve rankings through proven tactics' },
              { title: 'Monitor', desc: 'Track progress and adjust strategy' },
            ].map((item, i) => (
              <div key={i} className="bg-black/50 border border-gray-800 rounded-2xl p-6 text-center">
                <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
