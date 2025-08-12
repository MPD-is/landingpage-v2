import React from 'react';
import { ArrowLeft, Zap, Battery, Sun } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const EnergySystems = () => {
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
            <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Zap className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Energy Systems</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Developing revolutionary energy storage, fusion technology, and sustainable power solutions for a clean energy future.
            </p>
          </div>

          <div className="prose prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">Energy Innovation</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Our energy systems division is pioneering breakthrough technologies that will power the sustainable future, from fusion reactors to advanced battery systems.
              </p>
              <div className="grid md:grid-cols-3 gap-6 my-8">
                <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700">
                  <Zap className="w-8 h-8 text-yellow-400 mb-4" />
                  <h3 className="font-semibold text-white mb-2">Fusion Technology</h3>
                  <p className="text-slate-300 text-sm">Next-generation fusion reactor development</p>
                </div>
                <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700">
                  <Battery className="w-8 h-8 text-green-400 mb-4" />
                  <h3 className="font-semibold text-white mb-2">Energy Storage</h3>
                  <p className="text-slate-300 text-sm">Advanced battery and storage solutions</p>
                </div>
                <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700">
                  <Sun className="w-8 h-8 text-orange-400 mb-4" />
                  <h3 className="font-semibold text-white mb-2">Renewable Integration</h3>
                  <p className="text-slate-300 text-sm">Smart grid and renewable energy systems</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">Current Developments</h2>
              <p className="text-slate-300 leading-relaxed">
                We're currently working on compact fusion reactors, next-generation battery technologies, and intelligent energy management systems. 
                Our goal is to make clean, abundant energy accessible to everyone while reducing environmental impact.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">Partner With Us</h2>
              <p className="text-slate-300 leading-relaxed">
                Join us in revolutionizing the energy sector. Whether you're looking to develop new energy technologies or implement sustainable solutions, 
                our team has the expertise to help you succeed.
              </p>
              <div className="mt-6">
                <a 
                  href="#contact"
                  className="inline-block bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                >
                  Discuss Energy Projects
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

export default EnergySystems;