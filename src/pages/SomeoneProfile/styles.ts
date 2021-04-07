import styled from "styled-components";

export const PageTeacherForm = styled.div`
  width: 100vw !important;
  height: 100vh;
  @media (min-width: 700px) {
    max-width: 100vw !important;
  }
`;

export const Main = styled.main`
  background: var(--color-box-base);
  width: 100%;
  max-width: 74rem;
  border-radius: 0.8rem;
  margin: -3.2rem auto 3.2rem;
  padding-top: 6.4rem;
  overflow: hidden;
  @media (max-width: 1050px) {
    margin-top: 2.5rem;
  }
  div {
    justify-content: center;
    align-items: center;
    margin-top: -5rem;
    padding: 5rem;
    display: grid;
    grid-template-columns: 0.5fr 1fr 0.5fr 1fr;
    grid-template-areas:
      ". . . perfil "
      "nome nome nome nome"
      "bio bio bio bio"
      "ie email it telefone";
    h4 {
      font-size: 2rem;
    }
    @media (min-width: 1050px) {
      div {
        grid-template-columns: 0.5fr 1fr 0.5fr 1fr;

        grid-template-areas:
          ". . . perfil "
          "nome nome nome nome"
          "bio bio bio bio"
          "ie email"
          "it telefone";
        h4 {
          font-size: 3rem;
        }
      }
    }
  }
  #nome {
    grid-area: nome;
    font-size: 4rem;
    border-bottom: 0.01rem solid #eee;
    margin-bottom: 2.5rem;
  }
  #bio {
    grid-area: bio;
    font-size: 1.5rem;
    font: 500 Archivo;
    color: #b6b6b6;
    border-bottom: 0.01rem solid #eee;
    margin-bottom: 2.5rem;
    padding-bottom: 2rem;
  }
  #ie {
    display: flex;
    grid-area: ie;
    font-size: 1.5rem;
    justify-self: flex-end;
    margin-right: 1rem;
  }
  #it {
    justify-self: flex-end;
    display: flex;
    grid-area: it;
    font-size: 1.5rem;
    margin-right: 1rem;
  }
  #telefone {
    grid-area: telefone;
    font-size: 1.5rem;
  }
  #email {
    grid-area: email;
    font-size: 1.5rem;
  }
  #perfil {
    justify-self: end;
    grid-area: perfil;
  }
`;

export const Footer = styled.footer`
  padding: 4rem 2.4rem;
  background: var(--color-box-footer);
  border-top: 1px solid var(--color-line-in-white);
  margin-top: 6.4rem;
  @media (min-width: 700px) {
    padding: 4rem 6.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  p {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    line-height: 2.4rem;
    color: var(--color-text-complement);
    @media (min-width: 700px) {
      justify-content: space-between;
    }
    img {
      margin-right: 2rem;
    }
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
    margin-top: 3.2rem;
    @media (min-width: 700px) {
      width: 20rem;
      margin-top: 0;
    }
    &:hover {
      background: var(--color-secundary-dark);
    }
  }
`;

export const ScheduleItem = styled.div`
  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    column-gap: 1.6rem;
  }
`;
