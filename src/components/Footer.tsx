import { useState } from 'react';
import { Github, Linkedin, Twitter, Globe, Mail, ArrowUp } from 'lucide-react';
import { supabase } from 'src/lib/supabase'
import toast from 'react-hot-toast';

const Footer = () => {
  const [formData, setFormData] = useState('');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(e.target.value);
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Adding...');
    const getEmailList = async () => {
      const { data, error } = await supabase
        .from("emaillist")
        .insert({ email: formData });
      if (error) {
        console.error(error);
        if (error.code == "23505") {
          toast("Email already on list!");
        } else toast("Error adding email. Check console for details.")
      }
      else {
        console.log("Added!");
        toast("Email added successfully!");
      }
    };
    getEmailList();
  };

  const footerLinks = {
    "Our Family": [
      { name: 'No Decks Just Dough', href: 'https://nodecksjustdough.com/' },
      { name: 'Greenhorn Innovation Fund', href: 'https://greenhorninnovationfund.org/' },
      { name: 'Andromeda Hosting', href: 'https://www.andromedahosting.com/' },
      { name: 'Mauceri Ventures', href: 'https://mauceriholdings.com/' },
    ],
    Company: [
      { name: 'About MP&D', href: '/about-mpd' },
      { name: 'Our Team', href: '/our-team' },
      { name: 'Innovation Labs', href: '/innovation-labs' },
      { name: 'Careers', href: '/careers' },
      { name: 'News & Press', href: '/news-press' }
    ],
    Resources: [
      { name: 'Research Papers', href: '/research-papers' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'White Papers', href: '/white-papers' },
      { name: 'Innovation Blog', href: '/innovation-blog' },
      { name: 'Technical Docs', href: '/technical-docs' }
    ],
    Connect: [
      { name: 'Contact Us', href: '/contact-us' },
      { name: 'Partnerships', href: '/partnerships' },
      { name: 'Investor Relations', href: '/investor-relations' },
      { name: 'Media Kit', href: '/media-kit' },
      { name: 'Support', href: '/support' }
    ]
  };

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Globe, href: '#', label: 'Website' }
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="text-3xl font-bold mb-4">
              <span className="text-white">MP</span>
              <span className="text-transparent bg-gradient-to-r from-sky-400 to-purple-500 bg-clip-text">&</span>
              <span className="text-white">D</span>
              <span className="text-sm text-slate-400 ml-2">.is</span>
            </div>
            <p className="text-slate-300 mb-6 mr-9 leading-relaxed">
              Reinventing research, design, and product development. Transforming Breakthrough ideas into tomorrow's reality.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-slate-800/50 hover:bg-gradient-to-br hover:from-sky-500 hover:to-purple-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 text-slate-400 hover:text-white transition-colors duration-200" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-white mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-sky-400 transition-colors duration-200 hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600 mb-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <h4 className="text-xl font-bold text-white mb-2">Stay at the Forefront</h4>
              <p className="text-slate-300">Get exclusive insights into breakthrough innovations and emerging technologies.</p>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                onChange={handleInputChange}
                required
                className="flex-1 sm:w-80 px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors duration-200"
              />
              <button type="submit" className="bg-gradient-to-r from-sky-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 flex items-center justify-center gap-2 w-full sm:w-auto flex-shrink-0">
                <Mail className="w-4 h-4" />
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-800">
          <div className="flex items-center gap-6 text-slate-400 text-sm mb-4 md:mb-0">
            <span>© 2025 MP&D. All rights reserved.</span>
            <a href="/privacy-policy" className="hover:text-sky-400 transition-colors duration-200">Privacy Policy</a>
            <a href="/terms-of-service" className="hover:text-sky-400 transition-colors duration-200">Terms of Service</a>
            <a href="/cookie-policy" className="hover:text-sky-400 transition-colors duration-200">Cookie Policy</a>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="group bg-slate-800/50 hover:bg-gradient-to-br hover:from-sky-500 hover:to-purple-600 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors duration-200" />
          </button>
        </div>
      </div>

      {/* Animated Background Effect */}
      <div className="hidden md:block absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -bottom-32 left-1/4 w-64 h-64 bg-gradient-to-br from-sky-400/5 to-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 right-1/4 w-64 h-64 bg-gradient-to-br from-purple-500/5 to-orange-500/5 rounded-full blur-3xl"></div>
      </div>
    </footer>
  );
};

export default Footer;