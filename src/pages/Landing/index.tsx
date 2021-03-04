import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import logoImg from "../../assets/images/logo.svg";
import landingImg from "../../assets/images/logo-plataforma-1.png";

import studyIcon from "../../assets/images/icons/study.svg";
import giveClassesIcon from "../../assets/images/icons/give-classes.svg";
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";

import {
  PageLanding,
  PageLandingContent,
  LogoContainer,
  ButtonsContainer,
  TotalConnections,
} from "./styles";
import api from "../../services/api";

const Landing: React.FC = () => {
  const [totalConnections, setTotalConnection] = useState(0);

  useEffect(() => {
    api.get("connections").then((response) => {
      const { total } = response.data;
      setTotalConnection(total);
    });
  }, [totalConnections]);

  return (
    <PageLanding>
      <PageLandingContent id="landing-content" className="container">
        <LogoContainer>
          {/*<img src={logoImg} alt="COMPATIVIDADE" />*/}
          <h1>ReplayWoman</h1>
          <h2>Slogan bonitinho da plataforma.</h2>
        </LogoContainer>
        <img
          src={landingImg}
          alt="Plataforma de estudos"
          className="hero-image"
        />

        <ButtonsContainer>
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudar" />
            Ver Grupos
          </Link>

          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Dar aulas" />
            Criar Grupos
          </Link>
        </ButtonsContainer>

        <TotalConnections>
          Total de {totalConnections} conexões já realizadas{" "}
          <img src={purpleHeartIcon} alt="Coração roxo" />
        </TotalConnections>
      </PageLandingContent>
    </PageLanding>
  );
};

export default Landing;
