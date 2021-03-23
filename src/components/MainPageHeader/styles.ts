import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    -45deg,
    var(--color-primary),
    var(--color-primary-dark)
  );
  img {
    height: 1rem;
  }
  button {
    color: var(--color-button-text);
    transition: background-color 0.2s;
    font: 500 2rem Archivo;
    background: transparent;
    border: 0;
  }
  @media (min-width: 700px) {
    height: 200px;
    img {
      height: 1.6rem;
    }
    button {
      color: var(--color-button-text);
      transition: background-color 0.2s;
      font: 500 2rem Archivo;
      background: transparent;
      border: 0;
      cursor: pointer;
    }
  }
`;

export const TopBarContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--color-text-in-primary);
  padding: 1.6rem 0;
  @media (min-width: 700px) {
    max-width: 1100px;
  }
  a {
    height: 3.2rem;
    transition: opacity 0.2s;
  }
  a:hover {
    opacity: 0.6;
  }
  > img {
    height: 1.6rem;
  }
`;

export const HeaderContent = styled.div`
  width: 90%;
  margin: 0 auto;
  position: relative;
  margin: 3.2rem auto;
  div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    border: 0.1rem solid #eee;
    border-radius: 0.5rem;
    padding: 0.2rem 3rem;
    margin-top: 0.2rem;

    a {
      color: var(--color-background);
      font: 500 2rem Archivo;
      text-decoration: none;
      padding: 0.5rem;
      transition: opacity 0.3s;

      :hover {
        opacity: 0.6;
        border-bottom: 0.1rem solid #eee;
      }
    }
  }

  @media (min-width: 700px) {
    div {
      margin-top: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      border: 0.1rem solid #eee;
      border-radius: 0.5rem;
      padding: 0.2rem 3rem;
      a {
        color: var(--color-background);
        font: 500 1.5rem Archivo;
        text-decoration: none;
        padding: 0.5rem;
        transition: opacity 0.3s;

        :hover {
          opacity: 0.6;
          border-bottom: 0.1rem solid #eee;
        }
      }
    }

    flex: 1;
    max-width: 740px;
    margin: 0 auto;
    padding-bottom: 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    strong {
      max-width: 450px;
    }
  }
  strong {
    font: 700 3.6rem Archivo;
    line-height: 4.2rem;
    color: var(--color-title-in-primary);
  }
`;
