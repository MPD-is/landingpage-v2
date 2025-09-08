import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

//Shared
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

//Main
import Hero from 'src/features/Hero';
import TrustedBy from 'src/features/TrustedBy';
import About from 'src/features/About';
import Process from 'src/features/Process';
import Services from 'src/features/Services';
import Portfolio from 'src/features/Portfolio';
import Team from 'src/features/Team';
import Contact from 'src/features/Contact';

//Pages
//  Innovation
import QuantumComputing from 'src/pages/innovation/QuantumComputing';
import Biotechnology from 'src/pages/innovation/Biotechnology';
import EnergySystems from 'src/pages/innovation/EnergySystems';
import ClimateSolutions from 'src/pages/innovation/ClimateSolutions';
import MaterialsScience from 'src/pages/innovation/MaterialsScience';
//  Company
import AboutMPD from 'src/pages/company/AboutMPD';
import OurTeam from 'src/pages/company/OurTeam';
import InnovationLabs from 'src/pages/company/InnovationLabs';
import Careers from 'src/pages/company/Careers';
import NewsPress from 'src/pages/company/NewsPress';
//  Resources
import ResearchPapers from 'src/pages/resources/ResearchPapers';
import CaseStudies from 'src/pages/resources/CaseStudies';
import WhitePapers from 'src/pages/resources/WhitePapers';
import InnovationBlog from 'src/pages/resources/InnovationBlog';
import TechnicalDocs from 'src/pages/resources/TechnicalDocs';
//  Connect 
import ContactUs from 'src/pages/connect/ContactUs';
import Partnerships from 'src/pages/connect/Partnerships';
import InvestorRelations from 'src/pages/connect/InvestorRelations';
import MediaKit from 'src/pages/connect/MediaKit';
import Support from 'src/pages/connect/Support';   

//Projects
import QuantumNetProtocol from 'src/components/projects/QuantumNetProtocol';
import BioSynthEngine from 'src/components/projects/BioSynthEngine';
import FusionCoreReactor from 'src/components/projects/FusionCoreReactor';
import NanoHealMaterials from 'src/components/projects/NanoHealMaterials';

//Footer
import PrivacyPolicy from 'src/components/footer/PrivacyPolicy';
import TermsOfService from 'src/components/footer/TermsOfService';
import CookiePolicy from 'src/components/footer/CookiePolicy';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Hero />
              <TrustedBy />
              <About />
              <Process />
              <Services />
              {/* <Portfolio />*/}
              <Team />
              <Contact />
              <Toaster position="bottom-left" />
              <Footer />
            </>
          } />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/quantum-computing" element={<QuantumComputing />} />
          <Route path="/biotechnology" element={<Biotechnology />} />
          <Route path="/energy-systems" element={<EnergySystems />} />
          <Route path="/climate-solutions" element={<ClimateSolutions />} />
          <Route path="/materials-science" element={<MaterialsScience />} />
          <Route path="/about-mpd" element={<AboutMPD />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/innovation-labs" element={<InnovationLabs />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/news-press" element={<NewsPress />} />
          <Route path="/research-papers" element={<ResearchPapers />} />
          <Route path="/white-papers" element={<WhitePapers />} />
          <Route path="/innovation-blog" element={<InnovationBlog />} />
          <Route path="/technical-docs" element={<TechnicalDocs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/partnerships" element={<Partnerships />} />
          <Route path="/investor-relations" element={<InvestorRelations />} />
          <Route path="/media-kit" element={<MediaKit />} />
          <Route path="/support" element={<Support />} />
          <Route path="/projects/quantum-net-protocol" element={<QuantumNetProtocol />} />
          <Route path="/projects/biosynth-engine" element={<BioSynthEngine />} />
          <Route path="/projects/fusion-core-reactor" element={<FusionCoreReactor />} />
          <Route path="/projects/nanoheal-materials" element={<NanoHealMaterials />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;