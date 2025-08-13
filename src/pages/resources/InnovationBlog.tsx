import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

const InnovationBlog = () => {
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

          <h1 className="text-4xl font-bold mb-8">Innovation Blog</h1>
        
          <div className="prose prose-invert max-w-none">
            <p className="text-slate-300 text-lg mb-8">
              Discover insights, trends, and perspectives from our team of innovators and industry thought leaders.
            </p>

            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600">
              <h3 className="text-2xl font-bold mb-4 text-white">Blog Platform Coming Soon</h3>
              <p className="text-slate-300 mb-6">
                We're launching an innovation blog that will feature regular posts from our team members, 
                guest contributors, and industry experts. Topics will include breakthrough discoveries, 
                technology trends, innovation methodologies, and insights from the frontlines of R&D.
              </p>
              <p className="text-slate-300">
                Our blog will be a valuable resource for staying current with the latest developments in 
                quantum computing, biotechnology, energy systems, and other cutting-edge fields.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default InnovationBlog;