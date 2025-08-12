import React from 'react';
import { Search, Beaker, Rocket, CheckCircle } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: Search,
      title: 'Discovery',
      description: 'Deep research and market analysis to identify breakthrough opportunities',
      color: 'from-sky-400 to-cyan-500'
    },
    {
      icon: Beaker,
      title: 'Innovation',
      description: 'Rapid prototyping and development with cutting-edge methods',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: Rocket,
      title: 'Acceleration',
      description: 'Advanced testing, optimization, and scaling for market readiness',
      color: 'from-orange-400 to-red-500'
    },
    {
      icon: CheckCircle,
      title: 'Launch',
      description: 'Strategic deployment and continuous improvement for maximum impact',
      color: 'from-green-400 to-emerald-500'
    }
  ];

  return (
    <section id="process" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            Our <span className="text-transparent bg-gradient-to-r from-sky-400 to-purple-500 bg-clip-text">Innovation Pipeline</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A revolutionary 4-stage process that transforms groundbreaking ideas into market-changing realities
          </p>
        </div>

        <div className="relative">
          <div className="grid lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="group text-center"
                >
                  {/* Icon Container */}
                  <div className={`w-24 h-24 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg shadow-${step.color.split('-')[1]}-500/25`}>
                    <Icon className="w-12 h-12 text-white" />
                  </div>

                  {/* Step Number */}
                  <div className="text-sm font-semibold text-slate-400 mb-2">STEP {index + 1}</div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4 text-white">{step.title}</h3>

                  {/* Description */}
                  <p className="text-slate-300 leading-relaxed">{step.description}</p>

                  {/* Card Background */}
                  <div className="mt-8 bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 group-hover:border-opacity-50 group-hover:bg-slate-800/50 transition-all duration-300">
                    <div className="h-1 bg-gradient-to-r opacity-30 rounded-full mb-6" 
                         style={{background: `linear-gradient(to right, ${step.color.includes('sky') ? '#0EA5E9' : step.color.includes('purple') ? '#8B5CF6' : step.color.includes('orange') ? '#F97316' : '#10B981'}, ${step.color.includes('cyan') ? '#06B6D4' : step.color.includes('pink') ? '#EC4899' : step.color.includes('red') ? '#EF4444' : '#059669'})`}}>
                    </div>
                    <div className="text-left h-32">
                      <h4 className="font-semibold text-white mb-2">Key Deliverables:</h4>
                      <ul className="text-sm text-slate-300 space-y-1.5">
                        {index === 0 && (
                          <>
                            <li>• Market opportunity analysis</li>
                            <li>• Technical feasibility study</li>
                            <li>• Innovation roadmap</li>
                          </>
                        )}
                        {index === 1 && (
                          <>
                            <li>• Working prototypes</li>
                            <li>• Technical specifications</li>
                            <li>• IP strategy development</li>
                          </>
                        )}
                        {index === 2 && (
                          <>
                            <li>• Performance optimization</li>
                            <li>• Scalability validation</li>
                            <li>• Go-to-market strategy</li>
                          </>
                        )}
                        {index === 3 && (
                          <>
                            <li>• Market deployment</li>
                            <li>• Performance monitoring</li>
                            <li>• Continuous improvement</li>
                          </>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;