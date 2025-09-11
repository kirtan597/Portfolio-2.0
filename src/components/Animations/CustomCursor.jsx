import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

const CursorContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 9999;
`;

const CursorDot = styled.div`
  position: absolute;
  width: ${props => props.isHovered ? '30px' : '12px'};
  height: ${props => props.isHovered ? '30px' : '12px'};
  background-color: #ffd700;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.3s ease, height 0.3s ease, opacity 0.3s ease, box-shadow 0.3s ease;
  opacity: ${props => props.isVisible ? 1 : 0};
  box-shadow: ${props => props.isHovered 
    ? '0 0 20px rgba(255, 255, 0, 0.8), 0 0 40px rgba(255, 255, 0, 0.4)' 
    : '0 0 15px rgba(255, 255, 0, 0.6)'};
`;

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cursorRef = useRef(null);

  useEffect(() => {
    // Check if device supports hover (not touch device)
    const isDesktop = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    
    if (!isDesktop) return;

    const updateCursorPosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleMouseOver = (e) => {
      const target = e.target;
      const isHoverable = target && target.matches && target.matches('a, button, [role="button"], input, textarea, select, .cursor-pointer');
      setIsHovered(isHoverable);
    };

    // Add event listeners
    document.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <CursorContainer ref={cursorRef}>
      <CursorDot
        isVisible={isVisible}
        isHovered={isHovered}
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
      />
    </CursorContainer>
  );
};

export default CustomCursor;