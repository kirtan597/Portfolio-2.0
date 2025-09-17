import { useState, useEffect } from 'react'
import { Header } from '../Header'
import { MobileHeader } from '../Header/index_mobile'
import { Projects } from '../Projects'
import { MobileProjects } from '../Projects/index_mobile'

export function ResponsiveLayout({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 994)
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  return (
    <>
      {/* Render appropriate header based on screen size */}
      {isMobile ? <MobileHeader /> : <Header />}
      
      {/* Main content with proper spacing for fixed header */}
      <main style={{
        paddingTop: isMobile ? '60px' : '0px',
        minHeight: '100vh',
        width: '100%',
        overflow: 'hidden'
      }}>
        {children}
      </main>
      
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }
        
        html {
          overflow-x: hidden;
          scroll-behavior: smooth;
        }
        
        body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
          width: 100%;
          max-width: 100vw;
        }
        
        /* Ensure no elements exceed viewport width */
        * {
          max-width: 100vw;
        }
        
        /* Mobile-first responsive typography */
        html {
          font-size: 14px;
        }
        
        @media (min-width: 480px) {
          html {
            font-size: 15px;
          }
        }
        
        @media (min-width: 768px) {
          html {
            font-size: 16px;
          }
        }
        
        /* Smooth scrolling for all browsers */
        @media (prefers-reduced-motion: no-preference) {
          html {
            scroll-behavior: smooth;
          }
        }
        
        /* Touch-friendly interactive elements */
        button, a, [role="button"] {
          min-height: 44px;
          min-width: 44px;
        }
        
        /* Prevent zoom on input focus on iOS */
        input, select, textarea {
          font-size: 16px;
        }
        
        @media (max-width: 767px) {
          input, select, textarea {
            font-size: 16px !important;
          }
        }
      `}</style>
    </>
  )
}

// Hook to use responsive projects component
export function useResponsiveProjects() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  return isMobile ? MobileProjects : Projects
}