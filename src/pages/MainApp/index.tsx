import React, { useState, FormEvent } from "react";
import { useHistory, useParams } from "react-router-dom";

import MainPageHeader from "../../components/MainPageHeader";

import * as Styled from "./styles";
import api from "../../services/api";
import { toast } from "react-toastify";
import { GoogleAPI, GoogleApiWrapper } from "google-maps-react";

const TeacherForm: React.FC = (props: GoogleAPI) => {
  const { id } = useParams();

  const containerStyle = {
    position: "relative",
    width: "100%",
    height: "100%",
    paddingLeft: "10%",
    paddingRight: "10%",
  };

  const history = useHistory();
  const [subject, setSubject] = useState("");
  const [cost, setCost] = useState("");
  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: "", to: "" },
  ]);

  function addNewScheduleItem() {
    setScheduleItems([...scheduleItems, { week_day: 0, from: "", to: "" }]);
  }

  function handleCreateClass(e: FormEvent) {
    e.preventDefault();
    api
      .post("classes", {
        id,
        subject,
        cost: Number(cost),
        schedule: scheduleItems,
      })
      .then(() => {
        toast.success("Cadastro realizado com sucesso");
        history.push("/main-app");
      })
      .catch(() => {
        toast.error("Erro no cadastro");
      });
  }

  function setScheduleItemValue(
    position: number,
    field: string,
    value: string
  ) {
    const updateScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value };
      }

      return scheduleItem;
    });
    setScheduleItems(updateScheduleItems);
  }

  return (
    <Styled.PageTeacherForm className="container">
      <MainPageHeader
        title="Bem vindo à WeWonder"
        description="Vamos começar a procurar companheiras de exercício"
      />
      <Styled.Mapa
        containerStyle={containerStyle}
        google={props.google}
        initialCenter={{
          lat: -16.6799,
          lng: -49.255,
        }}
      ></Styled.Mapa>
    </Styled.PageTeacherForm>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyBa3MKcJDhIoNg3fzAqE-qvw_0g49wKMik",
})(TeacherForm);
