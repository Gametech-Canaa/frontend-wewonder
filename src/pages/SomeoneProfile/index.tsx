import React, { useState, FormEvent, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

import Input from "../../components/Input";
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";

import warningIcon from "../../assets/images/icons/warning.svg";
import { toast } from "react-toastify";
import { MdEmail, MdLocalPhone } from "react-icons/md";

import * as Styled from "./styles";
import api from "../../services/api";
import MainPageHeader from "../../components/MainPageHeader";

interface User {
  name?: string;
  email?: string;
  password?: string;
  bio?: string;
  whatsapp?: string;
  cost?: string;
  profile?: string;
}

const SomeoneProfile: React.FC = () => {
  const data: User = {};
  const history = useHistory();

  const [user, setUser] = useState(data);

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token === null) {
      history.push("/");
    } else {
      api.defaults.headers.Authorization = `Bearer ${token}`;
    }
    function loadUserData() {
      api.get(`user/${id}`).then((response) => {
        setUser(response.data);
      });
    }
    loadUserData();
  }, [history, id]);

  return (
    <Styled.PageTeacherForm className="container">
      <MainPageHeader title="WeWonder" />

      <Styled.Main>
        <div>
          <h4 id="nome">{user.name}</h4>
          <MdEmail id="ie" />
          <h4 id="email">{user.email}</h4>
          <MdLocalPhone id="it" />
          <h4 id="telefone">{user.whatsapp}</h4>
          <h4 id="bio">{user.bio}</h4>
          <h4 id="perfil">
            {user.profile === String(2) ? "Aluno" : "Professor"}
          </h4>
        </div>
      </Styled.Main>
    </Styled.PageTeacherForm>
  );
};

export default SomeoneProfile;
