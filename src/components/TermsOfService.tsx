import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const TermsOfService = () => {
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

          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        
          <div className="prose prose-invert max-w-none">
            <p className="text-slate-300 text-lg mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">Agreement to Terms</h2>
              <p className="text-slate-300 leading-relaxed">
                By accessing and using MP&D's services, you agree to be bound by these Terms of Service 
                and all applicable laws and regulations. If you do not agree with any of these terms, 
                you are prohibited from using our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">Services Description</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                MP&D provides revolutionary R&D and product development services including:
              </p>
              <ul className="text-slate-300 space-y-2 ml-6">
                <li>• Advanced computing and quantum technology development</li>
                <li>• Biotechnology research and applications</li>
                <li>• Energy systems and sustainable solutions</li>
                <li>• Materials science and nanotechnology</li>
                <li>• Custom innovation consulting</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">Intellectual Property</h2>
              <p className="text-slate-300 leading-relaxed">
                All intellectual property developed through our collaboration will be governed by 
                specific project agreements. We respect and protect all proprietary information 
                shared during the innovation process.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">Limitation of Liability</h2>
              <p className="text-slate-300 leading-relaxed">
                MP&D shall not be liable for any indirect, incidental, special, consequential, or 
                punitive damages resulting from your use of our services, even if we have been 
                advised of the possibility of such damages.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">Contact Information</h2>
              <p className="text-slate-300 leading-relaxed">
                For questions regarding these Terms of Service, please contact us at:
              </p>
              <p className="text-sky-400 mt-2">legal@mpd.is</p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsOfService;