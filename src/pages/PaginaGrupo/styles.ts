import styled from "styled-components";

interface ProfileProps {
  profile: boolean;
}

export const PageTeacherList = styled.div`
  width: 100vw !important;
  height: 100vh;
  @media (min-width: 700px) {
    max-width: 100% !important;
    #search-teachers {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      column-gap: 16px;
      position: absolute;
      bottom: -28px;
    }
  }
  #search-teachers {
    margin-top: 3.2rem;
    label {
      color: var(--color-text-in-primary);
    }
    button {
      width: 100%;
      height: 5.6rem;
      background: var(--color-secundary);
      border: 0;
      border-radius: 0.8rem;
      cursor: pointer;
      color: var(--color-button-text);
      font: 700 1.6rem Archivo;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      transition: background-color 0.2s;
      margin-top: 3.2rem;
      &:hover {
        background: var(--color-secundary-dark);
      }
    }
  }
`;

export const Main = styled.main`
  margin: -2.5rem auto;
  width: 90%;
  @media (min-width: 700px) {
    padding: 2.5rem 0;
    max-width: 740px;
    margin: -2.5rem auto;
  }
`;

export const ButtonsContainer = styled.div`
  svg {
    font-size: 2rem !important;
    margin-left: 0.5rem;
    cursor: pointer;
  }
  @media (min-width: 700px) {
    height: 5rem;
    display: flex;
    justify-content: flex-end !important;
    svg {
      color: var(--color-primary);
      font-size: 2rem !important;
      margin-left: 2.5rem;
      cursor: pointer;
    }
  }
`;

export const Article = styled.article<ProfileProps>`
  background: ${(props) => (props.profile ? "rgba( 75,0,130,0.3)" : "#fff")};
  border: 1px soliod var(--color-line-in-white);
  border-radius: 0.8rem;
  margin-top: 2.4rem;
  overflow: hidden;
  > p {
    color: ${(props) => (props.profile ? "#f6f6f6" : "#999")};
    padding: 0 2rem;
    font-size: 1.6rem;
    line-height: 2.8rem;
    @media (min-width: 700px) {
      padding: 0 3.2rem;
    }
  }
  header {
    padding: 3.2rem 2rem;
    display: flex;
    align-items: center;
    @media (min-width: 700px) {
      padding: 3.2rem;
      div {
        justify-content: space-between !important;
        max-width: 38rem;
      }
    }

    img {
      width: 10rem;
    }

    #id {
      color: ${(props) => (props.profile ? "#f6f6f6" : "#333")};
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
    }
    div {
      margin-left: 2.4rem;
      strong {
        font: 700 2.4rem Archivo;
        display: block;
        color: ${(props) => (props.profile ? "#f6f6f6" : "#333")};
      }
      span {
        width: 120rem;
        text-transform: uppercase;
        font-size: 1.6rem;
        display: block;
        color: ${(props) => (props.profile ? "#f6f6f6" : "#666")};
      }
    }
  }
  footer {
    padding: 3.2rem 2rem;
    background: ${(props) => (props.profile ? "rgba( 75,0,130,0.2)" : "#fff")};
    border-top: 1px solid var(--color-line-in-white);
    display: flex !important;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => (props.profile ? "#f6f6f6" : "#666")};

    @media (min-width: 700px) {
      padding: 3.2rem;
    }
    ul {
      h2 {
        font-size: 2rem;
        color: var(--color-primary-darker);
      }
    }
    li {
      width: 68rem;
      display: flex;
      justify-content: space-between !important;
      align-items: center;
      margin-bottom: 0.5rem;
      a {
        background: ${(props) => (props.profile ? "transparent" : "#F589CE")};
      }
    }

    strong {
      color: #f6f6f6;
      font-size: 1.6rem;
      display: block;
      @media (min-width: 700px) {
        display: initial;
        margin-left: 1.6rem;
      }
    }
    a {
      width: ${(props) => (props.profile ? "20rem" : "150rem")};
      height: 5.6rem;
      background: var(--color-secundary);
      color: var(--color-button-text);
      border: 0;
      border-radius: 0.8rem;
      cursor: pointer;
      font: 700 1.4rem Archivo;
      display: flex;
      align-items: center;
      text-decoration: none;
      justify-content: space-evenly;
      transition: 0.2s;
      @media (min-width: 700px) {
        width: ${(props) => (props.profile ? "24.5rem" : "25rem")};
        font-size: 1.6rem;
        justify-content: center;
        background: ${(props) => (props.profile ? "#666" : "transparent")};

        svg {
          font-size: 3rem;
          margin-right: 1.6rem;
        }
        img {
          width: 2rem;
        }
      }
      :hover {
        background: var(--color-secundary-dark);
      }
    }
  }
`;