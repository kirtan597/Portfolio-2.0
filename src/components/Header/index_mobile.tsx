import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { List, X } from 'phosphor-react'
import { FiHome, FiUser, FiMail } from 'react-icons/fi'
import { FaProjectDiagram } from 'react-icons/fa'
import { MdOutlineWorkOutline } from 'react-icons/md'
import { FaSun, FaMoon } from 'react-icons/fa'
import { useThemeContext } from '../../context/ThemeContext'

export function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const { currentTheme, toggleTheme } = useThemeContext()
  const router = useRouter()

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false)
    if (router.pathname !== '/') {
      router.push('/')
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i])
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'home', label: 'Home', icon: FiHome },
    { id: 'projects', label: 'Projects', icon: FaProjectDiagram },
    { id: 'skills', label: 'Skills', icon: MdOutlineWorkOutline },
    { id: 'about', label: 'About', icon: FiUser },
    { id: 'contact', label: 'Contact', icon: FiMail },
  ]

  return (
    <>
      {/* Fixed Header */}
      <header className="mobile-header">
        <div className="header-content">
          <div className="logo">
            <span>Kirtan Panchal</span>
          </div>
          
          <div className="header-actions">
            <button 
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {currentTheme === 'dark' ? <FaSun /> : <FaMoon />}
            </button>
            
            <button 
              className="menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <List size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="menu-overlay" onClick={() => setIsMenuOpen(false)}>
          <nav className="mobile-nav" onClick={(e) => e.stopPropagation()}>
            <div className="nav-header">
              <h3>Navigation</h3>
              <button 
                className="close-btn"
                onClick={() => setIsMenuOpen(false)}
              >
                <X size={24} />
              </button>
            </div>
            
            <ul className="nav-list">
              {navItems.map(({ id, label, icon: Icon }) => (
                <li key={id}>
                  <button
                    className={`nav-item ${activeSection === id ? 'active' : ''}`}
                    onClick={() => scrollToSection(id)}
                  >
                    <Icon className="nav-icon" />
                    <span>{label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}

      <style jsx>{`
        .mobile-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 60px;
          background: rgba(0, 0, 0, 0.95);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          z-index: 1000;
        }

        .header-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100%;
          padding: 0 1rem;
          max-width: 100vw;
        }

        .logo span {
          font-size: 1.1rem;
          font-weight: 700;
          color: white;
          white-space: nowrap;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .theme-toggle,
        .menu-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border: none;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.1);
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .theme-toggle:hover,
        .menu-toggle:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: scale(1.05);
        }

        .menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          z-index: 1001;
          animation: fadeIn 0.3s ease;
        }

        .mobile-nav {
          position: absolute;
          top: 0;
          right: 0;
          width: min(300px, 80vw);
          height: 100vh;
          background: rgba(0, 0, 0, 0.95);
          backdrop-filter: blur(20px);
          border-left: 1px solid rgba(255, 255, 255, 0.1);
          animation: slideInRight 0.3s ease;
        }

        .nav-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .nav-header h3 {
          color: white;
          margin: 0;
          font-size: 1.2rem;
        }

        .close-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border: none;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.1);
          color: white;
          cursor: pointer;
        }

        .nav-list {
          list-style: none;
          padding: 1rem 0;
          margin: 0;
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          width: 100%;
          padding: 1rem 1.5rem;
          border: none;
          background: none;
          color: white;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: left;
        }

        .nav-item:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateX(10px);
        }

        .nav-item.active {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
        }

        .nav-icon {
          font-size: 1.2rem;
          flex-shrink: 0;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }

        @media (min-width: 768px) {
          .mobile-header {
            height: 70px;
          }
          
          .header-content {
            padding: 0 2rem;
          }
          
          .logo span {
            font-size: 1.3rem;
          }
        }

        @media (min-width: 994px) {
          .mobile-header {
            display: none;
          }
        }
      `}</style>
    </>
  )
}