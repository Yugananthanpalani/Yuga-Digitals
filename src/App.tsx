import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DigitalMarketing from './components/services/DigitalMarketing';
import SocialMediaManagement from './components/services/SocialMediaManagement';
import BrandingLogoDesign from './components/services/BrandingLogoDesign';
import BannerCreativeDesign from './components/services/BannerCreativeDesign';
import SEOPerformanceMarketing from './components/services/SEOPerformanceMarketing';
import ContentCreation from './components/services/ContentCreation';
import WebsiteDesignDevelopment from './components/services/WebsiteDesignDevelopment';

function App() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  if (selectedService) {
    const handleBack = () => setSelectedService(null);

    return (
      <div className="min-h-screen bg-black">
        <Header />
        {selectedService === 'digital-marketing' && <DigitalMarketing onBack={handleBack} />}
        {selectedService === 'social-media' && <SocialMediaManagement onBack={handleBack} />}
        {selectedService === 'branding-logo' && <BrandingLogoDesign onBack={handleBack} />}
        {selectedService === 'banner-creative' && <BannerCreativeDesign onBack={handleBack} />}
        {selectedService === 'seo-performance' && <SEOPerformanceMarketing onBack={handleBack} />}
        {selectedService === 'content-creation' && <ContentCreation onBack={handleBack} />}
        {selectedService === 'website-design' && <WebsiteDesignDevelopment onBack={handleBack} />}
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="services">
        <Services onSelectService={setSelectedService} />
      </div>
      <div id="why-choose-us">
        <WhyChooseUs />
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="process">
        <Process />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
