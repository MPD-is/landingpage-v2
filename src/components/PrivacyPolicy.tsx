import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const PrivacyPolicy = () => {
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

          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
          <div className="prose prose-invert max-w-none">
            <p className="text-slate-300 text-lg mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">Information We Collect</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                At MP&D, we are committed to protecting your privacy. This policy outlines how we collect, 
                use, and safeguard your personal information when you interact with our services.
              </p>
              <ul className="text-slate-300 space-y-2 ml-6">
                <li>• Contact information (name, email, phone number)</li>
                <li>• Company and project details</li>
                <li>• Technical specifications and requirements</li>
                <li>• Communication preferences</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">How We Use Your Information</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="text-slate-300 space-y-2 ml-6">
                <li>• Provide and improve our R&D services</li>
                <li>• Communicate about projects and innovations</li>
                <li>• Send relevant updates and newsletters</li>
                <li>• Ensure the security of our systems</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">Data Protection</h2>
              <p className="text-slate-300 leading-relaxed">
                We implement industry-standard security measures to protect your data. All sensitive 
                information is encrypted and stored securely. We never sell or share your personal 
                information with third parties without your explicit consent.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">Contact Us</h2>
              <p className="text-slate-300 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-sky-400 mt-2">privacy@mpd.is</p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;