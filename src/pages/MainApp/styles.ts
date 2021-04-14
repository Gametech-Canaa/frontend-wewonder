import styled from "styled-components";
import { Map } from "google-maps-react";
import { Popup } from "react-leaflet";

export const PageTeacherForm = styled.div`
  width: 100vw !important;
  height: 100vh;
  @media (min-width: 700px) {
    max-width: 100vw !important;
  }
`;

export const NewPopup = styled(Popup)`
  width: 50rem;
`;

export const Main = styled.main`
  background: var(--color-box-base);
  width: 100%;
  max-width: 120rem;
  border-radius: 0.8rem;
  margin: -1rem auto 0.2rem;
  /* padding-top: 2rem; */
  /* overflow: hidden; */
  label {
    color: var(--color-text-complement);
  }
  fieldset {
    border: 0;
    padding: 0 2.4rem;
    @media (min-width: 700px) {
      padding: 0 6.4rem;
    }
    + fieldset {
      margin-top: 6.4rem;
    }
    legend {
      font: 700 2.4rem Archivo;
      color: var(--color-text-title);
      margin-bottom: 2.4rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding-bottom: 1.6rem;
      border-bottom: 1px solid var(--color-line-in-white);
      button {
        background: none;
        border: 0;
        color: var(--color-primary);
        font: 700 1.6rem Archivo;
        cursor: pointer;
        transition: color 0.2s;
        &:hover {
          color: var(--color-primary-dark);
        }
      }
    }
  }
`;

export const Footer = styled.footer`
  text-decoration: none;
  padding: 2rem 2.4rem;
  background: var(--color-box-footer);
  border-top: 1px solid var(--color-line-in-white);
  margin-top: 1rem;
  a {
    text-decoration: none;
  }
  @media (min-width: 700px) {
    text-decoration: none;
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

export const Mapa = styled(Map)`
  @media (min-width: 700px) {
    display: flex;
    height: 100vh;
    width: 100%;
    padding: 10rem;
  }
`;

export const PageTeacherList = styled.div`
  #search-teachers {
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
      align-self: center;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      transition: background-color 0.2s;

      @media (min-width: 700px) {
        width: 100%;
      }
      &:hover {
        background: var(--color-secundary-dark);
      }
    }
  }
  @media (min-width: 700px) {
    max-width: 100% !important;
    #search-teachers {
      margin: -5rem 5rem 0.4rem !important;
      justify-self: center;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      column-gap: 16px;
    }
  }
  #search-teachers {
    label {
      color: #f6f6f6;
    }
  }
`;
