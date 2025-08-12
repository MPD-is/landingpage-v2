import React from 'react';
import { ArrowLeft, Microscope, Wrench, Plane, Award } from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';

const NanoHealMaterials = () => {
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
            <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Microscope className="w-10 h-10 text-white" />
            </div>
            <span className="px-4 py-2 bg-pink-900/30 text-pink-400 rounded-full text-sm border border-pink-400/30 mb-4 inline-block">
              Materials Science
            </span>
            <h1 className="text-4xl font-bold mb-4">NanoHeal Materials</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Self-healing nanomaterials for aerospace and medical applications.
            </p>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700 text-center">
                <Wrench className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">Maintenance</h3>
                <p className="text-slate-300 text-sm">90% reduction in maintenance needs</p>
              </div>
              <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700 text-center">
                <Plane className="w-8 h-8 text-sky-400 mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">Aerospace Ready</h3>
                <p className="text-slate-300 text-sm">Certified for aerospace applications</p>
              </div>
              <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700 text-center">
                <Award className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">Patents</h3>
                <p className="text-slate-300 text-sm">25+ innovation patents filed</p>
              </div>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">Project Overview</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                NanoHeal Materials represents a breakthrough in smart materials technology. These revolutionary 
                self-healing nanomaterials can autonomously repair damage at the molecular level, extending lifespan 
                and dramatically reducing maintenance requirements across critical applications in aerospace, defense, 
                and medical devices.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">Key Achievements</h2>
              <ul className="text-slate-300 space-y-2 ml-6">
                <li>• 90% reduction in maintenance requirements</li>
                <li>• 300% increase in material lifespan</li>
                <li>• Successfully certified for aerospace applications</li>
                <li>• Patent portfolio of 25+ breakthrough innovations</li>
                <li>• 99.7% self-repair success rate in testing</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">Technical Innovation</h2>
              <p className="text-slate-300 leading-relaxed">
                Our breakthrough approach integrates nanoengineered polymers with smart molecular assemblies that 
                can detect damage and initiate repair processes automatically. The materials utilize advanced surface 
                chemistry to create self-organizing repair networks that restore structural integrity without external 
                intervention.
              </p>
            </section>

            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600">
              <h3 className="text-2xl font-bold mb-4 text-white">Project Details Coming Soon</h3>
              <p className="text-slate-300 mb-6">
                We're preparing detailed technical specifications, application guides, performance data, and 
                implementation case studies. This comprehensive resource will be valuable for aerospace manufacturers, 
                defense contractors, and medical device companies.
              </p>
              <div className="mt-6">
                <a 
                  href="#contact"
                  className="inline-block bg-gradient-to-r from-pink-500 to-rose-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
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

export default NanoHealMaterials;