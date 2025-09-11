import styled, { css, keyframes } from 'styled-components'

const torchLight = keyframes`
  0% {
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.3), 0 0 40px rgba(255, 255, 255, 0.2), 0 0 60px rgba(255, 255, 255, 0.1);
  }
  50% {
    box-shadow: 0 0 30px rgba(255, 255, 255, 0.5), 0 0 60px rgba(255, 255, 255, 0.3), 0 0 90px rgba(255, 255, 255, 0.2);
  }
  100% {
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.3), 0 0 40px rgba(255, 255, 255, 0.2), 0 0 60px rgba(255, 255, 255, 0.1);
  }
`

const slideDown = keyframes`
  0% {
    transform: translateX(-50%) translateY(-100px);
    opacity: 0;
  }
  100% {
    transform: translateX(-50%) translateY(0);
    opacity: 1;
  }
`

const ripple = keyframes`
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(4);
    opacity: 0;
  }
`

export const HeaderContainer = styled.header`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 900px;
  height: 70px;
  background: ${props => props.theme.name === 'dark' 
    ? 'rgba(15, 23, 42, 0.8)' 
    : 'rgba(255, 255, 255, 0.8)'};
  backdrop-filter: blur(20px);
  border: 1px solid ${props => props.theme.name === 'dark' 
    ? 'rgba(255, 255, 255, 0.1)' 
    : 'rgba(0, 0, 0, 0.1)'};
  border-radius: 35px;
  z-index: 1000;
  animation: ${slideDown} 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);

  .navbar-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    padding: 0 30px;
    position: relative;
  }

  .logo-section {
    z-index: 2;
    
    .logo-text {
      font-size: 22px;
      font-weight: 800;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
      
      &:hover {
        transform: scale(1.05);
      }
    }
  }

  .nav-items {
    display: flex;
    align-items: center;
    gap: 6px;
    z-index: 2;
    flex: 1;
    justify-content: center;
    margin: 0 20px;
    background: ${props => props.theme.name === 'dark' 
      ? 'rgba(30, 41, 59, 0.6)' 
      : 'rgba(248, 250, 252, 0.6)'};
    backdrop-filter: blur(10px);
    border-radius: 25px;
    padding: 8px;
    border: 1px solid ${props => props.theme.name === 'dark' 
      ? 'rgba(255, 255, 255, 0.1)' 
      : 'rgba(0, 0, 0, 0.05)'};

    @media (max-width: 994px) {
      display: none;
    }
  }

  .nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 12px 18px;
    border-radius: 18px;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    color: ${props => props.theme.textPrimary};
    opacity: 0.7;
    position: relative;
    overflow: hidden;
    background: transparent;
    
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 0;
      height: 0;
      background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%);
      border-radius: 50%;
      transform: translate(-50%, -50%);
      transition: all 0.6s ease;
      z-index: 0;
    }
    
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
      transition: left 0.8s ease;
      z-index: 1;
    }
    
    .nav-icon {
      font-size: 22px;
      margin-bottom: 4px;
      transition: all 0.4s ease;
      z-index: 2;
      position: relative;
    }
    
    span {
      font-size: 10px;
      font-weight: 600;
      letter-spacing: 0.5px;
      transition: all 0.4s ease;
      z-index: 2;
      position: relative;
    }
    
    &:hover {
      opacity: 1;
      transform: translateY(-4px) scale(1.08);
      background: ${props => props.theme.name === 'dark' 
        ? 'rgba(255, 255, 255, 0.1)' 
        : 'rgba(0, 0, 0, 0.05)'};
      
      &::before {
        width: 120px;
        height: 120px;
        animation: ${torchLight} 2s infinite;
      }
      
      &::after {
        left: 100%;
      }
      
      .nav-icon {
        transform: scale(1.2) rotate(5deg);
        filter: drop-shadow(0 0 8px rgba(102, 126, 234, 0.6));
      }
      
      span {
        transform: translateY(-1px);
        font-weight: 700;
      }
    }
    
    &.active {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      opacity: 1;
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4), 0 0 20px rgba(102, 126, 234, 0.3);
      animation: ${torchLight} 3s infinite;
      
      &::before {
        width: 100px;
        height: 100px;
        background: radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 70%);
      }
      
      span {
        color: white;
        font-weight: 700;
        text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
      }
      
      .nav-icon {
        color: white;
        filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.8));
      }
    }
  }

  .theme-toggle-nav {
    width: 55px;
    height: 55px;
    border-radius: 50%;
    border: 2px solid ${props => props.theme.name === 'dark' 
      ? 'rgba(255, 255, 255, 0.2)' 
      : 'rgba(0, 0, 0, 0.1)'};
    background: ${props => props.theme.name === 'dark' 
      ? 'linear-gradient(135deg, rgba(255, 193, 7, 0.2), rgba(255, 152, 0, 0.2))' 
      : 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2))'};
    backdrop-filter: blur(10px);
    color: ${props => props.theme.textPrimary};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 22px;
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    margin-left: 15px;
    position: relative;
    overflow: hidden;
    
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 0;
      height: 0;
      background: radial-gradient(circle, rgba(255, 193, 7, 0.3) 0%, transparent 70%);
      border-radius: 50%;
      transform: translate(-50%, -50%);
      transition: all 0.6s ease;
    }
    
    &:hover {
      transform: translateY(-4px) scale(1.1);
      box-shadow: 0 10px 30px rgba(255, 193, 7, 0.3);
      border-color: rgba(255, 193, 7, 0.5);
      
      &::before {
        width: 80px;
        height: 80px;
        animation: ${torchLight} 2s infinite;
      }
    }
    
    &:active {
      transform: translateY(-2px) scale(1.05);
    }
  }

  @media (max-width: 994px) {
    top: 15px;
    width: 95%;
    height: 60px;
    
    .navbar-container {
      padding: 0 25px;
    }
    
    .logo-section .logo-text {
      font-size: 18px;
    }
    
    .theme-toggle-nav {
      width: 50px;
      height: 50px;
      font-size: 20px;
    }
  }
  
  @media (max-width: 480px) {
    width: 98%;
    height: 55px;
    
    .navbar-container {
      padding: 0 20px;
    }
    
    .logo-section .logo-text {
      font-size: 16px;
    }
    
    .theme-toggle-nav {
      width: 45px;
      height: 45px;
      font-size: 18px;
    }
  }
`

export const MobileIcon = styled.div`
  display: none;
  @media (max-width: 994px) {
    display: block;
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    cursor: pointer;
    z-index: 20;
    color: ${props => props.theme.textPrimary};
  }
`

interface Click {
  readonly open: boolean
}

export const NavMenu = styled.nav<Click>`
  @media (max-width: 994px) {
    height: 100vh;
    width: 100vw;
    background: rgba(0, 0, 0, 0.95);
    backdrop-filter: blur(20px);
    z-index: 10;
    position: fixed;
    top: 0;
    left: 0;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    transition: transform 0.5s ease-in-out;
  }

  ul {
    display: none;

    @media (max-width: 994px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      gap: 2rem;
      padding: 0;
      margin: 0;
      list-style: none;
    }

    li {
      a {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        color: white;
        font-size: 16px;
        font-weight: 500;
        text-decoration: none;
        padding: 15px 25px;
        border-radius: 15px;
        transition: all 0.3s ease;
        
        svg {
          font-size: 24px;
        }
        
        &:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
        }
      }
    }
  }
`

export const Icons = styled.div`
  @media (min-width: 995px) {
    display: none;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  position: absolute;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  
  a {
    color: white;
    font-size: 24px;
    padding: 15px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
    
    &:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: translateY(-2px);
    }
  }
`

  
