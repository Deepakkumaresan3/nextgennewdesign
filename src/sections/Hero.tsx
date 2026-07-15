import React from 'react';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import BoltRoundedIcon from '@mui/icons-material/BoltRounded';
import SavingsRoundedIcon from '@mui/icons-material/SavingsRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import './Hero.css';

const highlights = ['Free Consultation', 'Customized Solutions', 'No Obligation'];

const Hero: React.FC = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <span className="hero-badge">
          <WbSunnyRoundedIcon fontSize="small" />
          Tamil Nadu&apos;s Trusted Solar Partner
        </span>

        <h1>
          Clean Energy, <span className="hero-highlight">Engineered</span> for Your Roof
        </h1>
        <p>
          NextGen Solar Solutions designs, installs, and maintains high-performance
          solar systems for homes, businesses, and industry — delivering reliable
          clean energy with a simple, stress-free experience.
        </p>

        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary">
            <BoltRoundedIcon fontSize="small" />
            Book a Consultation
          </a>
          <a href="#services" className="btn btn-secondary">
            Explore Services
          </a>
        </div>

        <div className="hero-highlights">
          {highlights.map((h) => (
            <span className="hero-highlight-chip" key={h}>
              <CheckCircleRoundedIcon fontSize="small" />
              {h}
            </span>
          ))}
        </div>

      </div>

      <div className="hero-side" aria-hidden="true">
        <div className="hero-orb">
          <SavingsRoundedIcon fontSize="inherit" />
        </div>
      </div>

      <a href="#services" className="scroll-indicator" aria-label="Scroll to services">
        <KeyboardArrowDownRoundedIcon />
      </a>
    </section>
  );
};

export default Hero;
