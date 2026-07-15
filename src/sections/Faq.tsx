import React, { useState } from 'react';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import './Faq.css';

const faqs = [
  {
    question: 'What is solar energy and how does it work?',
    answer:
      'Solar energy is the conversion of sunlight into electricity using photovoltaic (PV) cells. These cells are made from semiconductor materials that generate electricity when exposed to sunlight. The electricity generated can be used directly or stored in batteries for later use.',
  },
  {
    question: 'How much does a solar panel system cost?',
    answer:
      'The cost of a solar panel system varies based on several factors including system size, location, and installation requirements. On average, a residential solar system can range from ₹50,000 to ₹2,00,000 depending on your energy needs and system specifications.',
  },
  {
    question: 'How much maintenance do solar panels require?',
    answer:
      'Solar panels require minimal maintenance. Regular cleaning to remove dust and debris is recommended, along with occasional inspections to check for any damage or issues. Most solar panels come with a warranty of 25 years, and with proper maintenance, they can last even longer.',
  },
  {
    question: 'Do solar panels work on cloudy days?',
    answer:
      "Yes, solar panels can still generate electricity on cloudy days, though their efficiency is reduced. Modern solar panels are designed to work in various weather conditions and can still produce power even when there's limited sunlight.",
  },
  {
    question: 'How long does it take to install a solar system?',
    answer:
      'The installation time varies depending on the system size and complexity. A typical residential installation can take 1-3 days, while larger commercial installations might take several days to a week. Our team will provide a detailed timeline based on your specific requirements.',
  },
];

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">FAQ</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-description">
            Answers to the questions we hear most from homeowners and businesses going solar.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div className={`faq-item ${isOpen ? 'open' : ''}`} key={faq.question}>
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-number">{String(i + 1).padStart(2, '0')}</span>
                  <span className="faq-question-text">{faq.question}</span>
                  <span className="faq-toggle-icon">
                    {isOpen ? <RemoveRoundedIcon /> : <AddRoundedIcon />}
                  </span>
                </button>
                <div className="faq-answer-wrapper">
                  <div className="faq-answer-inner">
                    <p className="faq-answer">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
