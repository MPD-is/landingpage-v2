import React from 'react';
import { ArrowLeft, Dna, Microscope, Heart } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const Biotechnology = () => {
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
            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Dna className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Biotechnology</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Revolutionizing healthcare and life sciences through synthetic biology, gene editing, and personalized medicine innovations.
            </p>
          </div>

          <div className="prose prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">Our Biotech Focus</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                MP&D's biotechnology division combines cutting-edge research with practical applications to solve humanity's most pressing health challenges.
              </p>
              <div className="grid md:grid-cols-3 gap-6 my-8">
                <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700">
                  <Dna className="w-8 h-8 text-green-400 mb-4" />
                  <h3 className="font-semibold text-white mb-2">Gene Editing</h3>
                  <p className="text-slate-300 text-sm">CRISPR and next-generation editing technologies</p>
                </div>
                <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700">
                  <Microscope className="w-8 h-8 text-blue-400 mb-4" />
                  <h3 className="font-semibold text-white mb-2">Drug Discovery</h3>
                  <p className="text-slate-300 text-sm">AI-powered pharmaceutical development</p>
                </div>
                <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700">
                  <Heart className="w-8 h-8 text-red-400 mb-4" />
                  <h3 className="font-semibold text-white mb-2">Precision Medicine</h3>
                  <p className="text-slate-300 text-sm">Personalized treatment solutions</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">Research Areas</h2>
              <p className="text-slate-300 leading-relaxed">
                Our biotechnology research spans synthetic biology, biomarker discovery, therapeutic development, and diagnostic innovations. 
                We're particularly focused on applications that can have immediate real-world impact on patient outcomes and healthcare delivery.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">Collaboration Opportunities</h2>
              <p className="text-slate-300 leading-relaxed">
                Partner with our biotechnology team to accelerate your research, develop new therapeutic approaches, or solve complex biological challenges.
              </p>
              <div className="mt-6">
                <a 
                  href="#contact"
                  className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                >
                  Explore Biotech Solutions
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

export default Biotechnology;