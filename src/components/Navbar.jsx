import React, { useEffect, useState } from 'react'
import { Home, Info, Users, Moon, Sun, Flag, Phone } from 'lucide-react'
import '@/styles/Navbar.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logoImg from '@/assets/Teamscylla-removebg-preview.png'

const NAV_LINKS = [
  { label: 'Home', icon: <Home size={28} />, to: '/' },
  { label: 'Gallery', icon: <Flag size={28} />, hash: '#gallery' },
  { label: 'About', icon: <Info size={28} />, to: '/about' },
  { label: 'Team', icon: <Users size={28} />, to: '/team' },
  { label: 'Contact', icon: <Phone size={28} />, to: '/contact' },
]

export default function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const sysDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    const initial = stored || (sysDark ? 'dark' : 'light')
    setTheme(initial)
    document.documentElement.setAttribute('data-theme', initial)
  }, [])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    localStorage.setItem('theme', next)
    document.documentElement.setAttribute('data-theme', next)
  }

  const handleClick = (item) => (e) => {
    if (item.hash) {
      e.preventDefault()
      if (location.pathname !== '/') {
        navigate('/')
        requestAnimationFrame(() => {
          const el = document.querySelector(item.hash)
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        })
      } else {
        const el = document.querySelector(item.hash)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  return (
    <div className="nav-top nav-left">
      <Link className="brand-logo" to="/" aria-label="Team Scylla Racing">
        <img src={logoImg} alt="Team Scylla Racing logo" style={{ width: 56, height: 56, display: 'block', objectFit: 'contain' }} />
      </Link>
      <ul className="nav-links nav-only">
        {NAV_LINKS.map((item) => (
          <li key={item.label} className="nav-item">
            {item.to ? (
              <Link className="nav-link" to={item.to} aria-label={item.label}>
                <span className="icon-wrap">{item.icon}</span>
                <span className="link-text">{item.label}</span>
              </Link>
            ) : (
              <a className="nav-link" href={item.hash} onClick={handleClick(item)} aria-label={item.label}>
                <span className="icon-wrap">{item.icon}</span>
                <span className="link-text">{item.label}</span>
              </a>
            )}
          </li>
        ))}
      </ul>
      <button className="theme-toggle" aria-label="Toggle theme" onClick={toggleTheme}>
        {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
      </button>
    </div>
  )
}
