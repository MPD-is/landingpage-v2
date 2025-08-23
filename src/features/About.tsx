import { Brain, Target, Lightbulb, Cog as Cogs } from 'lucide-react';

const About = () => {
  const principles = [
    {
      icon: Brain,
      title: 'Deep Research',
      description: 'We dive into the fundamentals, understanding the science behind breakthrough innovations.'
    },
    {
      icon: Target,
      title: 'Precision Focus',
      description: 'Every project is strategically aligned with market needs and future possibilities.'
    },
    {
      icon: Lightbulb,
      title: 'Creative Solutions',
      description: 'We transform complex challenges into elegant, scalable solutions.'
    },
    {
      icon: Cogs,
      title: 'Systematic Innovation',
      description: 'Our proven methodologies ensure consistent, repeatable breakthrough results.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            The Future of <span className="text-transparent bg-gradient-to-r from-sky-400 to-purple-500 bg-clip-text">R&D</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed px-4">
              We are commited to bringing your ideas to life, no matter how big or small, how complex or simple, we will work with you to make it a reality.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <div
                key={index}
                className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-slate-700 hover:border-sky-400/50 transition-all duration-300 hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-4 text-white">{principle.title}</h3>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">{principle.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 sm:mt-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-3xl p-6 sm:p-8 lg:p-12 border border-slate-600">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">Revolutionary Approach</h3>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                We've reimagined the entire innovation process from the ground up. Our proprietary methodologies combine cutting-edge research with rapid prototyping, advanced simulation, and real-world validation to accelerate breakthrough discoveries.
              </p>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                From quantum computing applications to biotechnology breakthroughs, we work at the intersection of multiple disciplines to solve humanity's most complex challenges.
              </p>
            </div>
            <div className="relative mt-8 lg:mt-0">
              <div className="w-full h-60 sm:h-80 bg-gradient-to-br from-sky-400/10 to-purple-500/10 rounded-2xl border border-slate-600 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-sky-400 to-purple-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Cogs className="w-12 h-12 text-white animate-spin-slow" />
                  </div>
                  <p className="text-slate-300 font-semibold text-sm sm:text-base">Innovation Engine</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;