import styled from 'styled-components';

export const FloatingContainer = styled.div`
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #00d4ff, #0099cc);
  border-radius: 30px;
  padding: 12px 16px;
  gap: 8px;
  z-index: 1000;
  box-shadow: 
    0 15px 35px rgba(0, 212, 255, 0.3),
    0 5px 15px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);

  .theme-btn, .text-size-btn {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    background: rgba(255, 255, 255, 0.25);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    font-size: 16px;
    position: relative;
    overflow: hidden;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
      transition: left 0.5s;
    }
    
    &:hover {
      background: rgba(255, 255, 255, 0.4);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
      
      &::before {
        left: 100%;
      }
    }
    
    &:active {
      transform: scale(0.95);
    }
  }



  @media (max-width: 768px) {
    bottom: 20px;
    padding: 10px 12px;
    gap: 6px;
    
    .theme-btn, .text-size-btn {
      width: 36px;
      height: 36px;
      font-size: 14px;
    }
  }
  
  @media (max-width: 480px) {
    bottom: 15px;
    padding: 8px 10px;
    gap: 4px;
    
    .theme-btn, .text-size-btn {
      width: 32px;
      height: 32px;
      font-size: 12px;
    }
  }
`;