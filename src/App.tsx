import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import About from './components/About';
import Process from './components/Process';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import CookiePolicy from './components/CookiePolicy';
import CaseStudies from './components/CaseStudies';
import QuantumComputing from './components/QuantumComputing';
import Biotechnology from './components/Biotechnology';
import EnergySystems from './components/EnergySystems';
import ClimateSolutions from './components/ClimateSolutions';
import MaterialsScience from './components/MaterialsScience';
import AboutMPD from './components/AboutMPD';
import OurTeam from './components/OurTeam';
import InnovationLabs from './components/InnovationLabs';
import Careers from './components/Careers';
import NewsPress from './components/NewsPress';
import ResearchPapers from './components/ResearchPapers';
import WhitePapers from './components/WhitePapers';
import InnovationBlog from './components/InnovationBlog';
import TechnicalDocs from './components/TechnicalDocs';
import ContactUs from './components/ContactUs';
import Partnerships from './components/Partnerships';
import InvestorRelations from './components/InvestorRelations';
import MediaKit from './components/MediaKit';
import Support from './components/Support';
import QuantumNetProtocol from './components/projects/QuantumNetProtocol';
import BioSynthEngine from './components/projects/BioSynthEngine';
import FusionCoreReactor from './components/projects/FusionCoreReactor';
import NanoHealMaterials from './components/projects/NanoHealMaterials';

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
              <Portfolio />
              <Team />
              <Contact />
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