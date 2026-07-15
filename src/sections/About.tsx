import React from 'react';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import EnergySavingsLeafRoundedIcon from '@mui/icons-material/EnergySavingsLeafRounded';
import VerifiedUserRoundedIcon from '@mui/icons-material/VerifiedUserRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import strongImg from '../assets/strong.jpg';
import sustainabilityImg from '../assets/sustainability.jpg';
import safetyImg from '../assets/safety.jpg';
import simplifiedImg from '../assets/simplified-solar.jpg';
import './About.css';

const accents = ['indigo', 'cyan', 'violet', 'amber'] as const;

const values = [
  {
    icon: <ConstructionRoundedIcon />,
    title: 'Strong Workmanship',
    tagline: 'Excellence in Every Detail',
    description:
      'At NextGen Solar Solutions, we pride ourselves on our strong workmanship. Every project we undertake is a testament to our commitment to quality. From the initial design to the final installation, our skilled team ensures that every aspect of the job is completed with precision, durability, and craftsmanship.',
    image: strongImg,
    imagePosition: '30% 35%',
  },
  {
    icon: <EnergySavingsLeafRoundedIcon />,
    title: 'Sustainability',
    tagline: 'Committed to a Greener Future',
    description:
      "Sustainability is at the heart of everything we do. We believe in creating energy solutions that not only meet today's needs but also ensure a better tomorrow — minimizing environmental impact, conserving resources, and reducing carbon footprints.",
    image: sustainabilityImg,
    imagePosition: '50% 55%',
  },
  {
    icon: <VerifiedUserRoundedIcon />,
    title: 'Safety First',
    tagline: 'Prioritizing Safety at Every Step',
    description:
      'Safety is a top priority at NextGen Solar Solutions. We adhere to strict protocols throughout every project, with our team trained to the highest standards so every installation is performed with care and precision.',
    image: safetyImg,
    imagePosition: '50% 30%',
  },
  {
    icon: <GroupsRoundedIcon />,
    title: 'Simplified Solar',
    tagline: 'Making Solar Energy Accessible to All',
    description:
      'We believe solar energy should be simple, accessible, and efficient for everyone — offering clear guidance, easy-to-understand products, and a hassle-free installation process from start to finish.',
    image: simplifiedImg,
    imagePosition: '50% 60%',
  },
];

const stats = [
  { value: '500+', label: 'Projects Completed' },
  { value: '10MW+', label: 'Energy Generated' },
  { value: '98%', label: 'Customer Satisfaction' },
  { value: '5+', label: 'Years Experience' },
];

const About: React.FC = () => {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about-mission">
          <span className="eyebrow">About Us</span>
          <h2 className="section-title">Powering a Sustainable Future</h2>
          <p>
            At NextGen Solar Solutions, we are committed to transforming lives through
            top-notch workmanship, eco-friendly solutions, uncompromised safety, and
            seamless solar energy adoption. We believe sustainable energy should be
            accessible to everyone, and we&apos;re here to make that vision a reality —
            one rooftop at a time.
          </p>
        </div>

        <div className="values-editorial">
          {values.map((v, i) => (
            <div className={`value-entry accent-${accents[i % accents.length]}`} key={v.title}>
              <span className="value-number">{String(i + 1).padStart(2, '0')}</span>

              <div className="value-body">
                <div className="value-heading-row">
                  <div className="value-photo-ring">
                    <img src={v.image} alt={v.title} style={{ objectPosition: v.imagePosition }} loading="lazy" />
                    <span className="value-photo-icon">{v.icon}</span>
                  </div>
                  <div>
                    <h3>{v.title}</h3>
                    <span className="value-tagline">{v.tagline}</span>
                  </div>
                </div>
                <p>{v.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="stats-bar">
          {stats.map((s) => (
            <div className="stat-item" key={s.label}>
              <div className="stat-number">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
