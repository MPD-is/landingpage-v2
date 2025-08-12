import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Globe } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Get In Touch',
      details: ['hello@mpd.is', 'partnerships@mpd.is']
    }
  ];

  const projectTypes = [
    'Quantum Computing',
    'Biotechnology',
    'Energy Systems',
    'Climate Solutions',
    'Materials Science',
    'Security & Defense',
    'Custom Innovation'
  ];

  return (
    <section id="contact" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Start Your <span className="text-transparent bg-gradient-to-r from-sky-400 to-purple-500 bg-clip-text">Revolution</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto px-4">
            Ready to transform your breakthrough idea into reality? Let's discuss how our revolutionary R&D approach can accelerate your innovation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact Form */}
          <div>
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-slate-700">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-white">Let's Innovate Together</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors duration-200"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors duration-200"
                    placeholder="Your organization"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    Project Type *
                  </label>
                  <select
                    name="project"
                    value={formData.project}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors duration-200"
                  >
                    <option value="">Select project type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors duration-200 resize-none"
                    placeholder="Tell us about your breakthrough idea, technical challenges, or innovation goals..."
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full bg-gradient-to-r from-sky-500 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25 flex items-center justify-center gap-3"
                >
                  Launch Innovation
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>

                {/* Additional Info */}
                <div className="mt-6 pt-6 border-t border-slate-600">
                  <div className="text-center text-slate-400 text-xs sm:text-sm">
                    <p className="mb-2">🔒 Your information is secure and confidential</p>
                    <p className="mb-2">⚡ Typical response within 4 hours</p>
                    <p className="mb-2">🚀 Free initial consultation included</p>
                    <p>🌍 Global innovation network at your service</p>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8 mt-8 lg:mt-0">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={index} className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-slate-700">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2 text-sm sm:text-base">{info.title}</h4>
                      <div className="space-y-1">
                        {info.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="text-slate-300 text-sm sm:text-base">{detail}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Innovation Labs */}
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-slate-600">
              <h4 className="font-semibold text-white mb-4 text-sm sm:text-base">Global Innovation Labs</h4>
              <div className="space-y-2 sm:space-y-3 text-slate-300 text-sm sm:text-base">
                <div className="flex items-center justify-between">
                  <span>Changwon, Korea</span>
                  <span className="text-green-400">● Live</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Dominican Republic</span>
                  <span className="text-yellow-400">● Coming Soon</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Florida, USA</span>
                  <span className="text-green-400">● Live</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Hoboken, NJ</span>
                  <span className="text-green-400">● Live</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Jersey City, NJ</span>
                  <span className="text-green-400">● Live</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Long Island, NY</span>
                  <span className="text-green-400">● Live</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Los Angeles, CA</span>
                  <span className="text-yellow-400">● Coming Soon</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Madrid, Spain</span>
                  <span className="text-green-400">● Live</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Pittsburgh, PA</span>
                  <span className="text-yellow-400">● Coming Soon</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Warsaw, Poland</span>
                  <span className="text-green-400">● Live</span>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-slate-700">
              <h4 className="font-semibold text-white mb-4 text-sm sm:text-base">Response Time</h4>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-300 text-sm sm:text-base">Initial Response</span>
                    <span className="text-sky-400 font-semibold text-sm sm:text-base">{'< 4 hours'}</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-sky-400 to-purple-500 h-2 rounded-full w-11/12"></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-300 text-sm sm:text-base">Project Kickoff</span>
                    <span className="text-purple-400 font-semibold text-sm sm:text-base">{'< 1 week'}</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-400 to-pink-500 h-2 rounded-full w-10/12"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;