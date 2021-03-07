import React from "react";
import { Link, useHistory } from "react-router-dom";

import * as Styled from "./styles";

import logoImg from "../../assets/images/logo.svg";
import backIcon from "../../assets/images/icons/back.svg";
import { toast } from "react-toastify";

interface MainPageHeaderProps {
  title: string;
  description?: string;
}

const MainPageHeader: React.FC<MainPageHeaderProps> = (props) => {
  const history = useHistory();
  function handleSignOut() {
    let nome = localStorage.getItem("name");
    toast.warning(`Até mais, ${nome}!`);
    localStorage.clear();
    history.push("/");
  }
  return (
    <Styled.Header>
      <Styled.TopBarContainer>
        <Link to="/main-app">
          <img src={logoImg} alt="Proffy" />
        </Link>
        <button onClick={handleSignOut}>Sair</button>
      </Styled.TopBarContainer>

      <Styled.HeaderContent>
        <strong>{props.title}</strong>
        <div>
          <Link to="/teste"> TESTE</Link>
          <Link to="/teste"> TESTE</Link>
          <Link to="/teste"> TESTE</Link>
          <Link to="/teste"> TESTE</Link>
        </div>
        {props.children}
      </Styled.HeaderContent>
    </Styled.Header>
  );
};

export default MainPageHeader;
