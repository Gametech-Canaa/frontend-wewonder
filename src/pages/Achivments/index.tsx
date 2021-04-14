import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import * as Styled from "./styles";
import api from "../../services/api";
import MainPageHeader from "../../components/MainPageHeader";
import { IoConstructOutline } from "react-icons/io5";

const Achivements: React.FC = () => {
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token === null) {
      history.push("/");
    } else {
      api.defaults.headers.Authorization = `Bearer ${token}`;
    }
  }, [history]);

  return (
    <Styled.PageTeacherForm className="container">
      <MainPageHeader title="WeWonder" />

      <Styled.Main>
        <div>
          <h1>Em construção... </h1>
          <IoConstructOutline />
          <p>
            A página de conquistas está temporariamente indisponível. <br /> Em
            breve você poderá acompanhar todas as suas conquistas e evoluções
            por aqui.
          </p>
        </div>
      </Styled.Main>
    </Styled.PageTeacherForm>
  );
};

export default Achivements;
