import React from 'react';
import { ArrowLeft, Dna, Brain, Microscope, TrendingUp } from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';

const BioSynthEngine = () => {
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
            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Dna className="w-10 h-10 text-white" />
            </div>
            <span className="px-4 py-2 bg-green-900/30 text-green-400 rounded-full text-sm border border-green-400/30 mb-4 inline-block">
              Biotechnology
            </span>
            <h1 className="text-4xl font-bold mb-4">BioSynth Engine</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              AI-powered synthetic biology platform for rapid drug discovery and development.
            </p>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700 text-center">
                <Brain className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">AI-Powered</h3>
                <p className="text-slate-300 text-sm">90% accuracy in compound prediction</p>
              </div>
              <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700 text-center">
                <Microscope className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">Clinical Trials</h3>
                <p className="text-slate-300 text-sm">15 compounds currently in trials</p>
              </div>
              <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700 text-center">
                <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">Cost Savings</h3>
                <p className="text-slate-300 text-sm">$500M in development cost reduction</p>
              </div>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">Project Overview</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                The BioSynth Engine represents a paradigm shift in pharmaceutical development, combining artificial 
                intelligence with synthetic biology to accelerate drug discovery from years to months. This advanced 
                platform maintains the highest safety and efficacy standards while dramatically reducing development 
                timelines and costs.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">Key Achievements</h2>
              <ul className="text-slate-300 space-y-2 ml-6">
                <li>• 75% faster drug discovery process</li>
                <li>• 90% accuracy in compound prediction</li>
                <li>• 15 compounds successfully advanced to clinical trials</li>
                <li>• $500M in development cost savings achieved</li>
                <li>• 95% reduction in failed compound iterations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">Technical Innovation</h2>
              <p className="text-slate-300 leading-relaxed">
                Our breakthrough platform integrates machine learning algorithms with advanced protein folding models 
                and molecular simulation engines. The system can predict drug-target interactions, optimize molecular 
                structures, and identify potential side effects before physical synthesis, revolutionizing the 
                traditional drug development pipeline.
              </p>
            </section>

            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600">
              <h3 className="text-2xl font-bold mb-4 text-white">Project Details Coming Soon</h3>
              <p className="text-slate-300 mb-6">
                We're preparing comprehensive documentation covering the AI algorithms, synthetic biology processes, 
                clinical trial results, and partnership opportunities. This resource will be invaluable for 
                pharmaceutical companies and research institutions.
              </p>
              <div className="mt-6">
                <a 
                  href="#contact"
                  className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
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

export default BioSynthEngine;