import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const InvestorRelations = () => {
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

          <h1 className="text-4xl font-bold mb-8">Investor Relations</h1>
        
          <div className="prose prose-invert max-w-none">
            <p className="text-slate-300 text-lg mb-8">
              Information for current and potential investors interested in MP&D's breakthrough innovation portfolio.
            </p>

            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600">
              <h3 className="text-2xl font-bold mb-4 text-white">Investor Portal Coming Soon</h3>
              <p className="text-slate-300 mb-6">
                We're building a comprehensive investor relations portal that will provide financial information, 
                investment opportunities, performance metrics, and strategic updates for our stakeholders and 
                potential investors interested in breakthrough technology investments.
              </p>
              <p className="text-slate-300">
                For immediate investor inquiries, please contact us directly through our main contact form 
                and specify your interest in investor relations.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default InvestorRelations;