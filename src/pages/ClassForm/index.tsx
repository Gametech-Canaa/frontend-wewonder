import React, { useState, FormEvent, useEffect } from "react";
import { useHistory } from "react-router-dom";

import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import Select from "../../components/Select";
import Textarea from "../../components/Textarea";

import warningIcon from "../../assets/images/icons/warning.svg";

import * as Styled from "./styles";
import axios from "axios";
import api from "../../services/api";
import { toast } from "react-toastify";
import { DropStyled } from "../../components/Dropdown";
import { MdDelete } from "react-icons/md"
import { string } from "yup/lib/locale";

interface Modality {
  id: number;
  description: string;
}

const ClassForm: React.FC = () => {
  let mods: Modality[];
  mods = [];
  const profile = localStorage.getItem("profile");
  const token = localStorage.getItem("token");
  api.defaults.headers.Authorization = `Bearer ${token}`;

  const history = useHistory();
  const [cep, setCep] = useState("");
  const [limite, setLimite] = useState("");
  const [bio, setBio] = useState("");
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [cost, setCost] = useState("");
  const [modalities, setModalities] = useState(mods);
  const [selectedModalite, setSelectedModalite] = useState({});
  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: "", to: "" },
  ]);

  function addNewScheduleItem() {
    setScheduleItems([...scheduleItems, { week_day: 0, from: "", to: "" }]);
    console.log(scheduleItems)
  }

  useEffect(() => {
    async function loadModalities() {
      api.get(`modalities`).then((response) => {
        const valor = response.data.map((data: Modality) => ({
          id: data.id,
          description: data.description,
        }));
        setModalities(valor);
      });
    }
    loadModalities();
  }, []);

  useEffect(() => {
    function getGeoLocation() {
      if (String(cep).length === 8 && cep !== undefined) {
        const url = axios.create({
          baseURL: `https://maps.googleapis.com/maps/api/`,
        });
        
        url
          .get(
            `geocode/json?address=${cep}&key=AIzaSyCZKFKqajK5lnh1ykTr5rPxnpRgR66POQg`
          )
          .then((response) => {
            setLatitude(response.data.results[0].geometry.location.lat);
            setLongitude(response.data.results[0].geometry.location.lng);
            console.log(response.data.results[0].geometry.location.lat , response.data.results[0].geometry.location.lng)
          }).catch(()=> toast.warn("CEP INVÁLIDO"));
      }
    }
    getGeoLocation();
  }, [cep]);

  function handleCreateClass(e: FormEvent) {
    e.preventDefault();

    api
      .post("classes", {
        subject: selectedModalite,
        cost: Number(cost),
        schedule: scheduleItems,
        cep,
        latitude,
        longitude,
        limite,
        bio,
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

  function deleteItem(index : number){
    const schedule  = scheduleItems.filter((item, i) => (i !== index))
    setScheduleItems(schedule)
  }

  return (
    <Styled.PageTeacherForm className="container">
      <PageHeader
        title="WeWonder"
        description="Crie um grupo para se reunir e praticar exercícios"
      />

      <Styled.Main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Criar grupo</legend>
            <DropStyled
              style={{ fontSize: "25px !important" }}
              filter
              filterBy="label"
              options={modalities.map((mod) => ({
                value: String(mod.id),
                label: mod.description,
              }))}
              value={selectedModalite}
              onChange={(e) => {
                setSelectedModalite(e.target.value);
              }}
              placeholder="Selecione a modalidade"
            />
            {profile === "1" ? (
              <Input
                name="cost"
                label="Custo da sua hora por aula"
                value={cost}
                onChange={(e) => {
                  setCost(e.target.value);
                }}
              />
            ) : (
              <div />
            )}

            <Input
              name="cep"
              label="CEP de encontro do grupo"
              autoComplete="off"
              value={cep}
              onChange={(e) => {
                setCep(e.target.value);
              }}
            />
            <Input
              name="limite"
              label="Limite de pessoas"
              value={limite}
              onChange={(e) => {
                setLimite(e.target.value);
              }}
            />
            <Textarea
              name="bio"
              label="Descrição"
              value={bio}
              onChange={(e) => {
                setBio(e.target.value);
              }}
            />
          </fieldset>

          <fieldset>
            <legend>
              Horários disponíveis
              <button type="button" onClick={addNewScheduleItem}>
                + Novo horário
              </button>
            </legend>

            {scheduleItems.map((scheduleItem, index) => {
              return (
                <Styled.ScheduleItem key={index}>
                  <Select
                    name="week_day"
                    label="Dia da Semana"
                    value={scheduleItem.week_day}
                    onChange={(e) =>
                      setScheduleItemValue(index, "week_day", e.target.value)
                    }
                    options={[
                      { value: "0", label: "Domingo" },
                      { value: "1", label: "Segunda-feira" },
                      { value: "2", label: "Terça-feira" },
                      { value: "3", label: "Quarta-feira" },
                      { value: "4", label: "Quinta-feira" },
                      { value: "5", label: "Sexta" },
                      { value: "6", label: "Sábado" },
                    ]}
                  />
                  <Input
                    name="from"
                    label="Das"
                    type="time"
                    value={scheduleItem.from}
                    onChange={(e) =>
                      setScheduleItemValue(index, "from", e.target.value)
                    }
                  />
                  <Input
                    name="to"
                    label="Até"
                    type="time"
                    value={scheduleItem.to}
                    onChange={(e) =>
                      setScheduleItemValue(index, "to", e.target.value)
                    }
                  />
                 <MdDelete style={{alignSelf:'center', justifySelf:'center', width: '3rem'}} onClick={ () => {deleteItem(index)}}/>
                </Styled.ScheduleItem>
              );
            })}
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

export default ClassForm;
