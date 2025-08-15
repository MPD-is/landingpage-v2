import { useEffect, useState } from "react";
import { ArrowLeft, ExternalLink, Award, TrendingUp, Users, Calendar, Clock, Target } from 'lucide-react';
import { supabase } from 'src/lib/supabase'
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

const CaseStudies = () => {
  const [caseStudies, setCaseStudies] = useState([]);
  const [stats, setStats] = useState([]);

  useEffect(() => {
    const getCaseStudies = async () => {
      const { data, error } = await supabase
        .from("casestudies")
        .select("*");
      if (error) console.error(error);
      else setCaseStudies(data);
    };
    const getStats = async () => {
      const { data, error } = await supabase
        .from("casestudystats")
        .select("*");
      if (error) console.error(error);
      else setStats(data);
    };

    getStats();
    getCaseStudies();
  }, [])

  const statIcons = [Award, TrendingUp, Users, Target];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-slate-950 text-white pt-20">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <button 
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-sky-400 hover:text-sky-300 mb-8 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>

          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">
              Case <span className="text-transparent bg-gradient-to-r from-sky-400 to-purple-500 bg-clip-text">Studies</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Explore our breakthrough innovations and their real-world impact across industries
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => {
              const Icon = statIcons[index];
              return (
                <div key={index} className="text-center bg-slate-800/30 rounded-2xl p-6 border border-slate-700">
                  <Icon className="w-8 h-8 text-sky-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-slate-400">{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* Case Studies Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="group bg-slate-800/30 backdrop-blur-sm rounded-3xl overflow-hidden border border-slate-700 hover:border-sky-400/50 transition-all duration-500 hover:scale-105"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-slate-900/80 backdrop-blur-sm rounded-full text-sm text-sky-400 border border-sky-400/30">
                      {study.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 backdrop-blur-sm rounded-full text-xs border ${
                      study.status === 'Deployed Globally' || study.status === 'Production Ready' || study.status === 'Global Deployment'
                        ? 'bg-green-900/80 text-green-400 border-green-400/30'
                        : study.status === 'Clinical Trials' || study.status === 'FDA Review'
                        ? 'bg-yellow-900/80 text-yellow-400 border-yellow-400/30'
                        : 'bg-blue-900/80 text-blue-400 border-blue-400/30'
                    }`}>
                      {study.status}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white">{study.title}</h3>
                  <p className="text-slate-300 mb-4 text-sm leading-relaxed">{study.description}</p>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Clock className="w-3 h-3 text-slate-400" />
                        <span className="text-xs text-slate-400">Duration</span>
                      </div>
                      <div className="text-sm text-white font-semibold">{study.duration}</div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Users className="w-3 h-3 text-slate-400" />
                        <span className="text-xs text-slate-400">Team</span>
                      </div>
                      <div className="text-sm text-white font-semibold">{study.team}</div>
                    </div>
                  </div>

                  {/* Impact */}
                  <div className="mb-4">
                    <div className="text-xs text-slate-400 mb-1">Key Impact</div>
                    <div className="text-sky-400 font-semibold text-sm">{study.impact}</div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {study.tags.split("|").slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                    {study.tags.split("|").length > 3 && (
                      <span className="px-2 py-1 bg-slate-700/50 text-slate-400 text-xs rounded-full">
                        +{study.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Action Button */}
                  <button className="group/btn w-full bg-gradient-to-r from-sky-500/20 to-purple-600/20 border border-sky-400/30 text-sky-400 px-4 py-2 rounded-xl font-semibold text-sm transition-all duration-300 hover:from-sky-500 hover:to-purple-600 hover:text-white hover:border-transparent flex items-center justify-center gap-2">
                    View Details
                    <ExternalLink className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CaseStudies;