import React from 'react';
import { ArrowLeft, Zap, Battery, Gauge, Leaf } from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';

const FusionCoreReactor = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-slate-950 text-white pt-20">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <button 
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-sky-400 hover:text-sky-300 mb-8 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </button>

          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Zap className="w-10 h-10 text-white" />
            </div>
            <span className="px-4 py-2 bg-orange-900/30 text-orange-400 rounded-full text-sm border border-orange-400/30 mb-4 inline-block">
              Energy Systems
            </span>
            <h1 className="text-4xl font-bold mb-4">FusionCore Reactor</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Next-generation compact fusion reactor with unprecedented energy efficiency.
            </p>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700 text-center">
                <Battery className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">Power Output</h3>
                <p className="text-slate-300 text-sm">500MW sustained energy generation</p>
              </div>
              <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700 text-center">
                <Gauge className="w-8 h-8 text-green-400 mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">Efficiency</h3>
                <p className="text-slate-300 text-sm">95% energy conversion rate</p>
              </div>
              <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700 text-center">
                <Leaf className="w-8 h-8 text-emerald-400 mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">Clean Energy</h3>
                <p className="text-slate-300 text-sm">Zero carbon emissions</p>
              </div>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">Project Overview</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                The FusionCore Reactor represents a revolutionary breakthrough in clean energy technology. This 
                compact fusion reactor design achieves sustained fusion reactions in a significantly smaller footprint 
                than traditional approaches, making clean fusion energy commercially viable for the first time in history.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">Key Achievements</h2>
              <ul className="text-slate-300 space-y-2 ml-6">
                <li>• 500MW sustained energy output achieved</li>
                <li>• 95% energy conversion efficiency</li>
                <li>• Zero carbon emissions during operation</li>
                <li>• 80% smaller reactor footprint than conventional designs</li>
                <li>• 99.9% operational uptime in testing phase</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">Technical Innovation</h2>
              <p className="text-slate-300 leading-relaxed">
                Our breakthrough design utilizes advanced magnetic confinement systems combined with revolutionary 
                superconducting materials to maintain plasma stability at unprecedented scales. The reactor's innovative 
                architecture enables continuous operation while maintaining the extreme conditions necessary for 
                sustained fusion reactions.
              </p>
            </section>

            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600">
              <h3 className="text-2xl font-bold mb-4 text-white">Project Details Coming Soon</h3>
              <p className="text-slate-300 mb-6">
                We're developing comprehensive technical documentation including reactor specifications, safety protocols, 
                performance data, and commercialization roadmap. This will be essential for energy companies and 
                government agencies interested in clean fusion technology.
              </p>
              <div className="mt-6">
                <a 
                  href="#contact"
                  className="inline-block bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                >
                  Request Project Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FusionCoreReactor;