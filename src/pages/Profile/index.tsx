import React, { useState, FormEvent, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

import Input from "../../components/Input";
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";

import warningIcon from "../../assets/images/icons/warning.svg";
import { toast } from "react-toastify";

import * as Styled from "./style";
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

const Profile: React.FC = () => {
  const data: User = {};
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [bio, setBio] = useState("");
  const [user, setUser] = useState(data);
  const [whatsapp, setWhatsapp] = useState("");

  const [profile, setProfile] = useState("");

  const { id } = useParams<{ id: string }>();
  let usuario_logado = localStorage.getItem("id");

  function handleCreateClass(e: FormEvent) {
    e.preventDefault();
    if (name && email && whatsapp && profile) {
      api
        .put(`user/${id}`, {
          name,
          bio: bio ? bio : " ",
          whatsapp,
          profile,
        })
        .then((response) => {
          toast.success("Cadastro realizado com sucesso");
          history.push("/");
        })
        .catch(() => {
          toast.error("Erro no cadastro");
        });
    } else {
      toast.error("Favor preencha todos os dados!");
    }
  }

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
        setName(response.data.name);
        setBio(response.data.bio);
        setEmail(response.data.email);
        setWhatsapp(response.data.whatsapp);
        setProfile(response.data.profile);
      });
    }
    loadUserData();
  }, [history, id]);

  return (
    <Styled.PageTeacherForm className="container">
      <MainPageHeader
        title="Bem vindo à WeWonder"
        description="Faça seu cadastro para começar a sua experiência."
      />

      <Styled.Main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Este é o seu perfil</legend>

            <Input
              name="name"
              label="Nome completo"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <Input
              name="whatsapp"
              label="Telefone"
              value={whatsapp}
              onChange={(e) => {
                setWhatsapp(e.target.value);
              }}
            />
            <Input
              readOnly
              name="email"
              label="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <Textarea
              name="bio"
              label="Bio"
              value={bio}
              onChange={(e) => {
                setBio(e.target.value);
              }}
            />
          </fieldset>
          {usuario_logado === id ? (
            <fieldset>
              <legend>Interesses</legend>

              <Select
                name="profile"
                label=""
                options={[
                  { value: "1", label: "Dar aulas" },
                  { value: "2", label: "Praticar exercícios" },
                ]}
                value={profile}
                onChange={(e) => {
                  setProfile(e.target.value);
                }}
              />
            </fieldset>
          ) : null}

          {usuario_logado === id ? (
            <Styled.Footer>
              <p>
                <img src={warningIcon} alt="Aviso importante" />
                Importante! <br />
                Preencha todos os dados
              </p>
              <button type="submit">Atualizar cadastro</button>
            </Styled.Footer>
          ) : null}
        </form>
      </Styled.Main>
    </Styled.PageTeacherForm>
  );
};

export default Profile;
