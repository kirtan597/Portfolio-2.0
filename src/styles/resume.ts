import styled from 'styled-components';


export const PageSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  padding: 0;
  margin: 0;
  background: transparent;

  iframe {
    width: 95%;
    max-width: 800px;
    border: none;
    height: 80vh;
    min-height: 600px;
    border-radius: 10px;
    box-shadow: 0 8px 25px rgba(87, 0, 127, 0.15);
    transition: all 0.3s ease;
    filter: contrast(1.1) brightness(1.05);
    background: ${props => props.theme.background};
    
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 20px 40px rgba(87, 0, 127, 0.25);
      filter: contrast(1.15) brightness(1.1);
    }
    
    @media (min-width: 768px) {
      width: 90%;
      height: 85vh;
      min-height: 700px;
    }
    
    @media (min-width: 1024px) {
      width: 85%;
      height: 90vh;
      min-height: 800px;
    }
  }
`;