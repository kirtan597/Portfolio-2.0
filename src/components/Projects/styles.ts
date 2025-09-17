import styled from 'styled-components'

export const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  gap: 1rem;
  width: 100%;
  max-width: 100vw;
  padding: 0 1rem;
  margin-bottom: 2rem;
  box-sizing: border-box;

  @media (min-width: 768px) {
    gap: 1.5rem;
    padding: 0 2rem;
    margin-bottom: 3rem;
  }

  @media (min-width: 1200px) {
    gap: 2rem;
    padding: 0 3rem;
    margin-bottom: 4rem;
  }
`

export const ProjectsContent = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  border: 1px solid ${props => props.theme.border};
  background: ${props => props.theme.backgroundSecond};
  transition: all 0.3s ease;
  box-sizing: border-box;
  
  /* Mobile: Full width with min constraints */
  width: 100%;
  min-width: 280px;
  max-width: 100%;
  aspect-ratio: 16/10;

  /* Tablet: 2 columns */
  @media (min-width: 768px) {
    width: calc(50% - 0.75rem);
    min-width: 300px;
  }

  /* Desktop: 3 columns */
  @media (min-width: 1200px) {
    width: calc(33.333% - 1.33rem);
    min-width: 320px;
    max-width: 400px;
  }

  &:hover {
    border-color: ${props => props.theme.firstColor};
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }

  img {
    width: 100%;
    height: 60%;
    object-fit: cover;
    border-radius: 12px 12px 0 0;
    transition: all 0.3s ease;

    &:hover {
      opacity: 0.8;
      transform: scale(1.05);
    }
  }

  .title {
    position: relative;
    padding: 1rem;
    height: 40%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    background: ${props => props.theme.backgroundSecond};
    box-sizing: border-box;

    h2 {
      font-weight: 700;
      font-size: clamp(1rem, 4vw, 1.3rem);
      color: ${props => props.theme.firstColor};
      margin: 0 0 0.5rem 0;
      line-height: 1.2;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    span {
      font-size: clamp(0.8rem, 3vw, 0.95rem);
      font-weight: 500;
      color: ${props => props.theme.textSecondary};
      line-height: 1.4;
      margin-bottom: 0.5rem;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    .tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.3rem;
      margin-top: auto;

      img {
        width: clamp(1.2rem, 3vw, 1.5rem);
        height: clamp(1.2rem, 3vw, 1.5rem);
        border-radius: 4px;
        transition: transform 0.2s ease;

        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }

`
export const TagButton = styled.button<{ selected: boolean }>`
  background: ${props => props.theme.secondColor};
  color: ${props => props.theme.text};
  padding: 0.5rem 1rem;
  border-radius: 25px;
  border: 1px solid ${props => props.theme.border};
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
  font-size: clamp(0.8rem, 2.5vw, 0.9rem);
  white-space: nowrap;
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  transform: ${props => props.selected ? 'scale(1.05)' : 'scale(1)'};
  box-shadow: ${props => props.selected ? '0 4px 12px rgba(0,0,0,0.2)' : '0 2px 4px rgba(0,0,0,0.1)'};

  &:hover {
    background: ${props => props.theme.hover};
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  }

  &:active {
    transform: scale(0.98);
  }

  ${props => props.selected && `
    background: ${props.theme.firstColor};
    color: white;
    border-color: ${props.theme.firstColor};
  `}
`;

export const TagContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0 1rem;
  margin-bottom: 2rem;
  width: 100%;
  max-width: 100vw;
  box-sizing: border-box;

  @media (min-width: 768px) {
    gap: 0.75rem;
    padding: 0 2rem;
  }

  @media (min-width: 1200px) {
    gap: 1rem;
    padding: 0 3rem;
  }
`;