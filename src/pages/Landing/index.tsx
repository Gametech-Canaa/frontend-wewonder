import React, { useState, useEffect, FormEvent } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

// import logoImg from "../../assets/images/logo.svg";
import landingImg from "../../assets/images/logo-plataforma-1.png";
import Input from "../../components/Input";

import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";

import {
  PageLanding,
  PageLandingContent,
  LogoContainer,
  TotalConnections,
  Footer,
} from "./styles";
import api from "../../services/api";

const Landing: React.FC = () => {
  const history = useHistory();
  const [totalConnections, setTotalConnection] = useState(0);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    api.get("connections").then((response) => {
      const { total } = response.data;
      setTotalConnection(total);
    });
  }, [totalConnections]);

  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      history.push("/main-app");
    }
  }, [history]);

  function handleLogin(e: FormEvent) {
    e.preventDefault();
    if (email && password) {
      api
        .post("authenticate", {
          email,
          password,
        })
        .then((response) => {
          toast.success(`Bem vindo, ${response.data.user.name}`);
          localStorage.setItem("profile", response.data.user.profile);
          localStorage.setItem("name", response.data.user.name);
          localStorage.setItem("email", response.data.user.email);
          localStorage.setItem("token", response.data.token);
          api.defaults.headers.Authorization = `Bearer ${response.data.token}`;
          history.push("/main-app");
        })
        .catch(() => {
          toast.error("Erro no login. Verifique seus dados!");
        });
    } else {
      toast.error("Favor informe login e senha!");
    }
  }

  return (
    <PageLanding>
      <PageLandingContent id="landing-content" className="container">
        <LogoContainer>
          <img
            src={landingImg}
            alt="Plataforma de estudos"
            className="hero-image"
          />
        </LogoContainer>

        <form onSubmit={handleLogin}>
          <fieldset>
            <legend>Login</legend>

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
          </fieldset>
          <Footer>
            <button type="submit">Entrar</button>
            <Link to="/register" className="give-classes">
              Cadastre-se
            </Link>
          </Footer>
        </form>

        <TotalConnections>
          Total de {totalConnections} conexões já realizadas{" "}
          <img src={purpleHeartIcon} alt="Coração roxo" />
        </TotalConnections>
      </PageLandingContent>
    </PageLanding>
  );
};

export default Landing;
