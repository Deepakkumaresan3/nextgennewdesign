import React, { useState } from 'react';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import BoltRoundedIcon from '@mui/icons-material/BoltRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded';
import './Contact.css';

const DEFAULT_CONTACT_EMAIL = 'nextgensolar.kmu24@gmail.com';
// Replace with your actual Formspree form endpoint, e.g. 'https://formspree.io/f/abcdwxyz'
const FORMSPREE_ENDPOINT = process.env.REACT_APP_FORMSPREE_ENDPOINT || 'https://formspree.io/f/nextgensolar.kmu24@gmailcom';

type Status = 'idle' | 'sending' | 'success' | 'error';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const data = new FormData(form);
    const customerEmail = ((data.get('Email Address') as string | null) || '').trim() || DEFAULT_CONTACT_EMAIL;

    data.append('_subject', `New Solar Quote Request from ${data.get('Full Name')}`);
    data.append('_replyto', customerEmail);
    data.append('_to', DEFAULT_CONTACT_EMAIL);
    data.append('_cc', DEFAULT_CONTACT_EMAIL);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="section section-alt" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Get In Touch</span>
          <h2 className="section-title">Book Your Solar Consultation</h2>
          <p className="section-description">
            Share your property details and we&apos;ll get back to you with a
            thoughtful, no-obligation plan within 24 hours.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-item">
              <LocationOnRoundedIcon />
              <div>
                <h4>Address</h4>
                <p>35/B, Karnakollai North Street, Kumbakonam 612002, Tamil Nadu</p>
              </div>
            </div>
            <div className="info-item">
              <LocalPhoneRoundedIcon />
              <div>
                <h4>Phone</h4>
                <p>+91 90253 28583</p>
                <p>+91 86828 22667</p>
              </div>
            </div>
            <div className="info-item">
              <EmailRoundedIcon />
              <div>
                <h4>Email</h4>
                <p>nextgensolar.kmu24@gmail.com</p>
              </div>
            </div>
            <div className="info-item">
              <AccessTimeRoundedIcon />
              <div>
                <h4>Business Hours</h4>
                <p>Mon – Fri: 9:00 AM – 6:00 PM</p>
                <p>Sat: 9:00 AM – 2:00 PM · Sun: Closed</p>
              </div>
            </div>
          </div>

          <form className="quote-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <input type="text" name="Full Name" placeholder="Full Name" required disabled={status === 'sending'} />
              </div>
              <div className="form-group">
                <input type="tel" name="Phone Number" placeholder="Phone Number" required disabled={status === 'sending'} />
              </div>
            </div>

            <div className="form-group">
              <input type="email" name="Email Address" placeholder="Email Address" required disabled={status === 'sending'} />
            </div>

            <div className="form-group">
              <input type="text" name="Property Address" placeholder="Address / Location" required disabled={status === 'sending'} />
            </div>

            <div className="form-row">
              <div className="form-group">
                <select name="Property Type" required defaultValue="" disabled={status === 'sending'}>
                  <option value="" disabled>Property Type</option>
                  <option value="Residential">Residential</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Industrial">Industrial</option>
                </select>
              </div>
              <div className="form-group">
                <input
                  type="number"
                  name="Monthly Electricity Usage"
                  placeholder="Monthly Usage (Units)"
                  disabled={status === 'sending'}
                />
              </div>
            </div>

            <div className="form-group">
              <textarea
                name="Message"
                placeholder="Tell us about your energy needs..."
                rows={4}
                disabled={status === 'sending'}
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary btn-block" disabled={status === 'sending'}>
              <BoltRoundedIcon fontSize="small" />
              {status === 'sending' ? 'Sending…' : 'Request Consultation'}
            </button>

            {status === 'success' && (
              <p className="form-status form-status-success">
                <CheckCircleRoundedIcon fontSize="small" />
                Thanks! Your request has been sent — we&apos;ll get back to you within 24 hours.
              </p>
            )}
            {status === 'error' && (
              <p className="form-status form-status-error">
                <ErrorRoundedIcon fontSize="small" />
                Something went wrong. Please try again or call us directly.
              </p>
            )}
          </form>
        </div>

        <div className="contact-map">
          <iframe
            title="NextGen Solar Solutions location"
            src="https://www.google.com/maps?q=Karnakollai+North+Street,+Kumbakonam,+Tamil+Nadu+612002&output=embed"
            width="100%"
            height="380"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="contact-cta-banner">
          <h3>Ready to Start Your Solar Journey?</h3>
          <p>Schedule a free consultation and take the first step towards energy independence.</p>
          <a href="#contact" className="btn btn-primary">
            <BoltRoundedIcon fontSize="small" />
            Book Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
