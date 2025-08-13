import { ArrowLeft } from 'lucide-react';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

const ResearchPapers = () => {
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

          <h1 className="text-4xl font-bold mb-8">Research Papers</h1>
        
          <div className="prose prose-invert max-w-none">
            <p className="text-slate-300 text-lg mb-8">
              Access our published research papers, peer-reviewed studies, and scientific contributions to the global knowledge base.
            </p>

            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600">
              <h3 className="text-2xl font-bold mb-4 text-white">Research Library Coming Soon</h3>
              <p className="text-slate-300 mb-6">
                We're building a comprehensive research library that will house our published papers, ongoing studies, 
                and collaborative research projects. This resource will be invaluable for researchers, academics, 
                and industry professionals looking to stay at the forefront of breakthrough innovations.
              </p>
              <p className="text-slate-300">
                Our research spans quantum computing, biotechnology, energy systems, materials science, and more. 
                Contact us for specific research inquiries or collaboration opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ResearchPapers;