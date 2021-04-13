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
      grid-template-columns: 2fr 1fr 1.5fr;
      grid-template-areas:
        "logo logo hero"
        "buttons buttons total";
    }
    
  }
`;

export const PageLandingContent = styled.div`
  align-content: flex-end;
  align-self: flex-end;
  form {
    fieldset {
      border: 0;
      font: 700 3rem Archivo;
    }
  }
  @media (min-width: 1100px) {
    form {
      justify-items: flex-end;

      fieldset {
        border: 0;
        font: 700 5rem Archivo;
      }
    }
    .hero-image {
      grid-area: logo;
      justify-self: start;
      width: 80%;
      margin-top: 15rem;
    }
  }
`;

export const LogoContainer = styled.div`
  text-align: center;
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
    height: 25rem;
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

export const Footer = styled.footer`
  padding: 3rem 0;
  background: transparent;
  border-top: 1px solid var(--color-line-in-white);
  margin-top: 3rem;
  align-items: center;

  @media (min-width: 700px) {
    padding: 2.4rem 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  button {
    width: 100%;
    height: 5.6rem;
    background: var(--color-secundary);
    color: var(--color-button-text);
    border: 0;
    border-radius: 0.8rem;
    cursor: pointer;
    font: 700 1.6rem Archivo;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: background-color 0.2s;
    @media (min-width: 700px) {
      width: 20rem;
      margin-top: 0;
    }
    &:hover {
      background: var(--color-secundary-dark);
    }
  }
  a {
    display: flex;
    flex: 1;
    text-decoration: none;
    color: var(--color-background);
    justify-content: center;
    margin-top: 1rem;
    @media (min-width: 700px) {
      width: 12rem;
      align-items: center;
    }
  }
`;
