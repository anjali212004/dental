import './App.css';
import Navbar from "./components/Navbar";
import HeroSection from './components/HeroSection';
import Counter from './components/counter';
import WebsiteSlider from './components/WebsiteSlider';
import CustomCard from './components/CustomCard';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Footer from './components/footer';
import Email from './components/email';
import TeamCarousel from './components/TeamSlider';
import Blog from './components/Blogs';
import Services from './components/Services';
import ContactInfoCards from './components/ContactInfoCards';
import FAQ from './components/FAQ';
import Team from './components/Team';


import {  HashRouter, Route, Routes } from "react-router-dom";
import ContactServices from './components/ContactServices';
import ResponsiveMap from './components/ResponiveMap';
import ResourcePage from './components/ResourcePage';
import DentalMarketingResources from './components/DentalMarketingResources';
import AboutHeroSection from './components/AboutHeroSection';
import StrategiesSection from './components/StrategiesSection';
import ResponsiveComponent from './components/ResponsiveComponent';
import DentalWebsiteComponent from './components/DentalWebsiteComponent';
import SuccessStoriesPage from './components/SuccessStoriesPage';
import SuccessStoriesComponent from './components/SuccessStoriesComponent';
import DentalServiceSection from './components/DentalServiceSection';
import CustomDesignHome from './components/CustomDesignHome';
import CustomDesignWebsite from './components/CustomDesignWebsite';
import ReviewCard from './components/ReviewCard';
import SemiCustomDesignHome from './components/SemiCustomDesignHome';
import SemiCustomDesignServices from './components/SemiCustomDesignServices';
import IntegrationHome from './components/integrationHome';
import PreDesignHome from './components/Pre-DesignHome';
import PreDesignWebsite from './components/PreDesignWebsite';
import PreDesignServices from './components/PreDesignServices';
import BlogPage from './components/BlogPage';
import PatientRoadmap from './components/PatientRoadmap';
import MarketingSection from './components/MarketingSection';
import Process from './components/Process';
import LogoSlider from './components/logoslider';
import ContentSection from './components/ContentSection';
import dentalWebsite from './components/services/dentalWebsite';
import DentalWebsiteContent from './components/services/dentalWebsiteContent';
import DentalWebsiteServices from './components/services/DentalWebsiteServices';
import DentalWebsiteHome from './components/services/DentalWebsiteHome';
import DentalGallery from './components/services/DentalGallery';
import DentalWebsiteQuality from './components/services/DentalWebsiteQuality';
import DigitalMarketingContent from './components/services/DigitalMarketingContent';
import DigitalMarketingSeoContent from './components/services/DigitalMarketingSeoContent';
import DigitalMarketingServices from './components/services/DigitalMarketingServices';
import DigitalMarketingHome from './components/services/DigitalMarketingHome';
import DigitalMarketingSeo from './components/services/DigitalMarketingSeo';
import VideographyHome from './components/services/VideographyHome';
import CustomPhotography from './components/services/CustomPhotography';
import TraditionalMarketingHome from './components/services/TraditionalMarketingHome';
import SocialMediaContent from './components/services/SocialMediaContent';
import SocialMediaHome from './components/services/SocialMediaHome';
import SocialMediaMarketing from './components/services/SocialMediaMarketing';
import SocialMediaGallery from './components/services/SocialMediaGallery';
import SocialMediaValue from './components/services/SocialMediaValue';
import TraditionalMarketingContent from './components/services/TraditionalMarketingContent';
import TraditionalMarketingServices from './components/services/TraditionalMarketingServices';
import DentalMarketingHome from './components/services/DentalMarketingHome';
import TraditionalRadioAdvertisement from './components/services/TraditionalRadioAdvertisement';
import DentalMarketingContent from './components/services/DentalMarketingContent';
import DentalMarketingServices from './components/services/DentalMarketingServices';
import VideographyContent from './components/services/VideographyContent';
import VideographyGallery from './components/services/VideographyGallery';
import VideographySlider from './components/services/VideographySlider';
import ProfessionalWebsite from './components/blogs/ProfessionalWebsite';
import EffectiveClinicWebsite from './components/blogs/EffectiveClinicWebsite';
import AttractMorePatients from './components/blogs/AttractMorePatients';
import SeoStrategies from './components/blogs/SeoStrategies';
import EngagingBlogContent from './components/blogs/EngagingBlogContent';
import MobileFriendly from './components/blogs/MobileFriendly';
import PatientReviews from './components/blogs/PatientReviews';
import DentalWebsiteReviews from './components/blogs/DentalWebsiteReviews';
import HighlightDentalServices from './components/blogs/HighlightDentalServices';
import DentalClinicSecurity from './components/blogs/DentalClinicSecurity';
import BuildingTrust from './components/blogs/BuildingTrust';
import WebsiteEngagement from './components/blogs/WebsiteEngagement';
import TermsConditions from './components/TermsConditions';
import PrivacyPolicy from './components/PrivacyPolicy';
function App() {
  return (
    <HashRouter>
    
      <div className="App">
        {/* Navbar will be displayed on all pages */}
        <Navbar />
        {/* Define routes for each page */}
        <Routes>
          {/* Home Route: renders HeroSection, Counter, WebsiteSlider, CustomCard, About, Services, ContactUs, Footer */}
          <Route path="/" element={
            <>
              <HeroSection />
              <Counter />
              <MarketingSection
                btnText="Let's Talk"
              />  
              <WebsiteSlider />
              <CustomCard />
              <Services />
              <Process/>
              <About />
              
              {/* <ContentSection/> */}
              <Blog />
              <LogoSlider />
              <PatientRoadmap />
              
            </>
          } />

          

          {/* About Page: renders About component */}
          <Route path="/ourStory" element={
            <>
              <AboutHeroSection />
              <StrategiesSection />
              <About />
              <Team />
              <ReviewCard />
            </>
          } />

          {/* Services Page: renders Services component */}
          <Route path="/services" element={
            <>
              <HeroSection />  {/* You can have specific components here for Services */}
              <Services />
              <dentalWebsite />
            </>
          } />
           <Route path="/services/dentalWebsites" element={
            <>
            <DentalWebsiteHome />

            <DentalWebsiteContent />
            <DentalWebsiteQuality/>
            <DentalWebsiteServices/>
            <DentalGallery />
            <ContactUs/>
            
            </>
          } />
        <Route path="/services/digitalMarketing" element={
            <>
            <DigitalMarketingHome/>
            <DigitalMarketingContent/>
            <DigitalMarketingSeo/>
            <DigitalMarketingSeoContent/>
            <DigitalMarketingServices/>
            <ContactUs/>
            </>
          } />
        <Route path="/services/dentalMarketing" element={
            <>
            <DentalMarketingHome/>
            <DentalMarketingContent/>
            <DentalMarketingServices/>
            <DentalMarketingResources/>
            </>
          } />
        <Route path="/services/socialMedia" element={
            <>
            <SocialMediaHome/>
            <SocialMediaContent/>
            <SocialMediaMarketing/>
            <SocialMediaGallery/>
            <SocialMediaValue/>
            
            </>
          } />
        <Route path="/services/traditionalMarketing" element={
            <>
            <TraditionalMarketingHome/>
            <TraditionalMarketingContent/>
            <TraditionalMarketingServices/>
            <TraditionalRadioAdvertisement/>
            </>
          } />
        <Route path="/services/videography" element={
            <>
            <VideographyHome/>
            <CustomPhotography/>
            <VideographyContent/>
            {/* <VideographySlider/> */}
            <VideographyGallery/>

            </>
          } />
          <Route path="/resources" element={
            <>
              <DentalMarketingResources />
              <ResourcePage />

            </>
          } />

          <Route path="/ourWork" element={
            <>
            </>
          } />

          <Route path="/gallery" element={<>
            <DentalWebsiteComponent />
            <ResponsiveComponent />
          </>} />

          {/* Success Stories Page */}
          <Route path="/success-stories" element={<>
            <SuccessStoriesPage />
            <SuccessStoriesComponent />
          </>} />

          <Route path="/term-conditions" element={<>
              <TermsConditions/> 
          </>} />

          <Route path="/privacy-policy" element={<>
              <PrivacyPolicy/> 
          </>} />

          <Route path="/custom-design" element={<>
            <CustomDesignHome />
            <CustomCard />
            <CustomDesignWebsite />
            <h1 className="heading">
                <span className="circle title">
                    Our Trackable <span className="subTitle">Records</span>
                </span>
            </h1>
            <Counter />
            <FAQ />
            <ReviewCard />
            <DentalServiceSection />

          </>} />

          <Route path="/semi-custom-design" element={<>
            <SemiCustomDesignHome />
            <SemiCustomDesignServices />
            <CustomCard />
            <ReviewCard />
            <FAQ />
            <DentalServiceSection />

          </>} />

          <Route path="/pre-design" element={<>
            <PreDesignHome />
            <PreDesignServices />
            <PreDesignWebsite />
            <ReviewCard />
            <FAQ />

          </>} />

          <Route path="/integration" element={<>
            <IntegrationHome />
          </>} />

          {/* Contact Page: renders ContactUs and ContactInfoCards components */}
          <Route path="/contact" element={
            <>
              <ContactInfoCards />
              <FAQ />
              <ContactServices />



            </>
          } />

          {/* Additional routes for Blog or other pages */}
          <Route path="/blog" element={<Blog />} />

          {/* You can add more routes for other pages like Email, etc. */}
       

        {/* These components will be displayed on all pages */}


        {/* <Route path="/" element={<NewsBlogs />} /> */}
        <Route path="/blogs/professional-website" element={<ProfessionalWebsite />} />
        <Route path="/blogs/effective-clinic-website" element={<EffectiveClinicWebsite />} />
        <Route path="/blogs/attract-more-patients" element={<AttractMorePatients />} />
        <Route path="/blogs/seo-strategies" element={<SeoStrategies />} />
        <Route path="/blogs/engaging-blog-content" element={<EngagingBlogContent />} />
        <Route path="/blogs/mobile-friendly" element={<MobileFriendly/>} />
        <Route path="/blogs/patient-reviews" element={<PatientReviews />} />
        <Route path="/blogs/visuals-in-dental-website" element={<DentalWebsiteReviews/>}/>
        <Route path="/blogs/highlight-dental-services" element={<HighlightDentalServices/>}/>
        <Route path="/blogs/dental-clinics" element={<DentalClinicSecurity/>}/>
        <Route path="/blogs/building-trust" element ={<BuildingTrust/>}/>
        <Route path="/blogs/website-engagement" element={<WebsiteEngagement/>}/>
        </Routes>
        <Email />
        <Footer />
      </div>
    
    </HashRouter>
  );
}

export default App;
