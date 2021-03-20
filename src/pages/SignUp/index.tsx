import React, { useState, FormEvent } from "react";
import { useHistory } from "react-router-dom";

import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";

import warningIcon from "../../assets/images/icons/warning.svg";
import { toast } from "react-toastify";

import * as Styled from "./styles";
import api from "../../services/api";

interface User {
  name?: string;
  email?: string;
  password?: string;
  bio?: string;
  whatsapp?: string;
  cost?: string;
}

const SignUp: React.FC = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [bio, setBio] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  const [profile, setProfile] = useState("");

  function handleCreateClass(e: FormEvent) {
    e.preventDefault();
    if (name && email && password && whatsapp && profile) {
      api
        .post("register", {
          name,
          email,
          password,
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

  return (
    <Styled.PageTeacherForm className="container">
      <PageHeader
        title="Bem vindo à WeWonder"
        description="Faça seu cadastro para começar a sua experiência."
      />

      <Styled.Main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Informações de Cadastro</legend>

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
              name="email"
              label="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Input
              name="password"
              label="Senha"
              value={password}
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
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

          <Styled.Footer>
            <p>
              <img src={warningIcon} alt="Aviso importante" />
              Importante! <br />
              Preencha todos os dados
            </p>
            <button type="submit">Salvar cadastro</button>
          </Styled.Footer>
        </form>
      </Styled.Main>
    </Styled.PageTeacherForm>
  );
};

export default SignUp;
