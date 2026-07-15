import React from 'react';
import SolarPowerRoundedIcon from '@mui/icons-material/SolarPowerRounded';
import MemoryRoundedIcon from '@mui/icons-material/MemoryRounded';
import BatteryFullRoundedIcon from '@mui/icons-material/BatteryFullRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import ShieldRoundedIcon from '@mui/icons-material/ShieldRounded';
import CableRoundedIcon from '@mui/icons-material/CableRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import Carousel from '../components/Carousel';
import pvModulesImg from '../assets/product-pv-modules.jpg';
import inverterImg from '../assets/product-inverter.png';
import mountingImg from '../assets/product-mounting.jpg';
import './Products.css';

const accents = ['indigo', 'cyan', 'violet', 'amber'] as const;

type ProductSpec = {
  label: string;
  value: string;
};

type ProductItem = {
  icon: React.ReactNode;
  image?: string;
  title: string;
  badge?: string;
  price?: string;
  description: string;
  specs: ProductSpec[];
  highlights: string[];
};

const emptySpecs: ProductSpec[] = [];

const products: ProductItem[] = [
  {
    icon: <SolarPowerRoundedIcon />,
    image: pvModulesImg,
    title: 'Solar PV Modules',
    badge: 'Best Seller',
    price: '12,000',
    description: 'High-efficiency monocrystalline photovoltaic panels engineered for maximum energy conversion in every season.',
    specs: emptySpecs,
    highlights: ['Monocrystalline', 'Weather Resistant'],
  },
  {
    icon: <MemoryRoundedIcon />,
    image: inverterImg,
    title: 'Solar Inverters',
    price: '45,000',
    description: 'Advanced string, micro, and hybrid inverters that convert DC to AC efficiently while staying fully grid-compatible.',
    specs: emptySpecs,
    highlights: ['String', 'Micro', 'Hybrid'],
  },
  {
    icon: <BatteryFullRoundedIcon />,
    title: 'Solar Batteries',
    badge: 'New',
    price: '85,000',
    description: 'Reliable lithium-ion (LiFePO4) storage that banks surplus energy for uninterrupted power, day or night.',
    specs: emptySpecs,
    highlights: ['Fast Charging', 'Scalable'],
  },
  {
    icon: <ConstructionRoundedIcon />,
    image: mountingImg,
    title: 'Solar Mounting Systems',
    price: '8,500',
    description: 'Corrosion-resistant roof, metal-sheet, and ground mounting engineered to hold firm on any terrain or wind load.',
    specs: emptySpecs,
    highlights: ['Roof', 'Metal Sheet', 'Ground'],
  },
  {
    icon: <ShieldRoundedIcon />,
    title: 'Protection Devices',
    description: 'Complete electrical protection for your solar array, from grid-side surges to DC-side faults.',
    specs: emptySpecs,
    highlights: ['ACDB', 'DCDB', 'Lightning Arrester', 'SPD'],
  },
  {
    icon: <CableRoundedIcon />,
    title: 'Conductors & Cabling',
    description: 'Certified AC, DC, and earthing cable engineered for safe, low-loss power transmission.',
    specs: emptySpecs,
    highlights: ['AC Cable', 'DC Cable', 'Earthing Cable'],
  },
];

const Products: React.FC = () => {
  return (
    <section className="section section-alt" id="products">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Our Products</span>
          <h2 className="section-title">Premium Solar Hardware</h2>
          <p className="section-description">
            Trusted components sourced for durability, efficiency, and long-term performance.
          </p>
        </div>

        <Carousel ariaLabel="Our products" className="products-grid">
          {products.map((p, i) => (
            <div className={`product-card accent-${accents[i % accents.length]}`} key={p.title}>
              {p.image ? (
                <div className="product-image">
                  <img src={p.image} alt={p.title} loading="lazy" />
                  {p.badge && <span className="product-badge">{p.badge}</span>}
                  <div className="product-image-icon">
                    <div className="product-image-icon-inner">{p.icon}</div>
                  </div>
                </div>
              ) : (
                <>
                  <span className="product-index">{String(i + 1).padStart(2, '0')}</span>
                  <div className="product-icon">
                    <div className="product-icon-inner">{p.icon}</div>
                  </div>
                </>
              )}

              <h3 className="product-title">{p.title}</h3>
              <p className="product-description">{p.description}</p>

              {p.specs.length > 0 && (
                <div className="product-specs">
                  {p.specs.map((spec) => (
                    <div className="product-spec" key={spec.label}>
                      <span className="product-spec-label">{spec.label}</span>
                      <span className="product-spec-value">{spec.value}</span>
                    </div>
                  ))}
                </div>
              )}

              <ul className="product-highlights">
                {p.highlights.map((h) => (
                  <li key={h}>
                    <CheckRoundedIcon fontSize="small" />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="product-footer">
                {p.price && (
                  <div className="product-price">
                    <span>Ideal for</span>
                    <strong>{p.title}</strong>
                  </div>
                )}
                <button type="button" className="btn btn-secondary product-enquire">
                  Enquire Now
                </button>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Products;
