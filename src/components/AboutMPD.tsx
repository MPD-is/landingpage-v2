import React from 'react';
import { ArrowLeft, Target, Users, Globe, Award } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const AboutMPD = () => {
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

          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">About MP&D</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              We are a revolutionary R&D and product development firm reimagining the innovation pipeline for tomorrow's breakthroughs.
            </p>
          </div>

          <div className="prose prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">Our Mission</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                At MP&D, we exist to transform impossible ideas into world-changing realities. We bridge the gap between cutting-edge research 
                and practical applications, accelerating the journey from breakthrough discovery to market-ready innovation.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
                <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700 text-center">
                  <Target className="w-8 h-8 text-sky-400 mx-auto mb-4" />
                  <h3 className="font-semibold text-white mb-2">Precision Focus</h3>
                  <p className="text-slate-300 text-sm">Strategic alignment with future possibilities</p>
                </div>
                <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700 text-center">
                  <Users className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                  <h3 className="font-semibold text-white mb-2">Expert Team</h3>
                  <p className="text-slate-300 text-sm">World-class innovators and researchers</p>
                </div>
                <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700 text-center">
                  <Globe className="w-8 h-8 text-green-400 mx-auto mb-4" />
                  <h3 className="font-semibold text-white mb-2">Global Impact</h3>
                  <p className="text-slate-300 text-sm">Solutions for humanity's greatest challenges</p>
                </div>
                <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700 text-center">
                  <Award className="w-8 h-8 text-orange-400 mx-auto mb-4" />
                  <h3 className="font-semibold text-white mb-2">Proven Results</h3>
                  <p className="text-slate-300 text-sm">Track record of breakthrough innovations</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">Our Approach</h2>
              <p className="text-slate-300 leading-relaxed">
                We've reimagined the entire innovation process from the ground up. Our proprietary methodologies combine cutting-edge research 
                with rapid prototyping, advanced simulation, and real-world validation to accelerate breakthrough discoveries. From quantum 
                computing applications to biotechnology breakthroughs, we work at the intersection of multiple disciplines to solve humanity's 
                most complex challenges.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">Innovation Culture</h2>
              <p className="text-slate-300 leading-relaxed">
                We foster an environment where breakthrough thinking thrives, diverse perspectives are valued, and revolutionary ideas become reality. 
                Our culture is built on challenging conventions, pushing boundaries, and maintaining the highest standards of scientific rigor 
                while moving at the speed of innovation.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">Join Our Mission</h2>
              <p className="text-slate-300 leading-relaxed">
                Ready to be part of the future? Whether you're looking to collaborate on breakthrough research, develop revolutionary products, 
                or join our team of innovators, we're always seeking partners who share our vision of transforming the impossible into reality.
              </p>
              <div className="mt-6">
                <a 
                  href="#contact"
                  className="inline-block bg-gradient-to-r from-sky-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                >
                  Get Involved
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutMPD;