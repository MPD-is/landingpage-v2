import { useEffect, useState } from "react";
import { Linkedin, Twitter, Mail, Award } from 'lucide-react';
import { supabase } from 'src/lib/supabase'

const Team = () => {
  const [advisors, setAdvisors] = useState([]);
  const [leaders, setLeaders] = useState([]);
  const [teamStats, setTeamStats] = useState([]);

  useEffect(() => {
    const getAdvisors = async () => {
      const { data, error } = await supabase
        .from("advisors")
        .select("*");
      if (error) console.error(error);
      else setAdvisors(data);
    };
    const getLeaders = async () => {
      const { data, error } = await supabase
        .from("leaders")
        .select("*");
      if (error) console.error(error);
      else setLeaders(data);
    };
    const getTeamStats = async () => {
      const { data, error } = await supabase
        .from("teamstats")
        .select("*");
      if (error) console.error(error);
      else setTeamStats(data);
    };

    getAdvisors();
    getLeaders();
    getTeamStats();
  }, [])

  return (
    <section id="team" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            World-Class <span className="text-transparent bg-gradient-to-r from-sky-400 to-purple-500 bg-clip-text">Innovators</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Our team brings together the brightest minds from leading institutions, united by a shared vision of revolutionary innovation
          </p>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {teamStats.map((stat, index) => (
            <div key={index} className="text-center bg-slate-800/30 rounded-2xl p-6 border border-slate-700">
              <div className="text-3xl font-bold text-sky-400 mb-2">{stat.value}</div>
              <div className="text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Leadership Team */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="group bg-slate-800/30 backdrop-blur-sm rounded-3xl overflow-hidden border border-slate-700 hover:border-sky-400/50 transition-all duration-500 hover:scale-105"
            >
              {/* Profile Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
              </div>

              {/* Profile Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2 text-white">{leader.name}</h3>
                <div className="text-sky-400 font-semibold mb-2">{leader.role}</div>
                <div className="text-slate-400 text-sm mb-4">{leader.expertise}</div>
                
                <p className="text-slate-300 text-sm mb-6 leading-relaxed">{leader.bio}</p>

                {/* Achievements */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Award className="w-4 h-4 text-sky-400" />
                    <span className="text-sky-400 font-semibold text-sm">Key Achievements</span>
                  </div>
                  <div className="space-y-1">
                    {leader.achievements.split("|").map((achievement, achIndex) => (
                      <div key={achIndex} className="text-slate-300 text-xs flex items-center">
                        <div className="w-1.5 h-1.5 bg-sky-400 rounded-full mr-2 flex-shrink-0"></div>
                        {achievement}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-3">
                  <button className="w-10 h-10 bg-slate-700/50 hover:bg-sky-500 rounded-full flex items-center justify-center transition-colors duration-200">
                    <Linkedin className="w-4 h-4" />
                  </button>
                  <button className="w-10 h-10 bg-slate-700/50 hover:bg-sky-400 rounded-full flex items-center justify-center transition-colors duration-200">
                    <Twitter className="w-4 h-4" />
                  </button>
                  <button className="w-10 h-10 bg-slate-700/50 hover:bg-purple-500 rounded-full flex items-center justify-center transition-colors duration-200">
                    <Mail className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Advisory Board */}
        <div className="grid md:grid-cols-5 gap-8 mb-16">
          {advisors.map((leader, index) => (
            <div key={index} className="text-center bg-slate-800/30 rounded-2xl p-6 border border-slate-700">
              <div className="text-3xl font-bold text-sky-400 mb-2">{}</div>
              <div className="text-slate-400">{}</div>
            </div>
          ))}
        </div>

        {/* Culture Section */}
        <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-3xl p-12 border border-slate-600">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4 text-white">Innovation Culture</h3>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              We foster an environment where breakthrough thinking thrives, diverse perspectives are valued, and revolutionary ideas become reality.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h4 className="font-semibold text-white mb-2">Breakthrough Thinking</h4>
              <p className="text-slate-300 text-sm">Challenging conventions and pushing the boundaries of what's possible</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h4 className="font-semibold text-white mb-2">Global Impact</h4>
              <p className="text-slate-300 text-sm">Every innovation designed to solve humanity's greatest challenges</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="font-semibold text-white mb-2">Rapid Innovation</h4>
              <p className="text-slate-300 text-sm">Accelerating the journey from concept to world-changing reality</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;