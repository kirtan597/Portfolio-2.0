import styled from "styled-components";

export const CardContactContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;

  .ellipse{
    @media(max-width: 1200px){
      display: none;
    }
    
    position: absolute;
    left: -12%;
    top: 1%;
    width: 10rem;
  }
`

export const CardContactContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 1rem;

  @media(min-width: 1200px) {
    flex-direction: row;
  }

  .description {
    max-width: 35rem;
    text-align: start;

    h2 {
      color: ${props => props.theme.secondColor};
      font-size: 1.5rem;
      margin-bottom: 1rem;

      @media(min-width: 768px) {
        font-size: 1.8rem;  
      }

      @media(min-width: 994px) {
        font-size: 2rem;  
      }
    }

    p {
      color: ${props => props.theme.gray};
      max-width: 35rem;
    }
  }

  .contact {
    max-width: 300px;
    
    img {
      width: 100%;
      max-width: 300px;
      height: auto;
    }
  }
  }

  

`