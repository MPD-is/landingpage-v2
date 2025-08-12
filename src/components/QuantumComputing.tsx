import React from 'react';
import { ArrowLeft, Cpu, Zap, Shield } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const QuantumComputing = () => {
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
            Back to Home
          </button>

          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-gradient-to-br from-sky-400 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Cpu className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Quantum Computing</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Pioneering the future of computation through quantum algorithms, quantum networking, and revolutionary quantum applications.
            </p>
          </div>

          <div className="prose prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">Our Quantum Expertise</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                At MP&D, we're at the forefront of quantum computing research and development, working on breakthrough technologies that will define the next era of computational power.
              </p>
              <div className="grid md:grid-cols-3 gap-6 my-8">
                <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700">
                  <Cpu className="w-8 h-8 text-sky-400 mb-4" />
                  <h3 className="font-semibold text-white mb-2">Quantum Algorithms</h3>
                  <p className="text-slate-300 text-sm">Advanced algorithm development for quantum advantage</p>
                </div>
                <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700">
                  <Zap className="w-8 h-8 text-purple-400 mb-4" />
                  <h3 className="font-semibold text-white mb-2">Quantum Networks</h3>
                  <p className="text-slate-300 text-sm">Secure quantum communication protocols</p>
                </div>
                <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700">
                  <Shield className="w-8 h-8 text-orange-400 mb-4" />
                  <h3 className="font-semibold text-white mb-2">Quantum Security</h3>
                  <p className="text-slate-300 text-sm">Next-generation cryptographic solutions</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">Current Projects</h2>
              <p className="text-slate-300 leading-relaxed">
                Our quantum computing division is currently working on several groundbreaking projects including quantum error correction, 
                distributed quantum computing networks, and quantum machine learning applications. These projects represent the cutting 
                edge of what's possible in quantum technology today.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">Get Involved</h2>
              <p className="text-slate-300 leading-relaxed">
                Interested in quantum computing collaboration or have a quantum challenge that needs solving? 
                Our team of quantum experts is ready to help push the boundaries of what's possible.
              </p>
              <div className="mt-6">
                <a 
                  href="#contact"
                  className="inline-block bg-gradient-to-r from-sky-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                >
                  Discuss Quantum Projects
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default QuantumComputing;