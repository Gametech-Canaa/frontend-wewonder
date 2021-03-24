import styled from "styled-components";
interface ProfileProps {
  profile: boolean;
}
export const Article = styled.article<ProfileProps>`
  background: ${(props) => (props.profile ? "rgba( 75,0,130,0.2)" : "#fff")};
  border: 1px solid var(--color-line-in-white);
  border-radius: 0.8rem;
  width: 46rem;
  margin-top: 2rem;
  overflow: hidden;
  > p {
    padding: 0 2rem;
    font-size: 1.6rem;
    line-height: 2rem;
    @media (min-width: 700px) {
      padding: 0 3.2rem;
    }
  }
  header {
    padding: 2rem 2rem;
    display: flex;
    align-items: center;
    @media (min-width: 700px) {
      padding: 2rem;
    }
    img {
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
    }
    div {
      margin-left: 1rem;
      strong {
        font: 700 2.4rem Archivo;
        display: block;
        color: var(--color-text-title);
      }
      span {
        font-size: 1.2rem;
        display: block;
      }
    }
  }
  footer {
    padding: 3.2rem 2rem;
    background: ${(props) => (props.profile ? "rgba( 75,0,130,0.2)" : "#fff")};
    border-top: 1px solid var(--color-line-in-white);
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (min-width: 800px) {
      padding: 3.2rem;
    }
    strong {
      color: var(--color-primary);
      font-size: 1.6rem;
      display: block;
      @media (min-width: 700px) {
        display: initial;
        margin-left: 1rem;
      }
    }
    a {
      width: ${(props) => (props.profile ? "20rem" : "100rem")};
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
        width: ${(props) => (props.profile ? "24.5rem" : "100rem")};
        font-size: 1.6rem;
        justify-content: center;
        img {
          color: #fff;
          font-size: 5rem;
          margin-right: 1.6rem;
        }
      }
      :hover {
        background: var(--color-secundary-dark);
      }
    }
  }
`;
