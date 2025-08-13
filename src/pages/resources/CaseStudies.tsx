import React from 'react';
import { ArrowLeft, ExternalLink, Award, TrendingUp, Users, Calendar, Clock, Target } from 'lucide-react';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'QuantumNet Protocol',
      category: 'Quantum Computing',
      description: 'Revolutionary quantum communication protocol achieving 99.9% fidelity across global networks.',
      fullDescription: 'Developed a groundbreaking quantum communication protocol that enables secure, instantaneous data transmission across global networks with unprecedented fidelity rates. This breakthrough addresses the fundamental challenges of quantum decoherence and signal degradation over long distances.',
      impact: '10x faster quantum communication',
      status: 'Deployed Globally',
      duration: '18 months',
      team: '12 specialists',
      client: 'Global Tech Consortium',
      image: 'https://images.pexels.com/photos/8919549/pexels-photo-8919549.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Quantum', 'Networking', 'Security', 'Global Infrastructure'],
      results: [
        '99.9% communication fidelity achieved',
        '10x improvement in transmission speed',
        'Zero security breaches in 12 months',
        'Deployed across 50+ global nodes'
      ],
      technologies: ['Quantum Entanglement', 'Error Correction', 'Photonic Networks', 'Cryptographic Protocols']
    },
    {
      id: 2,
      title: 'BioSynth Engine',
      category: 'Biotechnology',
      description: 'AI-powered synthetic biology platform for rapid drug discovery and development.',
      fullDescription: 'Created an advanced AI-driven platform that accelerates drug discovery through synthetic biology, reducing development timelines from years to months while maintaining safety and efficacy standards.',
      impact: '75% reduction in discovery time',
      status: 'Clinical Trials',
      duration: '24 months',
      team: '18 specialists',
      client: 'Pharmaceutical Alliance',
      image: 'https://images.pexels.com/photos/5726794/pexels-photo-5726794.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['AI', 'Biotechnology', 'Drug Discovery', 'Machine Learning'],
      results: [
        '75% faster drug discovery process',
        '90% accuracy in compound prediction',
        '15 compounds in clinical trials',
        '$500M in development cost savings'
      ],
      technologies: ['Machine Learning', 'Protein Folding', 'Molecular Simulation', 'Biomarker Analysis']
    },
    {
      id: 3,
      title: 'FusionCore Reactor',
      category: 'Energy Systems',
      description: 'Next-generation compact fusion reactor with unprecedented energy efficiency.',
      fullDescription: 'Engineered a revolutionary compact fusion reactor design that achieves sustained fusion reactions in a significantly smaller footprint, making clean fusion energy commercially viable for the first time.',
      impact: '500MW clean energy output',
      status: 'Prototype Testing',
      duration: '36 months',
      team: '25 specialists',
      client: 'Energy Innovation Consortium',
      image: 'https://images.pexels.com/photos/1476321/pexels-photo-1476321.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Fusion', 'Clean Energy', 'Innovation', 'Sustainability'],
      results: [
        '500MW sustained energy output',
        '95% energy conversion efficiency',
        'Zero carbon emissions',
        '80% smaller reactor footprint'
      ],
      technologies: ['Magnetic Confinement', 'Plasma Physics', 'Superconducting Magnets', 'Advanced Materials']
    },
    {
      id: 4,
      title: 'NanoHeal Materials',
      category: 'Materials Science',
      description: 'Self-healing nanomaterials for aerospace and medical applications.',
      fullDescription: 'Developed breakthrough self-healing nanomaterials that can autonomously repair damage, extending lifespan and reducing maintenance requirements across critical applications.',
      impact: '90% maintenance reduction',
      status: 'Production Ready',
      duration: '20 months',
      team: '14 specialists',
      client: 'Aerospace Defense Corp',
      image: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Nanotechnology', 'Materials', 'Aerospace', 'Self-Healing'],
      results: [
        '90% reduction in maintenance needs',
        '300% increase in material lifespan',
        'Certified for aerospace applications',
        'Patent portfolio of 25+ innovations'
      ],
      technologies: ['Nanoengineering', 'Smart Polymers', 'Molecular Assembly', 'Surface Chemistry']
    },
    {
      id: 5,
      title: 'CarbonCapture Matrix',
      category: 'Climate Solutions',
      description: 'Advanced atmospheric carbon capture and conversion system.',
      fullDescription: 'Engineered a revolutionary atmospheric carbon capture system that not only removes CO2 from the air but converts it into valuable industrial materials, creating a profitable carbon-negative process.',
      impact: '1M tons CO2 captured annually',
      status: 'Pilot Deployment',
      duration: '30 months',
      team: '20 specialists',
      client: 'Climate Action Alliance',
      image: 'https://images.pexels.com/photos/9324336/pexels-photo-9324336.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Climate', 'Carbon Capture', 'Sustainability', 'Environmental'],
      results: [
        '1M tons CO2 captured per year',
        '95% conversion efficiency',
        'Revenue-positive operations',
        'Scalable to global deployment'
      ],
      technologies: ['Direct Air Capture', 'Catalytic Conversion', 'Process Optimization', 'Industrial Integration']
    },
    {
      id: 6,
      title: 'NeuroLink Interface',
      category: 'Neurotechnology',
      description: 'Non-invasive brain-computer interface for medical rehabilitation.',
      fullDescription: 'Created a breakthrough non-invasive brain-computer interface that enables direct neural control of external devices, revolutionizing rehabilitation for patients with mobility impairments.',
      impact: '85% mobility restoration',
      status: 'FDA Review',
      duration: '28 months',
      team: '16 specialists',
      client: 'Medical Research Institute',
      image: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Neurotechnology', 'Medical', 'Rehabilitation', 'Brain-Computer Interface'],
      results: [
        '85% mobility function restoration',
        '99.7% signal accuracy',
        'Non-invasive implementation',
        '500+ successful patient trials'
      ],
      technologies: ['Neural Signal Processing', 'Machine Learning', 'Biocompatible Materials', 'Real-time Computing']
    },
    {
      id: 7,
      title: 'HyperSpeed Logistics',
      category: 'Transportation',
      description: 'Autonomous hyperloop transportation system for cargo delivery.',
      fullDescription: 'Developed a fully autonomous hyperloop system optimized for high-speed cargo transport, reducing delivery times and transportation costs while maintaining zero emissions.',
      impact: '10x faster cargo delivery',
      status: 'Commercial Testing',
      duration: '42 months',
      team: '30 specialists',
      client: 'Global Logistics Network',
      image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Transportation', 'Automation', 'Logistics', 'Hyperloop'],
      results: [
        '10x faster delivery speeds',
        '70% cost reduction',
        'Zero emissions transport',
        '99.9% delivery accuracy'
      ],
      technologies: ['Magnetic Levitation', 'Vacuum Systems', 'Autonomous Control', 'Route Optimization']
    },
    {
      id: 8,
      title: 'AquaPure System',
      category: 'Water Technology',
      description: 'Advanced water purification using quantum filtration technology.',
      fullDescription: 'Engineered a quantum-enhanced water purification system that removes all contaminants while preserving beneficial minerals, providing clean water access in any environment.',
      impact: '99.99% purification efficiency',
      status: 'Global Deployment',
      duration: '22 months',
      team: '12 specialists',
      client: 'Water Access Foundation',
      image: 'https://images.pexels.com/photos/1292241/pexels-photo-1292241.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Water Technology', 'Quantum Filtration', 'Environmental', 'Global Health'],
      results: [
        '99.99% contaminant removal',
        '50M people served',
        '90% energy efficiency',
        'Deployed in 30+ countries'
      ],
      technologies: ['Quantum Filtration', 'Membrane Technology', 'IoT Monitoring', 'Solar Integration']
    }
  ];

  const stats = [
    { icon: Award, value: '10+', label: 'Patents Pending' },
    { icon: TrendingUp, value: '$2.5B', label: 'Market Impact' },
    { icon: Users, value: '50M+', label: 'Lives Improved' },
    { icon: Target, value: '98%', label: 'Success Rate' }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-slate-950 text-white pt-20">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <button 
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-sky-400 hover:text-sky-300 mb-8 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>

          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">
              Case <span className="text-transparent bg-gradient-to-r from-sky-400 to-purple-500 bg-clip-text">Studies</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Explore our breakthrough innovations and their real-world impact across industries
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
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

          {/* Case Studies Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="group bg-slate-800/30 backdrop-blur-sm rounded-3xl overflow-hidden border border-slate-700 hover:border-sky-400/50 transition-all duration-500 hover:scale-105"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-slate-900/80 backdrop-blur-sm rounded-full text-sm text-sky-400 border border-sky-400/30">
                      {study.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 backdrop-blur-sm rounded-full text-xs border ${
                      study.status === 'Deployed Globally' || study.status === 'Production Ready' || study.status === 'Global Deployment'
                        ? 'bg-green-900/80 text-green-400 border-green-400/30'
                        : study.status === 'Clinical Trials' || study.status === 'FDA Review'
                        ? 'bg-yellow-900/80 text-yellow-400 border-yellow-400/30'
                        : 'bg-blue-900/80 text-blue-400 border-blue-400/30'
                    }`}>
                      {study.status}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white">{study.title}</h3>
                  <p className="text-slate-300 mb-4 text-sm leading-relaxed">{study.description}</p>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Clock className="w-3 h-3 text-slate-400" />
                        <span className="text-xs text-slate-400">Duration</span>
                      </div>
                      <div className="text-sm text-white font-semibold">{study.duration}</div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Users className="w-3 h-3 text-slate-400" />
                        <span className="text-xs text-slate-400">Team</span>
                      </div>
                      <div className="text-sm text-white font-semibold">{study.team}</div>
                    </div>
                  </div>

                  {/* Impact */}
                  <div className="mb-4">
                    <div className="text-xs text-slate-400 mb-1">Key Impact</div>
                    <div className="text-sky-400 font-semibold text-sm">{study.impact}</div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {study.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                    {study.tags.length > 3 && (
                      <span className="px-2 py-1 bg-slate-700/50 text-slate-400 text-xs rounded-full">
                        +{study.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Action Button */}
                  <button className="group/btn w-full bg-gradient-to-r from-sky-500/20 to-purple-600/20 border border-sky-400/30 text-sky-400 px-4 py-2 rounded-xl font-semibold text-sm transition-all duration-300 hover:from-sky-500 hover:to-purple-600 hover:text-white hover:border-transparent flex items-center justify-center gap-2">
                    View Details
                    <ExternalLink className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* CMS Integration Note */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600">
              <h3 className="text-2xl font-bold mb-4 text-white">Content Management Ready</h3>
              <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                This case studies section is designed to integrate seamlessly with your future CMS system. 
                Each case study can be dynamically loaded with detailed content, images, and metrics.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400">
                <span>• Dynamic Content Loading</span>
                <span>• SEO Optimized</span>
                <span>• Media Management</span>
                <span>• Analytics Integration</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CaseStudies;