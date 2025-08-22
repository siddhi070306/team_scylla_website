import React from 'react'
import { motion } from 'framer-motion'
import '@/styles/Team.css'
import { Mail, Linkedin } from 'lucide-react'

// Local member images
import IMG_TejasPatil from '@/assets/tejas patil.jpg'
import IMG_Shrikant from '@/assets/shrikant.jpg'
import IMG_Shivam from '@/assets/shivam.jpg'
import IMG_YashBagade from '@/assets/yash bagade.jpg'
import IMG_Darshan from '@/assets/darshan.jpg'
import IMG_NileshPatil from '@/assets/nilesh patil.jpg'
import IMG_Aditi from '@/assets/aditi.jpg'
import IMG_AkashSingh from '@/assets/akash singh.jpg'
import IMG_Prithiviraj from '@/assets/prithiviraj.jpg'
import IMG_SwapnilKolekar from '@/assets/swapnil kolekar.jpg'
import IMG_Kausthub from '@/assets/kausthub.jpg'
import IMG_AyushMahajan from '@/assets/ayush mahajan.jpg'
import IMG_RajChorge from '@/assets/raj chorge.jpg'
import IMG_HarshYeram from '@/assets/harsh yeram.jpg'
import IMG_YashPatil from '@/assets/yash patil.jpg'
import IMG_YashPatilSE from '@/assets/yash patil se.jpg'
import IMG_Madiha from '@/assets/madiha.jpg'
import IMG_KrishnaPardeshi from '@/assets/krishna pardeshi.jpg'
import IMG_Sanskruti from '@/assets/sanskurti.jpg'
import IMG_Nikita from '@/assets/nikita.jpg'
import IMG_YashHiwale from '@/assets/yash hiwale.jpg'
import IMG_SidhantMore from '@/assets/sidhant more.jpg'
import IMG_PriuthvirajDhawale from '@/assets/priuthviraj dhavale.jpg'

const TEAM = [
  { name: 'Tejas Patil', role: 'Captain', email: 'member@example.com', linkedin: 'https://linkedin.com', img: IMG_TejasPatil },
  { name: 'Shrikant Mudgul', role: 'Vice Captain', email: 'member@example.com', linkedin: 'https://linkedin.com', img: IMG_Shrikant },
  { name: 'Shivam Nimbalkar', role: 'Manager', email: 'member@example.com', linkedin: 'https://linkedin.com', img: IMG_Shivam },
  { name: 'Yash Bagade', role: 'HEAD of CHASSIS DEPT', email: 'member@example.com', linkedin: 'https://linkedin.com', img: IMG_YashBagade },
  { name: 'Darshan Garud', role: 'HEAD of BRAKE DEPT', email: 'member@example.com', linkedin: 'https://linkedin.com', img: IMG_Darshan },
  { name: 'Nilesh Patil', role: 'HEAD of POWERTRAIN DEPT', email: 'member@example.com', linkedin: 'https://linkedin.com', img: IMG_NileshPatil },
  { name: 'Aditi Dhobare', role: 'MEMBER', email: 'member@example.com', linkedin: 'https://linkedin.com', img: IMG_Aditi },
  { name: 'Akash Singh', role: 'MEMBER', email: 'member@example.com', linkedin: 'https://linkedin.com', img: IMG_AkashSingh },
  { name: 'Priuthviraj Ingawale', role: 'MEMBER', email: 'member@example.com', linkedin: 'https://linkedin.com', img: IMG_Prithiviraj },
  { name: 'Swapnil Kolekar ', role: 'MEMBER', email: 'member@example.com', linkedin: 'https://linkedin.com', img: IMG_SwapnilKolekar },
  { name: 'Kausthubh Sonavwane', role: 'MEMBER', email: 'member@example.com', linkedin: 'https://linkedin.com', img: IMG_Kausthub },
  { name: 'Ayush Mahajan', role: 'MEMBER', email: 'member@example.com', linkedin: 'https://linkedin.com', img: IMG_AyushMahajan },
  { name: 'Raj Chorge', role: 'MEMBER', email: 'member@example.com', linkedin: 'https://linkedin.com', img: IMG_RajChorge },
  { name: 'Harsh Yeram', role: 'MEMBER', email: 'member@example.com', linkedin: 'https://linkedin.com', img: IMG_HarshYeram },
  { name: 'Yash Patil', role: 'MEMBER', email: 'member@example.com', linkedin: 'https://linkedin.com', img: IMG_YashPatil },
  { name: 'Madiha Shaikh', role: 'MEMBER', email: 'member@example.com', linkedin: 'https://linkedin.com', img: IMG_Madiha },
  { name: 'Krishna Pardeshi', role: 'MEMBER', email: 'member@example.com', linkedin: 'https://linkedin.com', img: IMG_KrishnaPardeshi },
  { name: 'Sanskruti Jamdhade', role: 'MEMBER', email: 'member@example.com', linkedin: 'https://linkedin.com', img: IMG_Sanskruti },
  { name: 'Nikita Bhosale', role: 'MEMBER', email: 'member@example.com', linkedin: 'https://linkedin.com', img: IMG_Nikita },
  { name: 'Aditya Gangane', role: 'MEMBER', email: 'member@example.com', linkedin: 'https://linkedin.com', img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=640&auto=format&fit=crop' },
  { name: 'Yash Patil', role: 'MEMBER', email: 'member@example.com', linkedin: 'https://linkedin.com', img: IMG_YashPatilSE },
  { name: 'Dheeraj Mahale', role: 'MEMBER', email: 'member@example.com', linkedin: 'https://linkedin.com', img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=640&auto=format&fit=crop' },
  { name: 'Yash Hiwale', role: 'MEMBER', email: 'member@example.com', linkedin: 'https://linkedin.com', img: IMG_YashHiwale },
  { name: 'Siddhiant More', role: 'MEMBER', email: 'member@example.com', linkedin: 'https://linkedin.com', img: IMG_SidhantMore },
  { name: 'Priuthviraj Dhawale', role: 'MEMBER', email: 'member@example.com', linkedin: 'https://linkedin.com', img: IMG_PriuthvirajDhawale },
  { name: 'Aryan Tagad', role: 'MEMBER', email: 'member@example.com', linkedin: 'https://linkedin.com', img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=640&auto=format&fit=crop' },
  { name: 'Siddhi Bhosale', role: 'MEMBER', email: 'member@example.com', linkedin: 'https://linkedin.com', img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=640&auto=format&fit=crop' },
  { name: 'Manas Dudhe', role: 'MEMBER', email: 'member@example.com', linkedin: 'https://linkedin.com', img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=640&auto=format&fit=crop' },
]

export default function Team() {
  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    show: (i) => ({ opacity: 1, y: 0, transition: { delay: 0.04 * i, type: 'spring', stiffness: 110, damping: 16 } })
  }

  return (
    <main className="team-page">
      <section className="team-hero">
        <div className="container header-center">
          <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }} className="team-headline">TEAM SCYLLA</motion.h1>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: .06 }} className="team-subcenter">Our Specialist Members</motion.p>
          <div className="tiny-underline" />
        </div>
      </section>

      <section className="team-grid-wrap">
        <div className="container">
          <div className="team-grid-4">
            {TEAM.map((p, idx) => (
              <motion.article key={p.name + idx} className="doctor-card" custom={idx} variants={cardVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: .2 }} whileHover={{ y: -6 }}>
                <div className="doc-top">
                  <div className="avatar-circle">
                    <img src={p.img} alt={p.name} loading="lazy" />
                  </div>
                </div>
                <div className="doc-body">
                  <h3 className="doc-name">{p.name}</h3>
                  <p className="doc-role">{p.role}</p>
                </div>
                <div className="doc-actions">
                  <a className="doc-btn" href={`mailto:${p.email}`} aria-label="Email"><Mail size={16} /></a>
                  <a className="doc-btn" href={p.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={16} /></a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}


