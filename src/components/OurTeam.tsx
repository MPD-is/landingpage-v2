import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const OurTeam = () => {
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

          <h1 className="text-4xl font-bold mb-8">Our Team</h1>
        
          <div className="prose prose-invert max-w-none">
            <p className="text-slate-300 text-lg mb-8">
              Meet the world-class innovators and researchers driving breakthrough discoveries at MP&D.
            </p>

            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600">
              <h3 className="text-2xl font-bold mb-4 text-white">Team Page Coming Soon</h3>
              <p className="text-slate-300 mb-6">
                We're currently building a comprehensive team directory that will showcase our brilliant scientists, 
                engineers, and innovators from around the world. This page will feature detailed profiles, research areas, 
                and achievements of our team members.
              </p>
              <p className="text-slate-300">
                In the meantime, you can learn about our leadership team and culture on our main site, 
                or reach out directly to connect with specific team members.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OurTeam;