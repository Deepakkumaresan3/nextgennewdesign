import React from 'react';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import RoofingRoundedIcon from '@mui/icons-material/RoofingRounded';
import TerrainRoundedIcon from '@mui/icons-material/TerrainRounded';
import WaterDropRoundedIcon from '@mui/icons-material/WaterDropRounded';
import WbTwilightRoundedIcon from '@mui/icons-material/WbTwilightRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ApartmentRoundedIcon from '@mui/icons-material/ApartmentRounded';
import FactoryRoundedIcon from '@mui/icons-material/FactoryRounded';
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';
import './Footer.css';

const footerServices = [
  { icon: <RoofingRoundedIcon fontSize="small" />, label: 'Solar Rooftop' },
  { icon: <TerrainRoundedIcon fontSize="small" />, label: 'Solar Ground Mount' },
  { icon: <WaterDropRoundedIcon fontSize="small" />, label: 'Solar Water Pumps' },
  { icon: <WbTwilightRoundedIcon fontSize="small" />, label: 'Solar Street Light' },
];

const footerProjects = [
  { icon: <HomeRoundedIcon fontSize="small" />, label: 'Residential' },
  { icon: <ApartmentRoundedIcon fontSize="small" />, label: 'Commercial' },
  { icon: <FactoryRoundedIcon fontSize="small" />, label: 'Industrial' },
  { icon: <AccountBalanceRoundedIcon fontSize="small" />, label: 'Institutional' },
];

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <span className="logo-icon">
                <WbSunnyRoundedIcon fontSize="small" />
              </span>
              <span>Next<strong>Gen</strong> Solar</span>
            </a>
            <p>Leading the way in sustainable solar energy solutions for a brighter future.</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul className="footer-icon-list">
              {footerServices.map((s) => (
                <li key={s.label}>
                  {s.icon}
                  <span>{s.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4>Projects</h4>
            <ul className="footer-icon-list">
              {footerProjects.map((p) => (
                <li key={p.label}>
                  {p.icon}
                  <span>{p.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <div className="footer-contact-item">
              <LocationOnRoundedIcon fontSize="small" />
              <span>Kumbakonam, Tamil Nadu</span>
            </div>
            <div className="footer-contact-item">
              <LocalPhoneRoundedIcon fontSize="small" />
              <span>+91 90253 28583</span>
            </div>
            <div className="footer-contact-item">
              <EmailRoundedIcon fontSize="small" />
              <span>nextgen.kmu24@gmail.com</span>
            </div>
          </div>

          <div className="footer-section">
            <h4>Business Hours</h4>
            <p>Mon – Fri: 9:00 AM – 6:00 PM</p>
            <p>Sat: 9:00 AM – 2:00 PM</p>
            <p>Sun: Closed</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {year} NextGen Solar Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
