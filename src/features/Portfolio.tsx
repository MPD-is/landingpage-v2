import { ExternalLink, Award, TrendingUp, Users } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'QuantumNet Protocol',
      slug: 'quantum-net-protocol',
      category: 'Quantum Computing',
      description: 'Revolutionary quantum communication protocol achieving 99.9% fidelity across global networks.',
      impact: '10x faster quantum communication',
      status: 'Deployed Globally',
      image: 'https://images.pexels.com/photos/8919549/pexels-photo-8919549.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Quantum', 'Networking', 'Security']
    },
    {
      title: 'BioSynth Engine',
      slug: 'biosynth-engine',
      category: 'Biotechnology',
      description: 'AI-powered synthetic biology platform for rapid drug discovery and development.',
      impact: '75% reduction in discovery time',
      status: 'Clinical Trials',
      image: 'https://images.pexels.com/photos/5726794/pexels-photo-5726794.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['AI', 'Biotechnology', 'Drug Discovery']
    },
    {
      title: 'FusionCore Reactor',
      slug: 'fusion-core-reactor',
      category: 'Energy Systems',
      description: 'Next-generation compact fusion reactor with unprecedented energy efficiency.',
      impact: '500MW clean energy output',
      status: 'Prototype Testing',
      image: 'https://images.pexels.com/photos/1476321/pexels-photo-1476321.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Fusion', 'Clean Energy', 'Innovation']
    },
    {
      title: 'NanoHeal Materials',
      slug: 'nanoheal-materials',
      category: 'Materials Science',
      description: 'Self-healing nanomaterials for aerospace and medical applications.',
      impact: '90% maintenance reduction',
      status: 'Production Ready',
      image: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Nanotechnology', 'Materials', 'Aerospace']
    }
  ];

  const stats = [
    { icon: Award, value: '10+', label: 'Patents Pending' },
    { icon: TrendingUp, value: '$18.5M', label: 'Market Impact' },
    { icon: Users, value: '220K+', label: 'Lives Improved' }
  ];

  return (
    <section id="portfolio" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            Breakthrough <span className="text-transparent bg-gradient-to-r from-sky-400 to-purple-500 bg-clip-text">Innovations</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Real-world applications of our revolutionary R&D, transforming industries and improving lives globally
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center bg-slate-800/30 rounded-2xl p-6 border border-slate-700">
                <Icon className="w-8 h-8 text-sky-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-slate-400">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-slate-800/30 backdrop-blur-sm rounded-3xl overflow-hidden border border-slate-700 hover:border-sky-400/50 transition-all duration-500 hover:scale-105"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-slate-900/80 backdrop-blur-sm rounded-full text-sm text-sky-400 border border-sky-400/30">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
                <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Impact & Status */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-sm text-slate-400">Impact</div>
                    <div className="text-sky-400 font-semibold">{project.impact}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-slate-400">Status</div>
                    <div className="text-green-400 font-semibold">{project.status}</div>
                  </div>
                </div>

                {/* Action Button */}
                <a 
                  href={`/projects/${project.slug}`}
                  className="group/btn w-full bg-gradient-to-r from-sky-500/20 to-purple-600/20 border border-sky-400/30 text-sky-400 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:from-sky-500 hover:to-purple-600 hover:text-white hover:border-transparent flex items-center justify-center gap-2"
                >
                  Learn More
                  <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <a 
            href="/case-studies"
            className="inline-block bg-gradient-to-r from-sky-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;