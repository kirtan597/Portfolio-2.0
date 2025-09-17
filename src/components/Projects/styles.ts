import styled from 'styled-components'

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
  padding: 0 0.5rem;
  width: 100%;
  max-width: 100vw;
  box-sizing: border-box;

  @media (min-width: 480px) {
    padding: 0 1rem;
    margin-bottom: 4rem;
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    padding: 0 2rem;
    margin-bottom: 5rem;
  }

  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
`

export const ProjectsContent = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  position: relative;
  align-items: center;
  transition: transform 0.3s;
  overflow: hidden;
  margin: 0 auto 1.5rem auto;
  border: 2px solid ${props => props.theme.border};
  width: 100%;
  max-width: 320px;
  box-sizing: border-box;

  @media (min-width: 480px) {
    max-width: 350px;
    margin-bottom: 2rem;
  }

  @media (min-width: 768px) {
    margin: 0;
    max-width: none;
  }

  &:hover{
    border-color: ${props => props.theme.firstColor};
    border-radius: 11px;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    opacity: 1;
    object-fit: cover;

    &:hover {
      opacity: 0.5;
    }
  }

  .title {
    position: absolute;
    padding: 0 0.8rem 1.5rem 0.8rem;
    bottom: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    background: linear-gradient(rgb(0, 0, 0, 0) -60%, rgb(8, 2, 5, 15));
    opacity: 0;
    transition: 0.4s ease-in-out;

    @media (min-width: 480px) {
      padding: 0 1rem 2rem 1rem;
    }

    @media (min-width: 768px) {
      padding: 0 1rem 2.2rem 1rem;
    }

    &:hover {
      opacity: 1;
      height: 100%;
    }

    h2 {
      font-weight: 900;
      font-size: 1.4rem;
      text-align: center;
      color: ${props => props.theme.firstColor};

      @media (min-width: 480px) {
        font-size: 1.6rem;
      }

      @media (min-width: 768px) {
        font-size: 1.9rem;
      }
    }

    span {
      font-size: 1rem;
      font-weight: 700;
      color: white;
      margin-bottom: .6rem;
      text-align: center;

      @media (min-width: 480px) {
        font-size: 1.1rem;
        margin-bottom: .7rem;
      }

      @media (min-width: 768px) {
        font-size: 1.2rem;
        margin-bottom: .8rem;
      }
    }

    .tags {
      display: flex;
      flex-direction: row;

      img {
        width: 2rem;
        height: 2rem;
        margin-right: .5rem;
      }
    }
  }

  @media(min-width: 1300px) {
    max-width: 25rem;
  }


`
export const TagButton = styled.button<{ selected: boolean }>`
  background: ${props => props.theme.secondColor};
  color: ${props => props.theme.text};
  padding: .5rem 1rem;
  border-radius: 5px;
  margin-right: .5rem;
  margin-bottom: .5rem;
  border: none;
  cursor: pointer;
  transition: 0.3s;
  font-weight: 700;
  transform: ${props => props.selected ? 'scale(1.1)' : 'none'}; // scale up when selected
  box-shadow: ${props => props.selected ? '0 0 10px rgba(0,0,0,0.5)' : 'none'}; // add shadow when selected

  &:hover {
    background: ${props => props.theme.secondColor};
  }

  ${props => props.selected && `
    background: ${props.theme.firstColor};
    color: black; 
  `}

  @media(min-width: 768px) {
    margin-right: 1rem;
  }

  @media(min-width: 1200px) {
    margin-right: 1.5rem;
  }
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
    gap: 1rem;
    padding: 0 2rem;
  }
`;