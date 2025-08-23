const TrustedBy = () => {
  const trustedCompanies = [
    {
      name: 'Stevens Institute of Technology',
      logo: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=200&h=100',
      category: 'Institution'
    },
    {
      name: 'Dooson',
      logo: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=200&h=100',
      category: 'Industry'
    },
    {
      name: 'Kaswin',
      logo: 'https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg?auto=compress&cs=tinysrgb&w=200&h=100',
      category: 'Industry'
    },
    {
      name: 'DN Solutions',
      logo: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=200&h=100',
      category: 'Industry'
    },
    {
      name: 'KIMM',
      logo: 'https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=200&h=100',
      category: 'Institution'
    },
    {
      name: 'AJOU University',
      logo: 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=200&h=100',
      category: 'Institution'
    },
    {
      name: 'Molloy University',
      logo: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=200&h=100',
      category: 'Institution'
    },
    {
      name: 'Bira',
      logo: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200&h=100',
      category: 'Startup'
    },
    {
      name: 'MIPSLab',
      logo: 'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=200&h=100',
      category: 'Startup'
    },
    {
      name: 'EStop',
      logo: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=200&h=100',
      category: 'Startup'
    },
    {
      name: 'Andromeda Hosting',
      logo: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=200&h=100',
      category: 'Infrastructure'
    },
    {
      name: 'Build The Earth',
      logo: 'https://images.pexels.com/photos/586030/pexels-photo-586030.jpeg?auto=compress&cs=tinysrgb&w=200&h=100',
      category: 'Community'
    },
    {
      name: 'Tech United',
      logo: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=200&h=100',
      category: 'Community'
    },
    {
      name: 'The Good Old Motorcycle Parts Company',
      logo: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=200&h=100',
      category: 'Manufacturing'
    },
    {
      name: 'New England Air Conditioning',
      logo: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=200&h=100',
      category: 'Small Business'
    },
    {
      name: 'Kearfott',
      logo: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=200&h=100',
      category: 'Manufacturing'
    },
    {
      name: 'Tir 1 Education',
      logo: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=200&h=100',
      category: 'Startup'
    },
    {
      name: 'No Decks Just Dough',
      logo: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=200&h=100',
      category: 'Community'
    },
    
  ];

  return (
    <section className="py-16 bg-slate-900/30 border-y border-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-xl sm:text-2xl font-semibold text-slate-300 mb-2">Trusted By</h3>
          <p className="text-slate-400 text-sm sm:text-base px-4">Leading institutions and organizations worldwide</p>
        </div>

        <div className="relative h-32 mb-8 hidden sm:block">
          <div className="absolute inset-0 flex items-center">
            <div className="animate-slide-right flex items-center gap-16 whitespace-nowrap" style={{ width: 'max-content' }}>
              {/* Multiple sets for continuous visibility */}
              {trustedCompanies.map((company, index) => (
                <div
                  key={`first-${index}`}
                  className="group flex flex-col items-center text-center flex-shrink-0"
                >
                  <div className="w-24 h-16 bg-slate-800/50 rounded-xl border border-slate-700 flex items-center justify-center mb-3 group-hover:border-sky-400/50 transition-all duration-300 overflow-hidden">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300 filter grayscale group-hover:grayscale-0"
                    />
                  </div>
                  <div className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors duration-200">
                    {company.name}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    {company.category}
                  </div>
                </div>
              ))}
              
              {/* Second set for seamless loop */}
              {trustedCompanies.map((company, index) => (
                <div
                  key={`second-${index}`}
                  className="group flex flex-col items-center text-center flex-shrink-0"
                >
                  <div className="w-24 h-16 bg-slate-800/50 rounded-xl border border-slate-700 flex items-center justify-center mb-3 group-hover:border-sky-400/50 transition-all duration-300 overflow-hidden">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300 filter grayscale group-hover:grayscale-0"
                    />
                  </div>
                  <div className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors duration-200">
                    {company.name}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    {company.category}
                  </div>
                </div>
              ))}
              
              {/* Third set for continuous visibility */}
              {trustedCompanies.map((company, index) => (
                <div
                  key={`third-${index}`}
                  className="group flex flex-col items-center text-center flex-shrink-0"
                >
                  <div className="w-24 h-16 bg-slate-800/50 rounded-xl border border-slate-700 flex items-center justify-center mb-3 group-hover:border-sky-400/50 transition-all duration-300 overflow-hidden">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300 filter grayscale group-hover:grayscale-0"
                    />
                  </div>
                  <div className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors duration-200">
                    {company.name}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    {company.category}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Static grid for mobile fallback */}
        <div className="sm:hidden grid grid-cols-2 gap-4 items-center mb-8">
          {trustedCompanies.slice(0, 8).map((company, index) => (
            <div
              key={`mobile-${index}`}
              className="group flex flex-col items-center text-center"
            >
              <div className="w-20 h-12 bg-slate-800/50 rounded-lg border border-slate-700 flex items-center justify-center mb-2 group-hover:border-sky-400/50 transition-all duration-300 overflow-hidden">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300 filter grayscale group-hover:grayscale-0"
                />
              </div>
              <div className="text-xs font-semibold text-slate-300 group-hover:text-white transition-colors duration-200">
                {company.name}
              </div>
              <div className="text-xs text-slate-500 mt-1 hidden">
                {company.category}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-center">
            <div>
              <div className="text-xl sm:text-2xl font-bold text-sky-400 mb-1">10+</div>
              <div className="text-slate-400 text-xs sm:text-sm">Global Partners</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-purple-400 mb-1">5+</div>
              <div className="text-slate-400 text-xs sm:text-sm">Countries</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-orange-400 mb-1">100%</div>
              <div className="text-slate-400 text-xs sm:text-sm">Quality</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-green-400 mb-1">24/7</div>
              <div className="text-slate-400 text-xs sm:text-sm">Global Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;