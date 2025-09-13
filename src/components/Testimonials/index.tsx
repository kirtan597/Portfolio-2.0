import React, { useEffect, useState } from 'react';
import { ChatCenteredText } from 'phosphor-react';
import { Container, Title } from '../../styles/styles';
import { useRouter } from 'next/router';
import styled, { keyframes } from 'styled-components';
import testimonials from '../../data/testimonials';

const shimmer = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

const SliderContainer = styled.div`
  position: relative;
  overflow: hidden;
  margin: 2rem 0;
  padding: 2rem 0;
`;

const SliderWrapper = styled.div`
  display: flex;
  transition: transform 0.6s ease;
  transform: translateX(${props => props.currentSlide * -100}%);
`;

const TestimonialSlide = styled.div`
  min-width: 100%;
  padding: 0 2rem;
  display: flex;
  justify-content: center;
`;

const TestimonialCard = styled.div`
  background: linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 20px;
  padding: 2.5rem;
  max-width: 700px;
  width: 100%;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #3b82f6, transparent, #9333ea, transparent, #06b6d4);
    border-radius: 20px;
    z-index: -1;
    animation: ${shimmer} 3s linear infinite;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    animation: ${shimmer} 2s ease-in-out infinite;
  }
  
  @media (max-width: 768px) {
    padding: 2rem;
    margin: 0 1rem;
  }
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
`;

const ProfileImage = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid #3b82f6;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    inset: -3px;
    border-radius: 50%;
    background: linear-gradient(45deg, #3b82f6, #9333ea, #06b6d4);
    animation: ${shimmer} 2s linear infinite;
    z-index: -1;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(1.1) contrast(1.1);
  }
`;

const ProfileInfo = styled.div`
  flex: 1;
  
  h3 {
    color: #3b82f6;
    font-size: 1.8rem;
    font-weight: 700;
    margin: 0 0 0.5rem 0;
    background: linear-gradient(45deg, #3b82f6, #9333ea);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  p {
    color: #06b6d4;
    font-size: 1rem;
    margin: 0;
    font-weight: 500;
  }
`;

const TestimonialText = styled.div`
  position: relative;
  text-align: center;
  
  .quote {
    font-size: 3rem;
    color: #3b82f6;
    opacity: 0.3;
    position: absolute;
    top: -15px;
    left: 15px;
  }
  
  p {
    color: ${props => props.theme.textPrimary || (props.theme.background === '#ffffff' ? '#1f2937' : '#f9fafb')};
    line-height: 1.7;
    font-size: 1.1rem;
    margin: 0;
    font-style: italic;
    position: relative;
    z-index: 1;
    font-weight: 600;
    text-shadow: ${props => props.theme.background === '#ffffff' ? '0 1px 2px rgba(0,0,0,0.1)' : '0 1px 2px rgba(255,255,255,0.1)'};
  }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-8px); }
  60% { transform: translateY(-4px); }
`;

const StarsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.3rem;
  margin-top: 1.5rem;
  
  span {
    font-size: 1.3rem;
    filter: drop-shadow(0 0 8px #ffd700);
    animation: ${bounce} 2s ease-in-out infinite;
    animation-delay: ${props => props.index * 0.1}s;
    cursor: pointer;
    
    &:hover {
      transform: scale(1.2);
      filter: drop-shadow(0 0 12px #ffd700);
    }
  }
`;

const NavigationDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const Dot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: ${props => props.active ? '#3b82f6' : 'rgba(59, 130, 246, 0.3)'};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #3b82f6;
    transform: scale(1.2);
  }
`;

export function Testimonials() {
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState<'en' | 'ta'>('en');
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const { locale } = router;
    setCurrentLang(locale as 'en' | 'ta');
  }, [router.locale]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <Title>
        {currentLang === 'ta' ? 'மக்கள் என்ன சொல்கிறார்கள்' : 'What people say'}
        <span>
          <ChatCenteredText />{currentLang === 'ta' ? 'சான்றுகள்' : 'Testimonials'}
        </span>
      </Title>
      
      <SliderContainer>
        <SliderWrapper currentSlide={currentSlide}>
          {testimonials.map((testimonial) => (
            <TestimonialSlide key={testimonial.id}>
              <TestimonialCard>
                <ProfileSection>
                  <ProfileImage>
                    <img src={testimonial.image} alt={testimonial.name} />
                  </ProfileImage>
                  <ProfileInfo>
                    <h3>{testimonial.name}</h3>
                    <p>{testimonial.role}</p>
                  </ProfileInfo>
                </ProfileSection>
                
                <TestimonialText>
                  <div className="quote">"</div>
                  <p>{testimonial.testimonial}</p>
                </TestimonialText>
                
                <StarsContainer>
                  {[...Array(5)].map((_, i) => (
                    <span key={i} style={{ animationDelay: `${i * 0.1}s` }}>⭐</span>
                  ))}
                </StarsContainer>
              </TestimonialCard>
            </TestimonialSlide>
          ))}
        </SliderWrapper>
      </SliderContainer>

      <NavigationDots>
        {testimonials.map((_, index) => (
          <Dot
            key={index}
            active={index === currentSlide}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </NavigationDots>
    </Container>
  );
}

export default Testimonials;