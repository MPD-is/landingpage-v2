import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const TechnicalDocs = () => {
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

          <h1 className="text-4xl font-bold mb-8">Technical Documentation</h1>
        
          <div className="prose prose-invert max-w-none">
            <p className="text-slate-300 text-lg mb-8">
              Access comprehensive technical documentation, API references, and implementation guides for our technologies.
            </p>

            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600">
              <h3 className="text-2xl font-bold mb-4 text-white">Documentation Portal Coming Soon</h3>
              <p className="text-slate-300 mb-6">
                We're building a comprehensive technical documentation portal that will provide detailed guides, 
                API references, implementation examples, and best practices for working with our technologies and platforms.
              </p>
              <p className="text-slate-300">
                This resource will be essential for developers, researchers, and technical teams looking to integrate 
                or build upon our breakthrough innovations. Contact us for specific technical inquiries.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TechnicalDocs;