import { ArrowLeft, Microscope, Atom, Layers } from 'lucide-react';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

const MaterialsScience = () => {
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
            <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Microscope className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Materials Science</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Engineering revolutionary nanomaterials, metamaterials, and smart materials with unprecedented properties and applications.
            </p>
          </div>

          <div className="prose prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">Advanced Materials</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Our materials science division creates breakthrough materials that enable new possibilities across industries, from aerospace to medicine.
              </p>
              <div className="grid md:grid-cols-3 gap-6 my-8">
                <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700">
                  <Microscope className="w-8 h-8 text-pink-400 mb-4" />
                  <h3 className="font-semibold text-white mb-2">Nanomaterials</h3>
                  <p className="text-slate-300 text-sm">Precision-engineered materials at the nanoscale</p>
                </div>
                <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700">
                  <Atom className="w-8 h-8 text-purple-400 mb-4" />
                  <h3 className="font-semibold text-white mb-2">Metamaterials</h3>
                  <p className="text-slate-300 text-sm">Materials with properties not found in nature</p>
                </div>
                <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700">
                  <Layers className="w-8 h-8 text-rose-400 mb-4" />
                  <h3 className="font-semibold text-white mb-2">Smart Materials</h3>
                  <p className="text-slate-300 text-sm">Responsive and adaptive material systems</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">Research Focus</h2>
              <p className="text-slate-300 leading-relaxed">
                We specialize in developing materials with extraordinary properties: self-healing capabilities, extreme strength-to-weight ratios, 
                programmable responses to environmental conditions, and novel electromagnetic properties that enable breakthrough applications.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">Applications</h2>
              <p className="text-slate-300 leading-relaxed">
                Our advanced materials find applications in aerospace, defense, electronics, healthcare, and energy sectors. 
                We work closely with industry partners to translate laboratory breakthroughs into real-world solutions.
              </p>
              <div className="mt-6">
                <a 
                  href="#contact"
                  className="inline-block bg-gradient-to-r from-pink-500 to-rose-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                >
                  Explore Materials Innovation
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

export default MaterialsScience;