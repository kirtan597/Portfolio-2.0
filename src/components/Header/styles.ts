import styled, { css } from 'styled-components'

export const HeaderContainer = styled.header`
  position: fixed;
  top: 5px;
  left: 50%;
  transform: translateX(-50%);
  width: 96%;
  max-width: 800px;
  height: 40px;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  z-index: 1000;
  animation: slideDown 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  @media (min-width: 480px) {
    width: 95%;
    height: 52px;
    top: 10px;
  }

  @media (min-width: 768px) {
    top: 15px;
    width: 90%;
    height: 60px;
    border-radius: 30px;
    background: transparent;
    border: none;
  }

  @media (min-width: 994px) {
    top: 20px;
    width: 85%;
    height: 65px;
    border-radius: 35px;
  }
  
  @keyframes slideDown {
    0% {
      transform: translateX(-50%) translateY(-100px);
      opacity: 0;
    }
    100% {
      transform: translateX(-50%) translateY(0);
      opacity: 1;
    }
  }

  .navbar-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    padding: 0 8px;
    position: relative;

    @media (min-width: 480px) {
      padding: 0 12px;
    }

    @media (min-width: 768px) {
      padding: 0 20px;
    }

    @media (min-width: 994px) {
      padding: 0 30px;
    }
  }

  .logo-section {
    z-index: 2;
    
    .logo-text {
      font-size: 12px;
      font-weight: 700;
      color: white;
      opacity: 1;

      @media (min-width: 480px) {
        font-size: 14px;
      }

      @media (min-width: 768px) {
        font-size: 16px;
      }

      @media (min-width: 994px) {
        font-size: 18px;
      }
    }
  }

  .nav-items {
    display: flex;
    align-items: center;
    gap: 8px;
    z-index: 2;
    flex: 1;
    justify-content: center;
    margin: 0 20px;

    @media (max-width: 994px) {
      display: none;
    }
  }

  .nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 16px;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    color: ${props => props.theme.textPrimary};
    opacity: 0.8;
    position: relative;
    overflow: hidden;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
      transition: left 0.5s;
    }
    
    .nav-icon {
      font-size: 20px;
      margin-bottom: 4px;
      transition: all 0.3s ease;
    }
    
    span {
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.5px;
      transition: all 0.3s ease;
    }
    
    &:hover {
      background: rgba(255, 255, 255, 0.15);
      opacity: 1;
      transform: translateY(-3px) scale(1.05);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
      
      &::before {
        left: 100%;
      }
      
      .nav-icon {
        transform: scale(1.1);
      }
    }
    
    &.active {
      background: linear-gradient(135deg, ${props => props.theme.firstColor}, ${props => props.theme.firstColor}dd);
      color: white;
      opacity: 1;
      transform: translateY(-2px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
      
      span {
        color: white;
        font-weight: 700;
      }
      
      .nav-icon {
        color: white;
      }
    }
  }

  .theme-toggle-nav {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.3);
    background: rgba(255, 255, 255, 0.1);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 12px;
    transition: all 0.3s ease;
    margin-left: 6px;

    @media (min-width: 480px) {
      width: 32px;
      height: 32px;
      font-size: 14px;
      margin-left: 8px;
    }

    @media (min-width: 768px) {
      width: 36px;
      height: 36px;
      font-size: 16px;
      margin-left: 10px;
    }

    @media (min-width: 994px) {
      width: 40px;
      height: 40px;
      font-size: 18px;
    }
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
      transition: left 0.6s;
    }
    
    &:hover {
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2));
      border-color: rgba(255, 255, 255, 0.5);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
      transform: translateY(-3px);
      
      &::before {
        left: 100%;
      }
    }
  }




`

export const MobileIcon = styled.div`
  display: none;
  @media (max-width: 994px) {
    display: block;
    position: absolute;
    top: 50%;
    right: 8px;
    transform: translateY(-50%);
    cursor: pointer;
    z-index: 20;
    color: white;
    font-size: 16px;
    padding: 4px;
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.1);

    @media (min-width: 480px) {
      right: 12px;
      font-size: 18px;
      padding: 6px;
    }

    @media (min-width: 768px) {
      right: 16px;
      font-size: 20px;
    }
  }
`

interface Click {
  readonly open: boolean
}

export const NavMenu = styled.nav<Click>`
  @media (max-width: 994px) {
    height: 100vh;
    width: 100vw;
    background: rgba(0, 0, 0, 0.98);
    backdrop-filter: blur(20px);
    z-index: 15;
    position: fixed;
    top: 0;
    left: 0;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    transition: transform 0.3s ease-in-out;
    overflow-y: auto;
  }

  ul {
    display: none;

    @media (max-width: 994px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      gap: 1.5rem;
      padding: 2rem 1rem;
      margin: 0;
      list-style: none;
      box-sizing: border-box;

      @media (min-width: 480px) {
        gap: 2rem;
        padding: 2rem;
      }
    }

    li {
      a {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 6px;
        color: white;
        font-size: 14px;
        font-weight: 500;
        text-decoration: none;
        padding: 12px 20px;
        border-radius: 12px;
        transition: all 0.3s ease;
        min-height: 60px;
        justify-content: center;
        
        svg {
          font-size: 20px;
        }

        @media (min-width: 480px) {
          font-size: 16px;
          padding: 15px 25px;
          gap: 8px;
          min-height: 70px;
          
          svg {
            font-size: 24px;
          }
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

  
