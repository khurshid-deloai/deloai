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
function App() {
  return (    
  <div>
      <Header />
      <HeroSection />
      <div className='ml-20'>
        <ServiceCard
       label='Plan'
        image={planImage}
        title="Web Development"
        description="High‑quality responsive websites built with modern tools."/>
      </div>
      <ProductHighlights />
      <WhyChooseUs />
      <Contact />
      <Footer/>
    </div>
  );
}


export default App;