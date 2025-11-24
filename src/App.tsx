import React from 'react';
import Home from './components/Home';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Header from './components/Header';
import WhyChooseUs from './components/WhyChooseUs';
import HeroSection from './components/Hero';
import ServiceCard from './components/Cards/ServiceCard';
import planImage from './assets/servicecards/plan.png';
import ProductHighlights from './components/Product';
import ServiceSection from './components/Services';
function App() {
  return (    
  <div>
      <Header />
       
     <div className='mt-10'>
       <HeroSection />
     </div>
     <ServiceSection/>
      <ProductHighlights />
      <WhyChooseUs />

      <Contact />
      <Footer/>
    </div>
  );
}


export default App;