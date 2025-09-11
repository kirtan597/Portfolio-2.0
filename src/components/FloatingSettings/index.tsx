import { FaSun, FaMoon, FaTextHeight } from 'react-icons/fa';
import { useThemeContext } from '../../context/ThemeContext';
import LanguageSwitcher from '../Language/index';
import { FloatingContainer } from './styles';
import { motion } from 'framer-motion';

export function FloatingSettings() {
  const { currentTheme, toggleTheme } = useThemeContext();

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      <FloatingContainer>
        <motion.button 
          className="theme-btn" 
          onClick={toggleTheme}
          whileHover={{ scale: 1.15, rotate: 180 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            key={currentTheme}
            initial={{ rotate: -180, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {currentTheme === 'dark' ? <FaSun /> : <FaMoon />}
          </motion.div>
        </motion.button>
        
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 0.7 }}
        >
          <LanguageSwitcher />
        </motion.div>
        
        <motion.button 
          className="text-size-btn"
          whileHover={{ scale: 1.15, rotate: [0, -10, 10, 0] }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          <FaTextHeight />
        </motion.button>
      </FloatingContainer>
    </motion.div>
  );
}