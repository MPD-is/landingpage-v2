import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const InnovationLabs = () => {
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

          <h1 className="text-4xl font-bold mb-8">Innovation Labs</h1>
        
          <div className="prose prose-invert max-w-none">
            <p className="text-slate-300 text-lg mb-8">
              Explore our global network of cutting-edge research and development facilities.
            </p>

            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600">
              <h3 className="text-2xl font-bold mb-4 text-white">Labs Directory Coming Soon</h3>
              <p className="text-slate-300 mb-6">
                We're developing a comprehensive overview of our innovation labs worldwide, including facility details, 
                research capabilities, equipment specifications, and collaboration opportunities at each location.
              </p>
              <p className="text-slate-300">
                Our labs span multiple continents and specialize in various breakthrough technologies. 
                Contact us to learn more about specific facilities and research capabilities.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default InnovationLabs;