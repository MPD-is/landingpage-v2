import React from 'react';
import { ArrowLeft, Cpu, Globe, Shield, Zap } from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';

const QuantumNetProtocol = () => {
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
            <div className="w-20 h-20 bg-gradient-to-br from-sky-400 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Cpu className="w-10 h-10 text-white" />
            </div>
            <span className="px-4 py-2 bg-sky-900/30 text-sky-400 rounded-full text-sm border border-sky-400/30 mb-4 inline-block">
              Quantum Computing
            </span>
            <h1 className="text-4xl font-bold mb-4">QuantumNet Protocol</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Revolutionary quantum communication protocol achieving 99.9% fidelity across global networks.
            </p>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700 text-center">
                <Globe className="w-8 h-8 text-sky-400 mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">Global Network</h3>
                <p className="text-slate-300 text-sm">Deployed across 50+ nodes worldwide</p>
              </div>
              <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700 text-center">
                <Shield className="w-8 h-8 text-green-400 mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">Security</h3>
                <p className="text-slate-300 text-sm">Zero security breaches in 12 months</p>
              </div>
              <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700 text-center">
                <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">Performance</h3>
                <p className="text-slate-300 text-sm">10x faster than previous protocols</p>
              </div>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">Project Overview</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                The QuantumNet Protocol represents a groundbreaking advancement in quantum communication technology. 
                This revolutionary protocol enables secure, instantaneous data transmission across global networks with 
                unprecedented fidelity rates, addressing fundamental challenges of quantum decoherence and signal 
                degradation over long distances.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">Key Achievements</h2>
              <ul className="text-slate-300 space-y-2 ml-6">
                <li>• 99.9% communication fidelity achieved</li>
                <li>• 10x improvement in transmission speed</li>
                <li>• Zero security breaches in 12 months of operation</li>
                <li>• Successfully deployed across 50+ global nodes</li>
                <li>• Reduced quantum decoherence by 95%</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">Technical Innovation</h2>
              <p className="text-slate-300 leading-relaxed">
                Our breakthrough approach combines advanced quantum entanglement techniques with novel error correction 
                algorithms, creating a robust communication framework that maintains quantum coherence across vast distances. 
                The protocol's innovative architecture enables real-time quantum state verification and automatic error recovery.
              </p>
            </section>

            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600">
              <h3 className="text-2xl font-bold mb-4 text-white">Project Details Coming Soon</h3>
              <p className="text-slate-300 mb-6">
                We're developing comprehensive project documentation that will include detailed technical specifications, 
                implementation guides, performance metrics, and case study analysis. This will provide in-depth insights 
                into the development process and real-world applications.
              </p>
              <div className="mt-6">
                <a 
                  href="#contact"
                  className="inline-block bg-gradient-to-r from-sky-500 to-cyan-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
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

export default QuantumNetProtocol;