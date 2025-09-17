import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { useEffect, useState } from 'react'
import { GlobalStyles } from '../styles/global'
import { ThemeContextProvider } from '../context/ThemeContext'
import { ResponsiveLayout } from '../components/ResponsiveLayout'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <ThemeContextProvider>
      <ResponsiveLayout>
        <Component {...pageProps} />
      </ResponsiveLayout>
      
      <style jsx global>{`
        /* Mobile-first CSS Reset */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          font-size: 14px;
          overflow-x: hidden;
          scroll-behavior: smooth;
          -webkit-text-size-adjust: 100%;
          -ms-text-size-adjust: 100%;
        }

        body {
          font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1.6;
          overflow-x: hidden;
          width: 100%;
          max-width: 100vw;
          margin: 0;
          padding: 0;
        }

        /* Responsive font sizes */
        @media (min-width: 480px) {
          html { font-size: 15px; }
        }

        @media (min-width: 768px) {
          html { font-size: 16px; }
        }

        @media (min-width: 1024px) {
          html { font-size: 17px; }
        }

        /* Prevent horizontal scroll */
        html, body {
          max-width: 100%;
          overflow-x: hidden;
        }

        /* Touch-friendly interactive elements */
        button, a, [role="button"], input, select, textarea {
          min-height: 44px;
          touch-action: manipulation;
        }

        /* Smooth scrolling */
        @media (prefers-reduced-motion: no-preference) {
          html {
            scroll-behavior: smooth;
          }
        }

        /* iOS Safari fixes */
        @supports (-webkit-touch-callout: none) {
          body {
            -webkit-overflow-scrolling: touch;
          }
        }

        /* Prevent zoom on input focus */
        @media (max-width: 767px) {
          input, select, textarea {
            font-size: 16px !important;
            transform: translateZ(0);
          }
        }

        /* High contrast mode support */
        @media (prefers-contrast: high) {
          * {
            border-color: currentColor !important;
          }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }

        /* Focus styles for accessibility */
        *:focus-visible {
          outline: 2px solid #667eea;
          outline-offset: 2px;
        }

        /* Image optimization */
        img {
          max-width: 100%;
          height: auto;
        }

        /* Container queries support */
        .container {
          container-type: inline-size;
        }

        /* Safe area insets for notched devices */
        @supports (padding: max(0px)) {
          body {
            padding-left: max(0px, env(safe-area-inset-left));
            padding-right: max(0px, env(safe-area-inset-right));
          }
        }
      `}</style>
    </ThemeContextProvider>
  )
}