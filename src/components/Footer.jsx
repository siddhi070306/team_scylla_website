import React from 'react'
import { Linkedin, Instagram } from 'lucide-react'
import '@/styles/Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">Team Scylla Racing</div>
        <div className="footer-actions">
          <a href="#" aria-label="LinkedIn" className="footer-btn"><Linkedin size={18} /></a>
          <a href="#" aria-label="Instagram" className="footer-btn"><Instagram size={18} /></a>
        </div>
      </div>
    </footer>
  )
}


