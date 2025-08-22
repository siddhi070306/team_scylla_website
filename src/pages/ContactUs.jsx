import React from 'react'
import { Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import '@/styles/ContactUs.css'

const ContactUs = () => {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <h1 className="contact-title">Contact us</h1>
          <p className="contact-sub">Reach out for collaborations, queries, or to join Team Scylla.</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container grid">
          <div className="contact-card">
            <h2>Reach us directly</h2>
            <ul className="contact-list">
              <li>
                <span className="icon"><Mail size={18} /></span>
                <div>
                  <div className="label">Email</div>
                  <a href="mailto:teamscylla@nmiet.edu" aria-label="Email Team Scylla">teamscylla@nmiet.edu</a>
                </div>
              </li>
              <li>
                <span className="icon"><Phone size={18} /></span>
                <div>
                  <div className="label">Phone</div>
                  <a href="tel:+911234567890" aria-label="Call Team Scylla">+91 12345 67890</a>
                </div>
              </li>
              <li>
                <span className="icon"><MapPin size={18} /></span>
                <div>
                  <div className="label">Address</div>
                  <p className="address">NMIET College, Talgaon, Maharashtra, India</p>
                </div>
              </li>
            </ul>

            <div className="socials">
              <a className="social" href="https://instagram.com/team_scylla" target="_blank" rel="noreferrer" aria-label="Instagram">
                <Instagram size={18} />
                <span>Instagram</span>
              </a>
              <a className="social" href="https://www.linkedin.com/school/nmiet/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
              <a className="social" href="mailto:teamscylla@nmiet.edu" aria-label="Email">
                <Mail size={18} />
                <span>Email</span>
              </a>
            </div>
          </div>

          <aside className="contact-aside">
            <div className="info-card">
              <h3>Find us on map</h3>
              <p>NMIET College, Talgaon</p>
              <div className="map-embed">
                <iframe
                  title="NMIET College Talgaon location"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=NMIET%20College%20Talgaon&output=embed"
                />
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}

export default ContactUs