import { Cpu, Dna, Zap, Globe, Shield, Microscope } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Cpu,
      title: 'Advanced Computing',
      description: 'From edge devices to cloud infrastructure, we build advanced systems that deliver reliable performance today and scale seamlessly for tomorrow.',
      features: ['Full-stack infrastructure', 'Neural Networks', 'Cloud Computing', 'Edge Computing'],
      color: 'from-sky-400 to-cyan-500'
    },
    {
      icon: Dna,
      title: 'Robotics',
      description: 'From design to development, we build intelligent robotic systems that sense, move, and adapt.',
      features: ['Precision Engineering', 'Collaborative Robotics', 'Advanced Sensing', 'Artificial Intelligence'],
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: Zap,
      title: 'Embedded Systems',
      description: 'In-house PCB design and manufacturing allows us to build extremely custom products quickly and efficiently.',
      features: ['Circuit/PCB design', 'Microcontroller Programming', 'Rapid Prototyping', 'Product Integration'],
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Globe,
      title: 'Manufacturing',
      description: '.',
      features: ['3D P', 'Ecosystem Restoration', 'Adaptation Tech', 'Sustainability'],
      color: 'from-blue-400 to-teal-500'
    },
    {
      icon: Shield,
      title: 'Security & Defense',
      description: 'Cybersecurity innovations, cryptography, and defense technologies',
      features: ['Quantum Encryption', 'Threat Detection', 'Autonomous Defense', 'Secure Communications'],
      color: 'from-purple-400 to-indigo-500'
    },
    {
      icon: Microscope,
      title: 'Materials Science',
      description: 'Nanomaterials, metamaterials, and revolutionary material properties',
      features: ['Nanoengineering', 'Smart Materials', 'Metamaterial Design', 'Surface Engineering'],
      color: 'from-pink-400 to-rose-500'
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            We do it<span className="text-transparent bg-gradient-to-r from-sky-400 to-purple-500 bg-clip-text"> all in-house</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Our team's expertise spans across multiple disciplines and skillsets, allowing us to iterate and improve on your ideas quickly and efficiently.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-slate-800/30 backdrop-blur-sm rounded-3xl p-8 border border-slate-700 hover:border-opacity-50 transition-all duration-500 hover:scale-105 hover:bg-slate-800/50"
              >
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-slate-300 mb-6 leading-relaxed">{service.description}</p>

                {/* Features */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-sky-400 mb-3">Core Expertise:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="text-sm text-slate-400 flex items-center">
                        <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-2 flex-shrink-0`}></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-slate-700/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600">
            <h3 className="text-2xl font-bold mb-4 text-white">Ready to Push the Boundaries?</h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Whether you're tackling quantum computing challenges or developing the next breakthrough in biotechnology, our team has the expertise to turn your vision into reality.
            </p>
            <a 
              href="#contact"
              className="inline-block bg-gradient-to-r from-sky-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25"
            >
              Discuss Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;