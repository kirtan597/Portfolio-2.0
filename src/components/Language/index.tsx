import { useRouter } from 'next/router';
import { motion } from 'framer-motion';


const LanguageSwitcher = () => {
  const router = useRouter();
  const { locale } = router;

  const changeLanguage = (lang: string) => {
    router.push(router.pathname, router.asPath, { locale: lang });
  };

  return (
    <div style={{ display: 'flex', gap: '6px' }}>
      <motion.button 
        onClick={() => changeLanguage('en')}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ 
          background: locale === 'en' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(255, 255, 255, 0.25)',
          scale: locale === 'en' ? 1.05 : 1
        }}
        transition={{ duration: 0.2 }}
        style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          border: locale === 'en' ? '2px solid rgba(255, 255, 255, 0.6)' : 'none',
          color: 'white',
          fontSize: '13px',
          fontWeight: 'bold',
          cursor: 'pointer',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        EN
      </motion.button>
      <motion.button 
        onClick={() => changeLanguage('gu')}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ 
          background: locale === 'gu' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(255, 255, 255, 0.25)',
          scale: locale === 'gu' ? 1.05 : 1
        }}
        transition={{ duration: 0.2 }}
        style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          border: locale === 'gu' ? '2px solid rgba(255, 255, 255, 0.6)' : 'none',
          color: 'white',
          fontSize: '13px',
          fontWeight: 'bold',
          cursor: 'pointer',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        ગુ
      </motion.button>
    </div>
  );
};

export default LanguageSwitcher;