import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import { Article } from "./styles";
import api from "../../services/api";

export interface Teacher {
  avatar: string;
  bio: string;
  id: number;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
}

export interface Grupo {
  bio: string;
  id: number;
  cost: number;
  subject: string;
}

export interface Criador {
  name: string;
  profile: number;
  cost: number;
  whatsapp: string;
}
interface ItemProps {
  grupo: Grupo;
  criador: Criador;
}

const TeacherItem: React.FC<ItemProps> = ({ grupo, criador }) => {
  return (
    <Article profile={false}>
      <header>
        <div>
          <strong>{criador.name}</strong>
          <strong>{grupo.subject}</strong>
        </div>
      </header>

      <p>{grupo.bio}</p>

      <footer>
        {criador.profile === 1 ? (
          <p>
            Preço/hora
            <strong>R$ {grupo.cost}</strong>
          </p>
        ) : null}

        <a href={`https://wa.me/${criador.whatsapp}`} target="_blank">
          <img src={whatsappIcon} alt="whatsapp icon" />
          Entrar em contato.
        </a>
      </footer>
    </Article>
  );
};

export default TeacherItem;
