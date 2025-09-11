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
  useEffect(() => {
    const { locale } = router;
    setCurrentLang(locale as 'en' | 'gu');
  }, [router.locale]);

  return (
    <HeaderContainer>
      <div className="navbar-container">
        <div className="logo-section">
          <span className="logo-text">Kirtan Panchal</span>
        </div>
        
        <nav className="nav-items">
          <Link href={'/'}>
            <motion.div 
              className="nav-item active"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ 
                scale: 0.95,
                boxShadow: "0 0 20px #00d4ff, inset 0 0 20px rgba(0, 212, 255, 0.3)"
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
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
          </Link>
          
          <Link href={'/projects'}>
            <motion.div 
              className="nav-item"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ 
                scale: 0.95,
                boxShadow: "0 0 20px #00d4ff, inset 0 0 20px rgba(0, 212, 255, 0.3)"
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
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
          </Link>
          
          <Link href={'/resume'}>
            <motion.div 
              className="nav-item"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ 
                scale: 0.95,
                boxShadow: "0 0 20px #00d4ff, inset 0 0 20px rgba(0, 212, 255, 0.3)"
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
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
          </Link>
          
          <Link href={'/about'}>
            <motion.div 
              className="nav-item"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ 
                scale: 0.95,
                boxShadow: "0 0 20px #00d4ff, inset 0 0 20px rgba(0, 212, 255, 0.3)"
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
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
          </Link>
          
          <Link href={'/contact'}>
            <motion.div 
              className="nav-item"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ 
                scale: 0.95,
                boxShadow: "0 0 20px #00d4ff, inset 0 0 20px rgba(0, 212, 255, 0.3)"
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <motion.div
                whileHover={{ rotate: 720 }}
                whileTap={{ rotate: 1080 }}
                transition={{ duration: 0.4, type: "spring" }}
              >
                <FiMail className="nav-icon" />
              </motion.div>
              <span>Contact Me</span>
            </motion.div>
          </Link>
          
          <motion.button 
            className="theme-toggle-nav"
            onClick={toggleTheme}
            whileHover={{ scale: 1.15, rotate: 360 }}
            whileTap={{ 
              scale: 0.85,
              boxShadow: "0 0 25px #00d4ff, 0 0 50px #00d4ff"
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
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
          <li>
            <Link href={'/projects'}>
              <FaProjectDiagram />
              <span>Projects</span>
            </Link>
          </li>
          <li>
            <Link href={'/resume'}>
              <MdOutlineWorkOutline />
              <span>Skills</span>
            </Link>
          </li>
          <li>
            <Link href={'/about'}>
              <FiUser />
              <span>About</span>
            </Link>
          </li>
          <li>
            <Link href={'/contact'}>
              <FiMail />
              <span>Contact</span>
            </Link>
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