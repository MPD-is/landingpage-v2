import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const CookiePolicy = () => {
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

          <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
        
          <div className="prose prose-invert max-w-none">
            <p className="text-slate-300 text-lg mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">What Are Cookies</h2>
              <p className="text-slate-300 leading-relaxed">
                Cookies are small text files that are stored on your device when you visit our website. 
                They help us provide you with a better browsing experience and allow certain features 
                to function properly.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">Types of Cookies We Use</h2>
            
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2 text-sky-400">Essential Cookies</h3>
                <p className="text-slate-300 leading-relaxed">
                  These cookies are necessary for the website to function and cannot be switched off. 
                  They are usually set in response to actions made by you, such as setting privacy 
                  preferences or filling in forms.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2 text-sky-400">Analytics Cookies</h3>
                <p className="text-slate-300 leading-relaxed">
                  These cookies help us understand how visitors interact with our website by collecting 
                  and reporting information anonymously. This helps us improve our services and user experience.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2 text-sky-400">Functional Cookies</h3>
                <p className="text-slate-300 leading-relaxed">
                  These cookies enable enhanced functionality and personalization, such as remembering 
                  your preferences and providing customized content.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">Managing Cookies</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                You can control and manage cookies in various ways:
              </p>
              <ul className="text-slate-300 space-y-2 ml-6">
                <li>• Browser settings: Most browsers allow you to refuse cookies or delete existing ones</li>
                <li>• Cookie preferences: Use our cookie preference center to customize your settings</li>
                <li>• Third-party tools: Use privacy-focused browser extensions or tools</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">Contact Us</h2>
              <p className="text-slate-300 leading-relaxed">
                If you have any questions about our use of cookies, please contact us at:
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

export default CookiePolicy;