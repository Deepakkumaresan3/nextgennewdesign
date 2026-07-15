import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';
import Loader from './components/Loader';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Products from './sections/Products';
import About from './sections/About';
import Faq from './sections/Faq';
import Contact from './sections/Contact';
import './App.css';

function App() {
  const [showLoader, setShowLoader] = useState(true);

  return (
    <div className="App">
      {showLoader && <Loader onFinish={() => setShowLoader(false)} />}
      <ParticlesBackground />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Products />
        <About />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
