import { ArrowLeft } from 'lucide-react';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

const NewsPress = () => {
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

          <h1 className="text-4xl font-bold mb-8">News & Press</h1>
        
          <div className="prose prose-invert max-w-none">
            <p className="text-slate-300 text-lg mb-8">
              Stay updated with the latest breakthrough announcements, press releases, and media coverage from MP&D.
            </p>

            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600">
              <h3 className="text-2xl font-bold mb-4 text-white">News Center Coming Soon</h3>
              <p className="text-slate-300 mb-6">
                We're developing a comprehensive news and press center that will feature the latest announcements, 
                breakthrough discoveries, partnership news, and media coverage. This will be your go-to source for 
                all MP&D updates and industry insights.
              </p>
              <p className="text-slate-300">
                For immediate press inquiries or to request interviews with our team members, 
                please contact us directly through our main contact form.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NewsPress;