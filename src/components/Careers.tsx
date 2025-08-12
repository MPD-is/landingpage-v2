import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const Careers = () => {
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

          <h1 className="text-4xl font-bold mb-8">Careers</h1>
        
          <div className="prose prose-invert max-w-none">
            <p className="text-slate-300 text-lg mb-8">
              Join our team of world-class innovators and help shape the future through breakthrough R&D.
            </p>

            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600">
              <h3 className="text-2xl font-bold mb-4 text-white">Careers Portal Coming Soon</h3>
              <p className="text-slate-300 mb-6">
                We're building a comprehensive careers portal that will feature current openings, application processes, 
                benefits information, and insights into life at MP&D. We're always looking for brilliant minds to join 
                our mission of transforming breakthrough ideas into reality.
              </p>
              <p className="text-slate-300">
                Interested in joining our team? Reach out through our contact form to learn about current opportunities 
                and express your interest in specific research areas.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Careers;