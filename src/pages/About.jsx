import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import '@/styles/About.css'
import { Target, Hammer, Sparkles, Shield, Users, Leaf, Calendar, Trophy, Award, Rocket } from 'lucide-react'
import { ThreeDMarquee } from '@/components/ThreeDMarquee'

// Import local photos for the 3D marquee
import IMG001 from '@/assets/IMG-20250820-WA0050.jpg'
import IMG002 from '@/assets/IMG-20250820-WA0051.jpg'
import IMG003 from '@/assets/IMG-20250820-WA0052.jpg'
import IMG004 from '@/assets/IMG-20250820-WA0053.jpg'
import IMG005 from '@/assets/IMG-20250820-WA0054.jpg'
import IMG006 from '@/assets/IMG-20250820-WA0055.jpg'
import IMG007 from '@/assets/IMG-20250820-WA0056.jpg'
import IMG008 from '@/assets/IMG-20250820-WA0057.jpg'
import IMG009 from '@/assets/IMG-20250820-WA0058.jpg'
import IMG010 from '@/assets/IMG-20250820-WA0059.jpg'
import IMG011 from '@/assets/IMG-20250820-WA0060.jpg'
import IMG012 from '@/assets/IMG-20250820-WA0061.jpg'
import IMG013 from '@/assets/IMG-20250820-WA0062.jpg'
import IMG014 from '@/assets/IMG-20250820-WA0063.jpg'
import IMG015 from '@/assets/IMG-20250820-WA0064.jpg'
import IMG016 from '@/assets/IMG-20250820-WA0065.jpg'
import IMG017 from '@/assets/IMG-20250820-WA0066.jpg'
import IMG018 from '@/assets/IMG-20250820-WA0067.jpg'
import IMG019 from '@/assets/IMG-20250820-WA0068.jpg'
import IMG020 from '@/assets/IMG-20250820-WA0069.jpg'
import IMG021 from '@/assets/IMG-20250820-WA0070.jpg'
import IMG022 from '@/assets/IMG-20250820-WA0049.jpg'
import IMG023 from '@/assets/IMG-20250820-WA0048.jpg'
import IMG024 from '@/assets/IMG-20250820-WA0047.jpg'
import IMG025 from '@/assets/IMG-20250820-WA0046.jpg'
import IMG026 from '@/assets/IMG-20250820-WA0045.jpg'
import IMG027 from '@/assets/IMG-20250820-WA0044.jpg'
import IMG028 from '@/assets/IMG-20250820-WA0043.jpg'
import IMG029 from '@/assets/IMG-20250820-WA0042.jpg'
import IMG030 from '@/assets/IMG-20250820-WA0041.jpg'
import IMG031 from '@/assets/IMG-20250820-WA0040.jpg'
import IMG032 from '@/assets/IMG-20250820-WA0039.jpg'
import IMG033 from '@/assets/IMG-20250820-WA0038.jpg'
import IMG034 from '@/assets/IMG-20250820-WA0037.jpg'
import IMG035 from '@/assets/IMG-20250820-WA0036.jpg'
import IMG036 from '@/assets/IMG-20250820-WA0035.jpg'
import IMG037 from '@/assets/IMG-20250820-WA0034.jpg'
import IMG038 from '@/assets/IMG-20250820-WA0033.jpg'
import IMG039 from '@/assets/IMG-20250820-WA0032.jpg'
import IMG040 from '@/assets/IMG-20250820-WA0031.jpg'
import IMG041 from '@/assets/IMG-20250820-WA0030.jpg'
import IMG042 from '@/assets/IMG-20250820-WA0029.jpg'
import IMG043 from '@/assets/IMG-20250820-WA0028.jpg'
import IMG044 from '@/assets/IMG-20250820-WA0027.jpg'
import IMG045 from '@/assets/IMG-20250820-WA0026.jpg'

const About = () => {
  // Diverse gallery images for the 3D marquee effect using local photos
  const aboutGalleryImages = [
    IMG001, IMG002, IMG003, IMG004, IMG005, IMG006, IMG007, IMG008,
    IMG009, IMG010, IMG011, IMG012, IMG013, IMG014, IMG015, IMG016,
    IMG017, IMG018, IMG019, IMG020, IMG021, IMG022, IMG023, IMG024,
    IMG025, IMG026, IMG027, IMG028, IMG029, IMG030, IMG031, IMG032,
    IMG033, IMG034, IMG035, IMG036, IMG037, IMG038, IMG039, IMG040,
    IMG041, IMG042, IMG043, IMG044, IMG045
  ]

  return (
    <main className="about-page" style={{ paddingTop: 96 }}>
      <section className="about-hero">
        <div className="container about-hero-inner">
          <h1 className="about-title">About Team Scylla Racing</h1>
          <p className="about-sub">Engineering excellence through collaboration and innovation.</p>
          <div className="about-stats">
            <div className="stat-box">
              <div className="stat-num">20+</div>
              <div className="stat-label">Members</div>
            </div>
            <div className="stat-box">
              <div className="stat-num">5+</div>
              <div className="stat-label">Awards</div>
            </div>
            <div className="stat-box">
              <div className="stat-num">2</div>
              <div className="stat-label">Vehicles</div>
            </div>
            <div className="stat-box">
              <div className="stat-num">9</div>
              <div className="stat-label">Years</div>
            </div>
          </div>
        </div>
      </section>

      <section className="container about-values">
        <div className="section-head">
          <h2 className="section-title">Our Values</h2>
          <p className="section-sub">The principles that drive our success.</p>
        </div>
        <div className="values-grid">
          <motion.article className="value-card" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="value-icon"><Target size={18} /></div>
            <h3>Excellence</h3>
            <p>We push boundaries and never settle for "good enough."</p>
          </motion.article>
          <motion.article className="value-card" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="value-icon"><Hammer size={18} /></div>
            <h3>Craft</h3>
            <p>Hands‑on learning and rapid iteration turn ideas into race‑ready parts.</p>
          </motion.article>
          <motion.article className="value-card" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="value-icon"><Sparkles size={18} /></div>
            <h3>Innovation</h3>
            <p>Encourage creativity and out of the box thinking. 
            </p>
          </motion.article>
          <motion.article className="value-card" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="value-icon"><Shield size={18} /></div>
            <h3>Motivation</h3>
            <p>Stay motivated and dedicated to the team goals.
            </p>
          </motion.article>
          <motion.article className="value-card" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="value-icon"><Users size={18} /></div>
            <h3>Team</h3>
            <p>We win as one: mentorship, mutual respect, and shared grit.</p>
          </motion.article>
          <motion.article className="value-card" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="value-icon"><Leaf size={18} /></div>
            <h3>Learning</h3>
            <p>We grow engineers by doing—failing safely, learning quickly.</p>
          </motion.article>
        </div>
      </section>

      <section className="container about-journey">
        <div className="section-head">
          <h2 className="section-title">Our Journey</h2>
          <p className="section-sub">Milestones that shaped us.</p>
        </div>
        <div className="journey-grid">
          <motion.div className="journey-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="journey-icon"><Calendar size={24} /></div>
            <h3>2017 • Team founded</h3>
            <p>First scrappy prototype, built after classes in the lab.</p>
          </motion.div>
          <motion.div className="journey-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <div className="journey-icon"><Trophy size={24} /></div>
            <h3>2019 • First endurance finish</h3>
            <p>Completed a full 2‑hour race with consistent lap times.</p>
          </motion.div>
          <motion.div className="journey-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <div className="journey-icon"><Award size={24} /></div>
            <h3>2021 • First podium</h3>
            <p>Top‑3 overall with zero DNFs and best design score yet.</p>
          </motion.div>
          <motion.div className="journey-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            <div className="journey-icon"><Rocket size={24} /></div>
            <h3>2022 • Modular chassis</h3>
            <p>Faster repairs with bolt‑on sub‑assemblies and jig fixtures.</p>
          </motion.div>
          <motion.div className="journey-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
            <div className="journey-icon"><Hammer size={24} /></div>
            <h3>2023 • Suspension refresh</h3>
            <p>Progressive damping and revised geometry for better grip.</p>
          </motion.div>
          <motion.div className="journey-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>
            <div className="journey-icon"><Sparkles size={24} /></div>
            <h3>2024 • Telemetry rollout</h3>
            <p>Live data for tuning suspension, clutching, and pit strategy.</p>
          </motion.div>
        </div>
      </section>

      <section className="container about-gallery">
        <div className="section-head">
          <h2 className="section-title">Our Gallery</h2>
          <p className="section-sub">Capturing moments of innovation and teamwork.</p>
        </div>
        <div className="mobile-construction">
          <div className="construction-content">
            <h3>🚧 Under Construction</h3>
            <p>Gallery view is being optimized for mobile devices. Please view on desktop for the full experience.</p>
          </div>
        </div>
        <ThreeDMarquee images={aboutGalleryImages} />
      </section>

      <section className="container about-cta">
        <div className="cta-card">
          <div className="cta-info">
            <h3>Join the build</h3>
            <p>Design, fabricate, and race with Team Scylla Racing.</p>
          </div>
          <div className="cta-row">
            <Link to="/team" className="cta primary">Meet the Team</Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About