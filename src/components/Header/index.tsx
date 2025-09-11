import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { HeaderContainer, MobileIcon, NavMenu, Icons } from './styles'
import { List, X } from 'phosphor-react'
import { FiGithub, FiLinkedin, FiInstagram, FiHome, FiUser, FiBriefcase, FiMail, FiCode } from 'react-icons/fi'
import { FaWhatsapp, FaProjectDiagram, FaRocket } from 'react-icons/fa'
import { MdOutlineWorkOutline, MdDashboard } from 'react-icons/md'
import { Button } from '../../styles/styles'
import { useThemeContext } from '../../context/ThemeContext'
import { FaSun, FaMoon } from 'react-icons/fa';
import LanguageSwitcher from '../Language/index';
import Settings from '../Settings/SettingsButton';
import AudioPlayer from '../Music/AudioPlayer';
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { motion, AnimatePresence } from 'framer-motion'

export function Header() {
  const [open, setOpen] = useState(false);
  const { currentTheme, toggleTheme } = useThemeContext(); 
  const handleOpen = () => {
    setOpen(!open);
  };
  const { t, i18n } = useTranslation('common');
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState<'en' | 'gu'>('en');
  const [activeSection, setActiveSection] = useState('home');
  
  const scrollToSection = (sectionId: string) => {
    if (router.pathname !== '/') {
      router.push('/');
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  useEffect(() => {
    const { locale } = router;
    setCurrentLang(locale as 'en' | 'gu');
  }, [router.locale]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', icon: FiHome, label: 'Home', action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
    { id: 'projects', icon: FaRocket, label: 'Projects', action: () => scrollToSection('projects') },
    { id: 'skills', icon: FiCode, label: 'Skills', action: () => scrollToSection('skills') },
    { id: 'about', icon: FiUser, label: 'About', action: () => scrollToSection('about') },
    { id: 'contact', icon: FiMail, label: 'Contact', action: () => scrollToSection('contact') }
  ];

  return (
    <HeaderContainer>
      <div className="navbar-container">
        <motion.div 
          className="logo-section"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
        >
          <span className="logo-text">Kirtan Panchal</span>
        </motion.div>
        
        <nav className="nav-items">
          <AnimatePresence>
            {navItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.id}
                  className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => {
                    item.action();
                    setActiveSection(item.id);
                  }}
                  initial={{ opacity: 0, y: 30, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1, 
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -8,
                    transition: { type: "spring", stiffness: 400, damping: 10 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    whileHover={{ 
                      rotate: [0, -15, 15, -15, 0],
                      scale: 1.3
                    }}
                    transition={{ duration: 0.6, type: "spring" }}
                  >
                    <IconComponent className="nav-icon" />
                  </motion.div>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    {item.label}
                  </motion.span>
                </motion.div>
              );
            })}
          </AnimatePresence>
          
          <motion.button 
            className="theme-toggle-nav"
            onClick={toggleTheme}
            whileHover={{ 
              scale: 1.15, 
              y: -8, 
              rotate: 180,
              transition: { type: "spring", stiffness: 400, damping: 10 }
            }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.8, type: "spring" }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTheme}
                initial={{ rotate: -180, opacity: 0, scale: 0 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 180, opacity: 0, scale: 0 }}
                transition={{ duration: 0.4, type: "spring" }}
              >
                {currentTheme === 'dark' ? <FaSun /> : <FaMoon />}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </nav>
      </div>
      
      <MobileIcon onClick={handleOpen}>
        <AnimatePresence mode="wait">
          <motion.div
            key={open ? 'close' : 'open'}
            initial={{ rotate: 0, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            exit={{ rotate: 90, scale: 0 }}
            transition={{ duration: 0.2 }}
          >
            {open ? (
              <X size={30} weight="bold" />
            ) : (
              <List size={30} weight="bold" />
            )}
          </motion.div>
        </AnimatePresence>
      </MobileIcon>
      
      <NavMenu onClick={handleOpen} open={open}>
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: open ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {navItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.li
                key={item.id}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: open ? 0 : 100, opacity: open ? 1 : 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                onClick={() => {
                  item.action();
                  setActiveSection(item.id);
                  setOpen(false);
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                  <IconComponent />
                  <span>{item.label}</span>
                </div>
              </motion.li>
            );
          })}
        </motion.ul>
        <Icons>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: open ? 0 : 50, opacity: open ? 1 : 0 }}
            transition={{ delay: 0.5, duration: 0.3 }}
          >
            <Link href={'https://github.com/kirtan597'} target="_blank">
              <FiGithub />
            </Link>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: open ? 0 : 50, opacity: open ? 1 : 0 }}
            transition={{ delay: 0.6, duration: 0.3 }}
          >
            <Link href={'https://linkedin.com/in/kirtan-panchal-309760320'} target="_blank">
              <FiLinkedin />
            </Link>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: open ? 0 : 50, opacity: open ? 1 : 0 }}
            transition={{ delay: 0.7, duration: 0.3 }}
          >
            <Link href={'https://www.instagram.com/kirtannn_18/'} target="_blank">
              <FiInstagram />
            </Link>
          </motion.div>
        </Icons>
      </NavMenu>
    </HeaderContainer>
  );
}