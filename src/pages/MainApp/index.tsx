import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import MainPageHeader from "../../components/MainPageHeader";

import { AxiosResponse } from "axios";
import { Article } from "../../components/TeacherItem/styles";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import * as Styled from "./styles";
import api from "../../services/api";
import { toast } from "react-toastify";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
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

  const history = useHistory();

  const [locais, setLocais] = useState(enderecos);
  const [selectedGroup, setSelectedGroup] = useState(grupo);
  const [criador, setCriador] = useState(creator);

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

  function buscarGrupos() {
    return (
      <MapContainer
        center={[-16.6799, -49.255]}
        zoom={10}
        scrollWheelZoom={false}
        style={{ height: "100vh" }}
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
                <Popup>
                  {selectedGroup !== null ? (
                    <Article>
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

                        <a href={`https://wa.me/${criador.whatsapp}`}>
                          <img src={whatsappIcon} alt="whatsapp icon" />
                          Entrar em contato.
                        </a>
                      </footer>
                    </Article>
                  ) : null}
                </Popup>
              </Marker>
            ))
          : null}
      </MapContainer>
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
