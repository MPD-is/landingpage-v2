import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const WhitePapers = () => {
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

          <h1 className="text-4xl font-bold mb-8">White Papers</h1>
        
          <div className="prose prose-invert max-w-none">
            <p className="text-slate-300 text-lg mb-8">
              Explore our in-depth white papers covering emerging technologies, market analyses, and strategic insights.
            </p>

            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600">
              <h3 className="text-2xl font-bold mb-4 text-white">White Paper Library Coming Soon</h3>
              <p className="text-slate-300 mb-6">
                We're developing a comprehensive collection of white papers that will provide deep insights into 
                emerging technologies, market trends, and strategic analyses across our core innovation areas. 
                These resources will be essential for decision-makers and industry leaders.
              </p>
              <p className="text-slate-300">
                Our white papers will cover topics ranging from quantum computing applications to biotechnology trends, 
                energy system innovations, and materials science breakthroughs. Stay tuned for these valuable resources.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WhitePapers;