import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import '@/styles/Home.css'
import { Rocket, Trophy, Users, Zap, Camera, Heart } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { BackgroundRippleEffect } from '@/components/BackgroundRippleEffect'

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

const Home = () => {
  const { scrollY } = useScroll()
  const ySlow = useTransform(scrollY, [0, 600], [0, 40])
  const yFast = useTransform(scrollY, [0, 600], [0, 80])
  const ripplesRef = useRef(null)

  const featureVariants = {
    hidden: { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 90, damping: 16 }
    },
  }

  const galleryVariants = {
    hidden: { opacity: 0, y: 24 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.04 * i, duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    })
  }

  const galleryImages = [
    IMG001, IMG002, IMG003, IMG004, IMG005, IMG006, IMG007, IMG008,
    IMG009, IMG010, IMG011, IMG012, IMG013, IMG014, IMG015, IMG016,
    IMG017, IMG018, IMG019, IMG020, IMG021, IMG022, IMG023, IMG024,
    IMG025, IMG026, IMG027, IMG028, IMG029, IMG030, IMG031, IMG032,
    IMG033, IMG034, IMG035, IMG036, IMG037, IMG038, IMG039, IMG040,
    IMG041, IMG042, IMG043, IMG044, IMG045
  ]

  // Ensure unique images (no repeats)
  const uniqueImages = useMemo(() => Array.from(new Set(galleryImages)), [galleryImages])

  // Use a smaller subset for cleaner spacing (fewer images)
  const limitedImages = useMemo(() => uniqueImages.slice(0, 16), [uniqueImages])

  // Ring rotation control (pause only when a card is hovered)
  const [rotationDeg, setRotationDeg] = useState(0)
  const [paused, setPaused] = useState(false)
  const rafRef = useRef(0)
  const speedDegPerSec = 360 / 32 // slower cylinder: one revolution every 32s

  useEffect(() => {
    let last = performance.now()
    const loop = (now) => {
      const dt = (now - last) / 1000
      last = now
      if (!paused) {
        setRotationDeg((prev) => (prev + speedDegPerSec * dt) % 360)
      }
      rafRef.current = requestAnimationFrame(loop)
    }
    rafRef.current = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(rafRef.current)
  }, [paused])

  const baseAngles = useMemo(() => limitedImages.map((_, idx) => (360 / limitedImages.length) * idx), [limitedImages.length])

  const isFrontFacing = (angle) => {
    let a = ((angle % 360) + 360) % 360
    if (a > 180) a -= 360
    return Math.abs(a) <= 60
  }

  return (
    <main id="top" className="home">
      <section className="hero">
        <div className="hero-bg-ripples" aria-hidden>
          <BackgroundRippleEffect
            ref={ripplesRef}
            rows={9}
            cols={30}
            cellSize={52}
            opacity={0.6}
            borderColor="rgba(0,0,0,0.25)"
            fillColor="rgba(59,130,246,0.12)"
          />
        </div>
        <motion.div className="hero-orb orb-left" style={{ y: yFast }} />
        <motion.div className="hero-orb orb-right" style={{ y: ySlow }} />
        <div
          className="hero-inner"
          onMouseMove={(e) => ripplesRef.current?.triggerAtPoint(e.clientX, e.clientY)}
          onClick={(e) => ripplesRef.current?.triggerAtPoint(e.clientX, e.clientY)}
        >
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, ease: [0.16,1,0.3,1] }}>
            <div className="badge">Fueling Innovation</div>
          </motion.div>
          <motion.h1 className="hero-title" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .08, duration: .7, ease: [0.16,1,0.3,1] }}>
            Team Scylla Racing
            <span className="title-glow" />
          </motion.h1>
          <motion.p className="hero-sub" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .12, duration: .6 }}>
            Official Team of Nutan Maharashtra Institute of Education and Technology handled by students.
          </motion.p>
          <motion.p className="hero-sub" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .12, duration: .6 }}>
            Building next‑gen performance with precision, passion, and purpose.
          </motion.p>
          <motion.div className="cta-row" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .16, duration: .5 }}>
            <motion.a whileHover={{ y: -3, scale: 1.02 }} whileTap={{ scale: .98 }} href="#gallery" className="cta primary">
              <Camera size={18} />
              <span>View Gallery</span>
            </motion.a>
            <motion.a whileHover={{ y: -3, scale: 1.02 }} whileTap={{ scale: .98 }} href="#features" className="cta ghost">
              <Rocket size={18} />
              <span>Learn More</span>
            </motion.a>
          </motion.div>
          <motion.div className="stats" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .22, duration: .5 }}>
            <div className="stat"><span className="num">20+</span><span className="label">Members</span></div>
            <div className="sep" />
            <div className="stat"><span className="num">5+</span><span className="label">Awards</span></div>
            <div className="sep" />
            <div className="stat"><span className="num">2</span><span className="label">Vehicles</span></div>
          </motion.div>
        </div>
      </section>

      <section id="features" className="section">
        <div className="section-head">
          <motion.h2 className="section-title" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .5 }}>What Drives Us</motion.h2>
          <motion.p className="section-sub" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .5, delay: .05 }}>A relentless pursuit of engineering excellence.</motion.p>
        </div>
        <div className="features-grid">
          <motion.article className="feature" variants={featureVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: .2 }}>
            <div className="feature-icon"><Zap size={22} /></div>
            <h3 className="feature-title">Performance</h3>
            <p className="feature-desc">Optimized aerodynamics, lightweight design, and high‑efficiency powertrains.</p>
          </motion.article>
          <motion.article className="feature" variants={featureVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: .2 }}>
            <div className="feature-icon"><Users size={22} /></div>
            <h3 className="feature-title">Teamwork</h3>
            <p className="feature-desc">Cross‑discipline collaboration that turns bold ideas into real victories.</p>
          </motion.article>
          <motion.article className="feature" variants={featureVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: .2 }}>
            <div className="feature-icon"><Trophy size={22} /></div>
            <h3 className="feature-title">Competition</h3>
            <p className="feature-desc">We race to learn, iterate faster, and set new benchmarks every season.</p>
          </motion.article>
        </div>
      </section>

      <section id="gallery" className="section carousel-section">
        <div className="section-head">
          <motion.h2 className="section-title" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .5 }}>Gallery</motion.h2>
          <motion.p className="section-sub" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .5, delay: .05 }}>Moments from the track and the lab.</motion.p>
        </div>
        <div className="mobile-construction">
          <div className="construction-content">
            <h3>🚧 Under Construction</h3>
            <p>Gallery view is being optimized for mobile devices. Please view on desktop for the full experience.</p>
          </div>
        </div>
        <div className="carousel-wrap">
          <div
            className="ring"
            style={{ '--rotation': `${rotationDeg}deg` }}
          >
            {limitedImages.map((src, i) => {
              const angle = baseAngles[i]
              const current = (angle + rotationDeg)
              const front = isFrontFacing(current)
              return (
                <div
                  key={i}
                  className={`card${front ? ' front' : ''}`}
                  style={{ '--angle': `${angle}deg`, '--radius': '760px' }}
                  onMouseEnter={() => setPaused(true)}
                  onMouseLeave={() => setPaused(false)}
                >
                  <img src={src} alt={`Gallery ${i + 1}`} />
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Sponsors section removed per request */}

      <section className="cta-foot">
        <motion.div className="cta-card" whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 16 }} transition={{ duration: .6, ease: [0.16,1,0.3,1] }}>
          <div className="cta-info">
            <h3>Join the journey</h3>
            <p>Collaborate, innovate, and build with Team Scylla Racing.</p>
          </div>
          <motion.div whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: .98 }}>
            <Link to="/contact" className="cta primary"><Heart size={18} /><span>Get Involved</span></Link>
          </motion.div>
        </motion.div>
      </section>

      <section id="contact" className="section">
        <div className="section-head">
          <motion.h2 className="section-title" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .5 }}>Contact Us</motion.h2>
          <motion.p className="section-sub" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .5, delay: .05 }}>We’d love to hear from you.</motion.p>
        </div>
        <motion.div className="cta-card" whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 16 }} transition={{ duration: .6 }}>
          <div className="cta-info">
            <h3>Partner, Sponsor, or Join</h3>
            <p>Reach out and we’ll get back within 48 hours.</p>
          </div>
          <a className="cta ghost" href="mailto:hello@teamscylla.example">Email Us</a>
        </motion.div>
      </section>
    </main>
  )
}

export default Home