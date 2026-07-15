import React from 'react';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ApartmentRoundedIcon from '@mui/icons-material/ApartmentRounded';
import FactoryRoundedIcon from '@mui/icons-material/FactoryRounded';
import BuildRoundedIcon from '@mui/icons-material/BuildRounded';
import LightbulbRoundedIcon from '@mui/icons-material/LightbulbRounded';
import BatteryChargingFullRoundedIcon from '@mui/icons-material/BatteryChargingFullRounded';
import RoofingRoundedIcon from '@mui/icons-material/RoofingRounded';
import TerrainRoundedIcon from '@mui/icons-material/TerrainRounded';
import WaterDropRoundedIcon from '@mui/icons-material/WaterDropRounded';
import WbTwilightRoundedIcon from '@mui/icons-material/WbTwilightRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import EngineeringRoundedIcon from '@mui/icons-material/EngineeringRounded';
import DesignServicesRoundedIcon from '@mui/icons-material/DesignServicesRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import PriceCheckRoundedIcon from '@mui/icons-material/PriceCheckRounded';
import Carousel from '../components/Carousel';
import whyUsImg from '../assets/why-choose-us.jpg';
import './Services.css';

const accents = ['indigo', 'cyan', 'violet', 'amber'] as const;

const services = [
  {
    icon: <HomeRoundedIcon />,
    title: 'Residential Solar',
    description: 'Custom rooftop systems designed for maximum savings on your home energy bills.',
    features: ['Site Assessment', 'System Design', 'Professional Installation', 'Ongoing Maintenance'],
  },
  {
    icon: <ApartmentRoundedIcon />,
    title: 'Commercial Solar',
    description: 'Lower operating costs and showcase sustainability with tailored business installs.',
    features: ['ROI Analysis', 'Custom Design', 'Grid Integration', 'Performance Monitoring'],
  },
  {
    icon: <FactoryRoundedIcon />,
    title: 'Industrial Solar',
    description: 'Large-scale, high-performance systems built for demanding industrial loads.',
    features: ['Load Analysis', 'Custom Engineering', 'Grid Integration', '24/7 Monitoring'],
  },
  {
    icon: <BuildRoundedIcon />,
    title: 'Maintenance & Repair',
    description: 'Routine inspection, cleaning, and repairs that keep your system at peak output.',
    features: ['Regular Inspection', 'Panel Cleaning', 'Fast Repairs', 'Performance Optimization'],
  },
  {
    icon: <BatteryChargingFullRoundedIcon />,
    title: 'Battery Storage',
    description: 'Smart backup power for outages and peak-demand hours, fully integrated.',
    features: ['Battery Installation', 'System Integration', 'Backup Power', 'Smart Energy Management'],
  },
  {
    icon: <LightbulbRoundedIcon />,
    title: 'Energy Consulting',
    description: 'Independent guidance on system sizing, incentives, and ROI before you commit.',
    features: ['Energy Audit', 'Cost-Benefit Analysis', 'System Recommendations', 'Incentives Guidance'],
  },
  {
    icon: <RoofingRoundedIcon />,
    title: 'Solar Rooftop',
    description: 'Residential and commercial rooftop solar solutions, built to fit your roof and load.',
    features: ['On Grid', 'Off Grid', 'Hybrid'],
  },
  {
    icon: <TerrainRoundedIcon />,
    title: 'Solar Ground Mount',
    description: 'Large-scale ground-mounted solar installations for open land and industrial sites.',
    features: ['On Grid', 'Off Grid', 'Hybrid'],
  },
  {
    icon: <WaterDropRoundedIcon />,
    title: 'Solar Water Pumps',
    description: 'Efficient solar-powered water pumping solutions for agriculture and irrigation.',
    features: ['Low Maintenance', 'High Efficiency', 'Remote Monitoring'],
  },
  {
    icon: <WbTwilightRoundedIcon />,
    title: 'Solar Street Light',
    description: 'Smart and sustainable solar street lighting for roads, campuses, and public spaces.',
    features: ['Automatic Dusk-to-Dawn', 'Weatherproof', 'Long-Life LEDs'],
  },
];

const whyChooseUsBenefits = [
  {
    icon: <EngineeringRoundedIcon />,
    title: 'Expertise & Experience',
    description: 'With years of industry experience, our team delivers exceptional solar solutions.',
  },
  {
    icon: <DesignServicesRoundedIcon />,
    title: 'Quality Materials',
    description: 'We use only the highest quality solar panels and components for lasting performance.',
  },
  {
    icon: <SupportAgentRoundedIcon />,
    title: 'Customer Satisfaction',
    description: 'Our relationship continues long after installation with dedicated customer support.',
  },
];

const whyChooseUs = [
  {
    icon: <EngineeringRoundedIcon />,
    title: 'Expert Installation',
    description: 'Certified technicians install every system to code, backed by industry-leading warranties.',
  },
  {
    icon: <DesignServicesRoundedIcon />,
    title: 'Customized Solutions',
    description: 'Every system is designed around your roof, usage, and budget — never one-size-fits-all.',
  },
  {
    icon: <SupportAgentRoundedIcon />,
    title: '24/7 Support',
    description: 'Round-the-clock customer support and maintenance response for total peace of mind.',
  },
  {
    icon: <PriceCheckRoundedIcon />,
    title: 'Competitive Pricing',
    description: 'Transparent quotes with no hidden fees, plus flexible financing options.',
  },
];

const Services: React.FC = () => {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">What We Do</span>
          <h2 className="section-title">Solar Services Built Around You</h2>
          <p className="section-description">
            End-to-end solar solutions — from first assessment to lifelong maintenance.
          </p>
        </div>

        <Carousel ariaLabel="Our services" className="services-grid">
          {services.map((s, i) => (
            <div className={`service-card accent-${accents[i % accents.length]}`} key={s.title}>
              <span className="service-index">{String(i + 1).padStart(2, '0')}</span>
              <div className="service-icon">
                <div className="service-icon-inner">{s.icon}</div>
              </div>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
              <ul className="service-features">
                {s.features.map((f) => (
                  <li key={f}>
                    <CheckRoundedIcon fontSize="small" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Carousel>

        <div className="why-us">
          <div className="section-header why-us-header">
            <span className="eyebrow">Why Choose Us</span>
            <h2 className="section-title">Our Commitment to Excellence</h2>
          </div>

          <div className="why-us-photo-block">
            <div className="why-us-photo">
              <img src={whyUsImg} alt="Why choose NextGen Solar Solutions" loading="lazy" />
            </div>
            <div className="why-us-photo-content">
              {whyChooseUsBenefits.map((b) => (
                <div className="why-us-benefit" key={b.title}>
                  <div className="why-us-benefit-icon">
                    <div className="why-us-benefit-icon-inner">{b.icon}</div>
                  </div>
                  <div>
                    <h4>{b.title}</h4>
                    <p>{b.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="why-us-grid">
            {whyChooseUs.map((w) => (
              <div className="why-us-card" key={w.title}>
                <div className="why-us-icon">
                  <div className="why-us-icon-inner">{w.icon}</div>
                </div>
                <div>
                  <h4>{w.title}</h4>
                  <p>{w.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
