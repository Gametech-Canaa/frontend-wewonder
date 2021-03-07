import styled from "styled-components";

export const PageLanding = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-title-in-primary);
  background: linear-gradient(
    -45deg,
    var(--color-primary),
    var(--color-primary-dark)
  );
  @media (min-width: 1100px) {
    #landing-content {
      max-width: 1100px;
      display: grid;
      grid-template-rows: 350px 1fr;
      grid-template-columns: 2fr 1fr 1fr;
      grid-template-areas:
        "logo hero hero"
        "buttons buttons total";
    }
  }
`;

export const PageLandingContent = styled.div`
  @media (min-width: 1100px) {
    .hero-image {
      grid-area: hero;
      justify-self: end;
      width: 100%;
    }
  }
  .hero-image {
    width: 90%;
  }
`;

export const LogoContainer = styled.div`
  text-align: center;
  margin-bottom: 3.2rem;
  h1 {
    font-family: "Tarantello", fantasy;
    font-weight: 900;
    font-size: 3.5rem;
    line-height: 4.6rem;
    margin-top: 0.8rem;
  }
  h2 {
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 4.6rem;
    margin-top: 0.8rem;
  }
  img {
    height: 10rem;
  }
  @media (min-width: 1100px) {
    grid-area: logo;
    align-self: center;
    margin: 0;
    text-align: left;
    h1 {
      font-family: "Tarantello", fantasy;
      font-weight: 900;
      font-size: 7rem;
      line-height: 4.6rem;
      margin-top: 0.8rem;
    }
    h2 {
      text-align: initial;
      font-size: 3.2rem;
    }
    img {
      height: 100%;
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 3.2rem 0;
  @media (min-width: 1100px) {
    grid-area: buttons;
    justify-content: flex-start;
    a {
      font-size: 2.4rem;
    }
  }
  a {
    width: 30rem;
    height: 10.4rem;
    border-radius: 0.8rem;
    font: 700 2rem Archivo;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: var(--color-button-text);
    transition: background-color 0.2s;
    img {
      width: 4rem;
      margin-right: 2.4rem;
    }
  }
  a:first-child {
    margin-right: 1.6rem;
  }
  .study {
    background: var(--color-primary-lighter);
  }
  .give-classes {
    background: var(--color-secundary);
  }
  .study:hover {
    background: var(--color-primary-light);
  }
  .give-classes:hover {
    background: var(--color-secundary-dark);
  }
`;

export const TotalConnections = styled.span`
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 1100px) {
    grid-area: total;
    justify-self: end;
    margin-top: 25rem;
  }
  img {
    margin-left: 0.8rem;
  }
`;