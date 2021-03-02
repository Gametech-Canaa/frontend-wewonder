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
interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  function createNewConnection() {
    api.post("connections", { user_id: teacher.id });
  }
  return (
    <Article>
      <header>
        <img src={teacher.avatar} alt={teacher.name} />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>

      <p>{teacher.bio}</p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ {teacher.cost}</strong>
        </p>
        <a
          onClick={createNewConnection}
          href={`https://wa.me/${teacher.whatsapp}`}
          target="_blank"
        >
          <img src={whatsappIcon} alt="whatsapp icon" />
          Entrar em contato.
        </a>
      </footer>
    </Article>
  );
};

export default TeacherItem;