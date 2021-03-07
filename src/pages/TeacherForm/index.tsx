import React, { useState, FormEvent } from "react";
import { useHistory, useParams } from "react-router-dom";

import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import Select from "../../components/Select";

import warningIcon from "../../assets/images/icons/warning.svg";

import * as Styled from "./styles";
import api from "../../services/api";
import { toast } from "react-toastify";

const TeacherForm: React.FC = () => {
  const { id } = useParams();

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
      <PageHeader
        title="Bem vindo à Hígia"
        description="Preencha o formulário para começar a procurar companheiros de exercício"
      />

      <Styled.Main>
        <form onSubmit={handleCreateClass}>
    
          <fieldset>
            <legend>Criar grupo</legend>

            <Input
              name="subject"
              label="Atividade de interesse"
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
              }}
            />
            <Input
              name="cost"
              label="Custo da sua hora por aula"
              value={cost}
              onChange={(e) => {
                setCost(e.target.value);
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
                <Styled.ScheduleItem key={scheduleItem.week_day}>
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

export default TeacherForm;
