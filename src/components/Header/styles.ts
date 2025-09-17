import styled, { css } from 'styled-components'

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 60px;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(15px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 1000;
  padding: 0;
  margin: 0;
  box-sizing: border-box;

  @media (min-width: 768px) {
    height: 70px;
    background: rgba(0, 0, 0, 0.8);
  }

  @media (min-width: 994px) {
    height: 80px;
    background: transparent;
    border: none;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    max-width: 1200px;
    border-radius: 40px;
    border: 1px solid rgba(255, 255, 255, 0.1);
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
    padding: 0 1rem;
    position: relative;
    width: 100%;
    box-sizing: border-box;

    @media (min-width: 768px) {
      padding: 0 2rem;
    }

    @media (min-width: 994px) {
      padding: 0 3rem;
    }
  }

  .logo-section {
    z-index: 2;
    
    .logo-text {
      font-size: 1.2rem;
      font-weight: 800;
      color: white;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      @media (min-width: 768px) {
        font-size: 1.4rem;
      }

      @media (min-width: 994px) {
        font-size: 1.6rem;
      }
    }
  }

  .nav-items {
    display: none;

    @media (min-width: 994px) {
      display: flex;
      align-items: center;
      gap: 1rem;
      z-index: 2;
      flex: 1;
      justify-content: center;
      margin: 0 2rem;
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
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.3);
    background: rgba(255, 255, 255, 0.1);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 1rem;
    transition: all 0.3s ease;
    margin-left: 0.5rem;
    flex-shrink: 0;

    @media (min-width: 768px) {
      width: 3rem;
      height: 3rem;
      font-size: 1.2rem;
      margin-left: 1rem;
    }

    &:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: scale(1.05);
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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  z-index: 20;
  color: white;
  font-size: 1.2rem;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  flex-shrink: 0;

  @media (min-width: 768px) {
    width: 3rem;
    height: 3rem;
    font-size: 1.4rem;
  }

  @media (min-width: 994px) {
    display: none;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.05);
  }
`

interface Click {
  readonly open: boolean
}

export const NavMenu = styled.nav<Click>`
  @media (max-width: 994px) {
    position: fixed;
    top: 60px;
    left: 0;
    width: 100vw;
    height: calc(100vh - 60px);
    background: rgba(0, 0, 0, 0.98);
    backdrop-filter: blur(20px);
    z-index: 999;
    transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-100%)')};
    transition: transform 0.3s ease-in-out;
    overflow-y: auto;
    padding: 2rem 1rem;
    box-sizing: border-box;
  }

  @media (min-width: 768px) and (max-width: 994px) {
    top: 70px;
    height: calc(100vh - 70px);
  }

  ul {
    display: none;

    @media (max-width: 994px) {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      gap: 1rem;
      padding: 0;
      margin: 0;
      list-style: none;
      box-sizing: border-box;
    }

    li {
      width: 100%;
      max-width: 300px;
      
      a {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;
        color: white;
        font-size: 1.1rem;
        font-weight: 500;
        text-decoration: none;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        transition: all 0.3s ease;
        width: 100%;
        box-sizing: border-box;
        justify-content: flex-start;
        
        svg {
          font-size: 1.5rem;
          flex-shrink: 0;
        }
        
        &:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateX(10px);
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

  
