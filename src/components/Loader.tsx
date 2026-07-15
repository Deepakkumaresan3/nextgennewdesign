import React, { useEffect, useState } from 'react';
import logo from '../assets/nextGensolarLogo.jpeg';
import './Loader.css';

interface LoaderProps {
  onFinish: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onFinish }) => {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const exitTimer = setTimeout(() => setExiting(true), 1600);
    const removeTimer = setTimeout(() => {
      document.body.style.overflow = previousOverflow;
      onFinish();
    }, 2250);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
      document.body.style.overflow = previousOverflow;
    };
  }, [onFinish]);

  return (
    <div className={`loader-overlay ${exiting ? 'exiting' : ''}`}>
      <div className="loader-center">
        <div className="loader-rings">
          <svg className="loader-ring ring-outer" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="92" />
          </svg>
          <svg className="loader-ring ring-inner" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="74" />
          </svg>
          <div className="loader-logo-icon">
            <img src={logo} alt="NextGen Solar Solutions logo" className="loader-logo-image" />
          </div>
        </div>

        <div className="loader-wordmark">
          Next<span className="brand-accent">G</span>en Solar
        </div>
        <div className="loader-tagline">Powering a Sustainable Future</div>
      </div>
    </div>
  );
};

export default Loader;
