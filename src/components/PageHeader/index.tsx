import React from "react";
import { Link } from "react-router-dom";

import * as Styled from "./styles";

import logoImg from "../../assets/images/logo.svg";
import backIcon from "../../assets/images/icons/back.svg";

interface PageHeaderProps {
  title: string;
  description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <Styled.Header>
      <Styled.TopBarContainer>
        <Link to="/">
          <img src={backIcon} alt="Ícone de voltar" />
        </Link>
        <img src={logoImg} alt="Proffy" />
      </Styled.TopBarContainer>

      <Styled.HeaderContent>
        <strong>{props.title}</strong>
        {props.description && <p>{props.description}</p>}

        {props.children}
      </Styled.HeaderContent>
    </Styled.Header>
  );
};

export default PageHeader;
