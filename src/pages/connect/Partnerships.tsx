import { ArrowLeft } from 'lucide-react';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

const Partnerships = () => {
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

          <h1 className="text-4xl font-bold mb-8">Partnerships</h1>
        
          <div className="prose prose-invert max-w-none">
            <p className="text-slate-300 text-lg mb-8">
              Explore collaboration opportunities and strategic partnerships with MP&D's global innovation network.
            </p>

            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600">
              <h3 className="text-2xl font-bold mb-4 text-white">Partnership Portal Coming Soon</h3>
              <p className="text-slate-300 mb-6">
                We're developing a comprehensive partnership portal that will outline collaboration opportunities, 
                partnership models, application processes, and success stories from our existing partnerships with 
                leading institutions and organizations worldwide.
              </p>
              <p className="text-slate-300">
                We work with universities, research institutions, corporations, and government agencies to accelerate 
                breakthrough innovations. Contact us to discuss potential partnership opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Partnerships;