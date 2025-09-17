import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: background-color 0.2s ease, color 0.2s ease;
    overflow-x: hidden;
    cursor: none !important;
    will-change: background-color, color;
  }
    
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    cursor: none !important;
  }

  *::before, *::after {
    cursor: none !important;
  }

  /* Show default cursor on touch devices */
  @media (hover: none) and (pointer: coarse) {
    body, * {
      cursor: auto !important;
    }
  }

  /* Enhanced focus states for accessibility */
  *:focus-visible {
    outline: 2px solid #00d9ff !important;
    outline-offset: 2px !important;
  }

  html {
    scroll-behavior: smooth;
    overflow-x: hidden;
    width: 100%;
    max-width: 100vw;
  }

  html.normal-scroll {
    scroll-behavior: auto;
  }

  body {
    background: ${props => props.theme.background};
    color: ${props => props.theme.textPrimary};
    font-family: 'Poppins', sans-serif;
    overflow-x: hidden;
    width: 100%;
    max-width: 100vw;
    margin: 0;
    padding: 0;
  }

  /* Ensure all containers respect viewport width */
  * {
    max-width: 100vw;
  }

  /* Mobile-first responsive containers */
  .container {
    width: 100%;
    max-width: 100vw;
    padding: 0 1rem;
    margin: 0 auto;
    box-sizing: border-box;
  }

  @media (min-width: 768px) {
    .container {
      padding: 0 2rem;
    }
  }

  @media (min-width: 1024px) {
    .container {
      max-width: 1200px;
      padding: 0 3rem;
    }
  }

  ul {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ::-webkit-scrollbar {
    width: 0.5rem;
    background-color: ${props => props.theme.backgroundSecond};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.firstColor};
  }

  /* Interactive element classes for cursor effects */
  .cursor-pointer {
    /* Applied via JavaScript */
  }

  .cursor-text {
    /* Applied via JavaScript */
  }

  .cursor-grab {
    /* Applied via JavaScript */
  }

  .cursor-zoom {
    /* Applied via JavaScript */
  }

  .cursor-help {
    /* Applied via JavaScript */
  }

  .cursor-code {
    /* Applied via JavaScript */
  }

  .cursor-link {
    /* Applied via JavaScript */
  }

  /* Emoji bounce animation */
  @keyframes emojiBounce {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0) scale(1); }
    40% { transform: translateY(-5px) scale(1.1); }
    60% { transform: translateY(-2px) scale(1.05); }
  }

  /* Apply to all emojis */
  span:has-text("🎞"), span:has-text("🎵"), span:has-text("🛍"), span:has-text("👋"), span:has-text("🚀"), span:has-text("📂"),
  .emoji, [data-emoji] {
    display: inline-block;
    animation: emojiBounce 2s ease-in-out infinite;
    animation-delay: calc(var(--emoji-index, 0) * 0.2s);
  }

  /* Optimized transitions */
  a, button, input, textarea, [role="button"], [tabindex] {
    transition: transform 0.15s ease, opacity 0.15s ease;
    will-change: transform;
  }

  /* Reduced hover effects */
  a:hover, button:hover, [role="button"]:hover {
    transform: translateY(-1px);
  }

  /* Performance optimizations */
  * {
    backface-visibility: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Reduce motion for users who prefer it */
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`