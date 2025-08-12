import React from 'react';
import { ArrowLeft, Globe, Leaf, Wind } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const ClimateSolutions = () => {
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
            <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Globe className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Climate Solutions</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Developing breakthrough technologies for carbon capture, environmental restoration, and climate adaptation to protect our planet.
            </p>
          </div>

          <div className="prose prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">Climate Technology</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Our climate solutions division focuses on developing scalable technologies that can make a meaningful impact on global climate challenges.
              </p>
              <div className="grid md:grid-cols-3 gap-6 my-8">
                <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700">
                  <Globe className="w-8 h-8 text-blue-400 mb-4" />
                  <h3 className="font-semibold text-white mb-2">Carbon Capture</h3>
                  <p className="text-slate-300 text-sm">Advanced atmospheric CO2 removal systems</p>
                </div>
                <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700">
                  <Leaf className="w-8 h-8 text-green-400 mb-4" />
                  <h3 className="font-semibold text-white mb-2">Ecosystem Restoration</h3>
                  <p className="text-slate-300 text-sm">Technology-driven environmental recovery</p>
                </div>
                <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700">
                  <Wind className="w-8 h-8 text-teal-400 mb-4" />
                  <h3 className="font-semibold text-white mb-2">Climate Adaptation</h3>
                  <p className="text-slate-300 text-sm">Resilient infrastructure and systems</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">Our Approach</h2>
              <p className="text-slate-300 leading-relaxed">
                We believe that technology can be a powerful force for environmental good. Our climate solutions combine innovative engineering 
                with sustainable practices to create technologies that not only address climate challenges but also create economic value.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">Make an Impact</h2>
              <p className="text-slate-300 leading-relaxed">
                Ready to be part of the climate solution? Partner with us to develop technologies that can help reverse climate change 
                and build a more sustainable future for generations to come.
              </p>
              <div className="mt-6">
                <a 
                  href="#contact"
                  className="inline-block bg-gradient-to-r from-blue-500 to-teal-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                >
                  Join Climate Innovation
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

export default ClimateSolutions;