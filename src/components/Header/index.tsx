import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { HeaderContainer, MobileIcon, NavMenu, Icons } from './styles'
import { List, X } from 'phosphor-react'
import { FiGithub, FiLinkedin, FiInstagram, FiHome, FiUser, FiBriefcase, FiMail } from 'react-icons/fi'
import { FaWhatsapp, FaProjectDiagram } from 'react-icons/fa'
import { MdOutlineWorkOutline } from 'react-icons/md'
import { Button } from '../../styles/styles'
import { useThemeContext } from '../../context/ThemeContext'
import { FaSun, FaMoon } from 'react-icons/fa';
import LanguageSwitcher from '../Language/index';
import Settings from '../Settings/SettingsButton';
import AudioPlayer from '../Music/AudioPlayer';
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

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

  return (
    <HeaderContainer>
      <div className="navbar-container">
        <div className="logo-section">
          <span className="logo-text">Kirtan Panchal</span>
        </div>
        
        <nav className="nav-items" style={{
          display: 'flex',
          gap: '1rem',
          alignItems: 'center'
        }}>
          <motion.div 
            className={`nav-item ${activeSection === 'home' ? 'active' : ''}`}
            onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setActiveSection('home'); }}
            whileHover={{ scale: 1.05, y: -8, boxShadow: '0 15px 35px rgba(102, 126, 234, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            style={{
              cursor: 'pointer',
              background: activeSection === 'home' ? `linear-gradient(135deg, ${currentTheme === 'dark' ? '#667eea' : '#4f46e5'}, ${currentTheme === 'dark' ? '#764ba2' : '#7c3aed'})` : currentTheme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '15px',
              padding: '12px 16px',
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)'
            }}
          >
            <motion.div
              whileHover={{ rotate: 720 }}
              whileTap={{ rotate: 1080 }}
              transition={{ duration: 0.4, type: "spring" }}
            >
              <FiHome className="nav-icon" />
            </motion.div>
            <span>Home</span>
          </motion.div>
          
          <motion.div 
            className={`nav-item ${activeSection === 'projects' ? 'active' : ''}`}
            onClick={() => scrollToSection('projects')}
            whileHover={{ scale: 1.05, y: -8, boxShadow: '0 15px 35px rgba(102, 126, 234, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            style={{
              cursor: 'pointer',
              background: activeSection === 'projects' ? `linear-gradient(135deg, ${currentTheme === 'dark' ? '#667eea' : '#4f46e5'}, ${currentTheme === 'dark' ? '#764ba2' : '#7c3aed'})` : currentTheme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '15px',
              padding: '12px 16px',
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)'
            }}
          >
            <motion.div
              whileHover={{ rotate: 720 }}
              whileTap={{ rotate: 1080 }}
              transition={{ duration: 0.4, type: "spring" }}
            >
              <FaProjectDiagram className="nav-icon" />
            </motion.div>
            <span>Projects</span>
          </motion.div>
          
          <motion.div 
            className={`nav-item ${activeSection === 'skills' ? 'active' : ''}`}
            onClick={() => scrollToSection('skills')}
            whileHover={{ scale: 1.05, y: -8, boxShadow: '0 15px 35px rgba(102, 126, 234, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            style={{
              cursor: 'pointer',
              background: activeSection === 'skills' ? `linear-gradient(135deg, ${currentTheme === 'dark' ? '#667eea' : '#4f46e5'}, ${currentTheme === 'dark' ? '#764ba2' : '#7c3aed'})` : currentTheme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '15px',
              padding: '12px 16px',
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)'
            }}
          >
            <motion.div
              whileHover={{ rotate: 720 }}
              whileTap={{ rotate: 1080 }}
              transition={{ duration: 0.4, type: "spring" }}
            >
              <MdOutlineWorkOutline className="nav-icon" />
            </motion.div>
            <span>Skills</span>
          </motion.div>
          
          <motion.div 
            className={`nav-item ${activeSection === 'about' ? 'active' : ''}`}
            onClick={() => scrollToSection('about')}
            whileHover={{ scale: 1.05, y: -8, boxShadow: '0 15px 35px rgba(102, 126, 234, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            style={{
              cursor: 'pointer',
              background: activeSection === 'about' ? `linear-gradient(135deg, ${currentTheme === 'dark' ? '#667eea' : '#4f46e5'}, ${currentTheme === 'dark' ? '#764ba2' : '#7c3aed'})` : currentTheme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '15px',
              padding: '12px 16px',
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)'
            }}
          >
            <motion.div
              whileHover={{ rotate: 720 }}
              whileTap={{ rotate: 1080 }}
              transition={{ duration: 0.4, type: "spring" }}
            >
              <FiUser className="nav-icon" />
            </motion.div>
            <span>About</span>
          </motion.div>
          
          <motion.div 
            className={`nav-item ${activeSection === 'contact' ? 'active' : ''}`}
            onClick={() => scrollToSection('contact')}
            whileHover={{ scale: 1.05, y: -8, boxShadow: '0 15px 35px rgba(102, 126, 234, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            style={{
              cursor: 'pointer',
              background: activeSection === 'contact' ? `linear-gradient(135deg, ${currentTheme === 'dark' ? '#667eea' : '#4f46e5'}, ${currentTheme === 'dark' ? '#764ba2' : '#7c3aed'})` : currentTheme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '15px',
              padding: '12px 16px',
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)'
            }}
          >
            <motion.div
              whileHover={{ rotate: 720 }}
              whileTap={{ rotate: 1080 }}
              transition={{ duration: 0.4, type: "spring" }}
            >
              <FiMail className="nav-icon" />
            </motion.div>
            <span>Contact</span>
          </motion.div>
          
          <motion.button 
            className="theme-toggle-nav"
            onClick={toggleTheme}
            whileHover={{ scale: 1.05, y: -8, rotate: 180, boxShadow: '0 15px 35px rgba(255, 193, 7, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            style={{
              background: currentTheme === 'dark' ? 'linear-gradient(135deg, #ffc107, #ff9800)' : 'linear-gradient(135deg, #f59e0b, #ea580c)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '15px',
              padding: '12px 16px',
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
              color: 'white'
            }}
          >
            <motion.div
              key={currentTheme}
              initial={{ rotate: -360, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 360, opacity: 0 }}
              transition={{ duration: 0.6, type: "spring" }}
            >
              {currentTheme === 'dark' ? <FaSun /> : <FaMoon />}
            </motion.div>
          </motion.button>
        </nav>
        

      </div>
      
      <MobileIcon onClick={handleOpen}>
        {open ? (
          <X size={30} weight="bold" />
        ) : (
          <List size={30} weight="bold" />
        )}
      </MobileIcon>
      
      <NavMenu onClick={handleOpen} open={open}>
        <ul>
          <li>
            <Link href={'/'}>
              <FiHome />
              <span>Home</span>
            </Link>
          </li>
          <li onClick={() => scrollToSection('projects')}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
              <FaProjectDiagram />
              <span>Projects</span>
            </div>
          </li>
          <li onClick={() => scrollToSection('skills')}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
              <MdOutlineWorkOutline />
              <span>Skills</span>
            </div>
          </li>
          <li onClick={() => scrollToSection('about')}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
              <FiUser />
              <span>About</span>
            </div>
          </li>
          <li onClick={() => scrollToSection('contact')}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
              <FiMail />
              <span>Contact</span>
            </div>
          </li>
        </ul>
        <Icons>
          <Link href={'https://github.com/kirtan597'} target="_blank">
            <FiGithub />
          </Link>
          <Link href={'https://linkedin.com/in/kirtan-panchal-309760320'} target="_blank">
            <FiLinkedin />
          </Link>
          <Link href={'https://www.instagram.com/kirtannn_18/'} target="_blank">
            <FiInstagram />
          </Link>
        </Icons>
      </NavMenu>
    </HeaderContainer>
  );
}