import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import * as Styled from "./styles";

import logoImg from "../../assets/images/logo.svg";
import { toast } from "react-toastify";

interface MainPageHeaderProps {
  title: string;
  description?: string;
}

const MainPageHeader: React.FC<MainPageHeaderProps> = (props) => {
  const history = useHistory();
  let id = localStorage.getItem("id");
  const [activeItem, setActiveItem] = useState();

  function handleSignOut() {
    let nome = localStorage.getItem("name");
    toast.warning(`Até mais, ${nome}!`);
    localStorage.clear();
    history.push("/");
  }
  const items = [
    {
      label: "Home",
      icon: "pi pi-fw pi-home",
      command: (event: any) => {
        history.push("/main-app");
      },
    },
    {
      label: "Meus Grupos",
      icon: "pi pi-fw pi-calendar",
      command: (event: any) => {
        history.push("/groups");
      },
    },
    {
      label: "Meu Perfil",
      icon: "pi pi-fw pi-pencil",
      command: (event: any) => {
        history.push(`/profile/${id}`);
      },
    },
    {
      label: "Minhas Conquistas",
      icon: "pi pi-fw pi-file",
      command: (event: any) => {
        history.push(`/achivements`);
      },
    },
    {
      label: "Criar Grupo",
      icon: "pi pi-fw pi-cog",
      command: (event: any) => {
        history.push(`/give-classes`);
      },
    },
  ];
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
        <Styled.NewMenu
          model={items}
          activeItem={activeItem}
          onTabChange={(e) => setActiveItem(e.value)}
        />
        {props.children}
      </Styled.HeaderContent>
    </Styled.Header>
  );
};

export default MainPageHeader;
