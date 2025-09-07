const TrustedBy = () => {
  const trustedCompanies = [
    {
      name: 'Doosan',
      logo: 'https://companieslogo.com/img/orig/000150.KS-dd1c5cea.png',
      category: 'Industry'
    },
    {
      name: 'Kaswin',
      logo: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fkomarine-assets.s3.ap-northeast-2.amazonaws.com%2Fmedia%2Fcompany-logo%2Fkaswin-12643_colkvs-FQbur3d.jpg&f=1&nofb=1&ipt=f7b729ada9681f379aa988aa53367ca69f2a5b64282fb3be87416e6a81a9b4f4',
      category: 'Industry'
    },
    {
      name: 'DN Solutions',
      logo: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.millscnc.co.uk%2Fwp-content%2Fuploads%2F2022%2F07%2FDN-SOL-for-HP.jpg&f=1&nofb=1&ipt=cc4c9797ce475a8dfd8deaacbd8709d1047e85323039362b2fb0c395e5fb125e',
      category: 'Industry'
    },
    {
      name: 'KIMM',
      logo: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmasterly-project.eu%2Fwp-content%2Fuploads%2F2023%2F02%2FKIMM.png&f=1&nofb=1&ipt=b77fbcfb98820e7edcde13f74f5a0129ba12096c33153182758d69a7cebfa55b',
      category: 'Institution'
    },
    {
      name: 'AJOU University',
      logo: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.edarabia.com%2Fwp-content%2Fuploads%2F2018%2F03%2Fajou-university-suwon-south-korea.png&f=1&nofb=1&ipt=2748df9f33e1a6452579941fcc33672786fd269a923d695b699b9b6dc511fa02',
      category: 'Institution'
    },
    {
      name: 'Molloy University',
      logo: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D100063631520888&f=1&nofb=1&ipt=985da6d5f6d542901a1c43a99c39928c0330e68386e9417e653d53b45b078271',
      category: 'Institution'
    },
    {
      name: 'Bira',
      logo: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200&h=100',
      category: 'Startup'
    },
    {
      name: 'MIPSLab',
      logo: 'https://media.licdn.com/dms/image/v2/D560BAQH0_mZ137M_sA/company-logo_100_100/B56ZgOY4XFHUAY-/0/1752588060508/mipslab_logo?e=1759968000&v=beta&t=OOxh2zIXgfe6zSdrJupzpoF8YjGMUf_fZ5xm2MI-CIw',
      category: 'Startup'
    },
    {
      name: 'EStop',
      logo: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.railpassengers.org%2Fsite%2Fassets%2Ffiles%2F3214%2Fnjt_busstop.jpg&f=1&nofb=1&ipt=a33cfca086a38fbe146c302866393124fa244b92df783099151a112c9040f77b',
      category: 'Startup'
    },
    {
      name: 'Andromeda Hosting',
      logo: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.freepnglogos.com%2Fuploads%2Fserver-png%2Fserver-icon-download-icons-17.png&f=1&nofb=1&ipt=1b9f27b39715b88f8cfd6329f47be5fd57f013a1fd793bd8cff905d0e3cc93f5',
      category: 'Infrastructure'
    },
    {
      name: 'Stevens Institute of Technology',
      logo: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.forbesimg.com%2Fmedia%2Flists%2Fcolleges%2Fstevens-institute-of-technology_416x416.jpg&f=1&nofb=1&ipt=5e2477ce35af7c5dbdcf1b3fc6ffe650979789df32a414e6b77ad7111be4c263',
      category: 'Institution'
    },
    {
      name: 'Build The Earth',
      logo: 'https://buildtheearth.net/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.65c70928.gif&w=48&q=75',
      category: 'Community'
    },
    {
      name: 'Tech United',
      logo: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthf.bing.com%2Fth%2Fid%2FOIP.5OVWZHrwqH9CqLZNZA1eXgHaHa%3Fcb%3Dthfc1%26pid%3DApi&f=1&ipt=a8d8ace1c770600c3d5bbf73dcab7f81897d0fec02dbe5d2018a922620b9aea8',
      category: 'Community'
    },
    {
      name: 'The Good Old Motorcycle Parts Company',
      logo: 'https://www.thegoodoldmotorcyclepartscompany.com/img/tgompc-logo.jpg',
      category: 'Manufacturing'
    },
    {
      name: 'New England Air Conditioning',
      logo: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.neit.edu%2Fwp-content%2Fuploads%2F2021%2F06%2FHow-to-be-HVAC-Technician-scaled.jpg&f=1&nofb=1&ipt=3b2ad000be6be79fde041ff8ba41b0833bab0b81c173d5f572a7f16e557493f7',
      category: 'Small Business'
    },
    {
      name: 'Kearfott',
      logo: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Foid.oceannews.com%2Fmedia%2Fcom_jbusinessdirectory%2Fpictures%2Fcompanies%2F413%2FKearfott_1683217504.jpg&f=1&nofb=1&ipt=c1e0d379b8b3ddf2c28a76761fe00aafa221af8083b9601b5f727e3d536a7b37',
      category: 'Manufacturing'
    },
    {
      name: 'Tir 1 Education',
      logo: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.oxfordlearning.com%2Fwp-content%2Fuploads%2F2020%2F04%2FGettyImages-1035393946-scaled.jpg&f=1&nofb=1&ipt=cf5bec600e3502ab95232f96cc0f7ea5d5dacf51053568786757a600a88d6401',
      category: 'Startup'
    },
    {
      name: 'No Decks Just Dough',
      logo: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.emojiterra.com%2Fgoogle%2Fnoto-emoji%2Funicode-15%2Fcolor%2F1024px%2F1f355.png&f=1&nofb=1&ipt=3b8fa36265a8e1b9c1b26d02e8ed1ab9af2838dbade563543a173bc6122b5f43',
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
                  className="group flex flex-col items-center text-center flex-grow-0"
                >
                  <div className="w-24 h-16 bg-slate-800/50 rounded-xl border border-slate-700 flex items-center justify-center mb-3 group-hover:border-sky-400/50 transition-all duration-300 overflow-hidden">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300 filter grayscale group-hover:grayscale-0"
                    />
                  </div>
                  <div className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors duration-200 break-all">
                    {company.name.split('',20).reduce((o,c)=> o.length === 19 ? `${o}${c}...` : `${o}${c}` , '')}
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