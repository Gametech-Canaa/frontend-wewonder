import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";

import MainPageHeader from "../../components/MainPageHeader";

import { AxiosResponse } from "axios";
import { Article } from "../../components/TeacherItem/styles";
import whatsappIcon from "../../assets/images/icons/rocket.svg";
import { IoIosAddCircle } from "react-icons/io";

import * as Styled from "./styles";
import api from "../../services/api";
import { toast } from "react-toastify";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { LatLng } from "leaflet";
export interface Grupo {
  bio: string;
  id: number;
  cost: number;
  subject: string;
}

export interface Criador {
  name: string;
  profile: number;
  cost: number;
  whatsapp: string;
}

export interface Relacao {
  user_id: number;
  class_id: number;
  favorito: boolean;
}
interface Address {
  id?: number;
  class_id?: number;
  cep?: string;
  latitude: number;
  longitude: number;
}
const TeacherForm: React.FC = () => {
  let enderecos: Address[];
  enderecos = [];

  let grupo: Grupo;
  grupo = {
    bio: "",
    id: 0,
    cost: 0,
    subject: "",
  };

  let creator: Criador;
  creator = {
    name: "",
    profile: 0,
    cost: 0,
    whatsapp: "",
  };

  let locale: LatLng;
  locale = new LatLng(-16.6799, -49.255);
  const history = useHistory();

  const [locais, setLocais] = useState(enderecos);
  const [selectedGroup, setSelectedGroup] = useState(grupo);
  const [criador, setCriador] = useState(creator);
  const [initialLocale, setInitialLocale] = useState(locale);

  function teste(gp: Address) {
    api
      .get(`classes/${gp.class_id}`)
      .then((response: AxiosResponse) => {
        setSelectedGroup(response.data[0]);
        setCriador(response.data[1]);
      })
      .catch(() => {
        toast.error("Erro ao buscar grupo");
      });
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token === null) {
      history.push("/");
    } else {
      api.defaults.headers.Authorization = `Bearer ${token}`;
    }
    async function loadClasses() {
      navigator.geolocation.getCurrentPosition(function (position) {
        setInitialLocale(
          new LatLng(position.coords.latitude, position.coords.longitude)
        );
      });
      await api
        .get("addresses")
        .then((response: AxiosResponse) => {
          const address: Address[] = response.data;
          setLocais(address);
        })
        .catch(() => {
          toast.error("Erro ao carregar grupos");
        });
    }

    loadClasses();
  }, [history]);

  function verifyUserInGroup(class_id: Number) {
    const user = localStorage.getItem("id");
    async function getUsers() {
      const response = await api.get(`relations/${class_id}`);
      if (response.data.lenght === 0) {
        return false;
      }
      const relation = response.data.filter(
        (rl: Relacao) => String(rl.user_id) === user
      );

      return relation.length >= 1;
    }
    return getUsers();
  }

  async function handleJoinGroup(class_id: Number) {
    const valor = await verifyUserInGroup(class_id);
    if (!Boolean(valor)) {
      api
        .post("relations", { class_id })
        .then((response) => {
          toast.success("Muito bem! Você se juntou ao grupo.");
        })
        .catch(() => {
          toast.error("Favor, tente novamente mais tarde!");
        });
    } else {
      toast.warn("Parece que você já participa do grupo, Veja em Meus Grupos");
    }
  }

  function buscarGrupos() {
    return (
      <>
        <Styled.Main>
          <MapContainer
            center={initialLocale}
            zoom={12}
            scrollWheelZoom={false}
            style={{ height: "60vh", borderRadius: "5px" }}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {locais.length > 0
              ? locais.map((gp: Address, index) => (
                <Marker
                  key={index}
                  position={[gp.latitude, gp.longitude]}
                  eventHandlers={{
                    click: () => {
                      teste(gp);
                    },
                  }}
                >
                  <Styled.NewPopup>
                    {selectedGroup !== null ? (
                      <Article
                        profile={
                          String(criador.profile) === "1" ? true : false
                        }
                      >
                        <header>
                          <div>
                            <strong>{selectedGroup.subject}</strong>
                            <span>{criador.name}</span>
                          </div>
                        </header>

                        <p>{selectedGroup.bio}</p>

                        <footer>
                          {String(criador.profile) === "1" ? (
                            <p>
                              Preço/hora
                              <strong>R$ {selectedGroup.cost}</strong>
                            </p>
                          ) : null}

                          <a
                            onClick={() => {
                              handleJoinGroup(selectedGroup.id);
                            }}
                          >
                            <img src={whatsappIcon} alt="whatsapp icon" />
                              Participar
                            </a>
                        </footer>
                      </Article>
                    ) : null}
                  </Styled.NewPopup>
                </Marker>
              ))
              : null}
          </MapContainer>
        </Styled.Main>
        <Styled.Footer>
          <Link to="/terms">Termos e Condições</Link>
          <Link to="/terms">Fale conosco</Link>
        </Styled.Footer>
      </>
    );
  }

  return (
    <Styled.PageTeacherForm className="container">
      <MainPageHeader
        title="WeWonder"
        description="Vamos começar a procurar companheiras de exercício"
      />

      {locais.length > 0 ? buscarGrupos() : <h1>Carregando...</h1>}
    </Styled.PageTeacherForm>
  );
};

export default TeacherForm;
