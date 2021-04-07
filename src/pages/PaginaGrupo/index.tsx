import React, { useState, useEffect } from "react";
import MainPageHeader from "../../components/MainPageHeader";
import { useHistory, useParams, Link, Redirect } from "react-router-dom";
import { FaRegHeart, FaHeart, FaTrashAlt } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { AiOutlineFileSearch } from "react-icons/ai";
import { toast } from "react-toastify";

import * as Styled from "./styles";
import api from "../../services/api";
import axios from "axios";

export interface Grupo {
  id: number;
  subject: string;
  cost: number;
  bio: string;
  name: string;
  profile: string;
}

export interface Relation {
  id: number;
  class_id: number;
  user_id: number;
  favorito: boolean;
}

interface Modality {
  id: number;
  attributes: { name: string; icon: string };
  name: string;
  icon: string;
}

interface User {
  id?: number;
  name?: string;
  email?: string;
  password?: string;
  bio?: string;
  whatsapp?: string;
  cost?: string;
  profile?: string;
}

const PaginaGrupo: React.FC = () => {
  let mods: Modality[];
  mods = [];
  let rel: Relation[] = [];
  let gp: Grupo = {
    id: 0,
    subject: "",
    cost: 0,
    bio: "",
    name: "",
    profile: "",
  };
  let u: User[] = [];
  const history = useHistory();
  const [group, setGroup] = useState(gp);
  const [loading, setLoading] = useState(true);
  const [modalities, setModalities] = useState(mods);
  const [users, setUsers] = useState(u);
  const [relations, setRelations] = useState(rel);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    async function bringAllGroups() {
      const token = localStorage.getItem("token");
      if (token === null) {
        history.push("/");
      } else {
        api.defaults.headers.Authorization = `Bearer ${token}`;
      }
      loadAllGroups();
      setLoading(false);
    }
    bringAllGroups();
  }, [history]);

  useEffect(() => {
    async function loadModalities() {
      const url = axios.create({
        baseURL: `https://sports.api.decathlon.com/`,
      });

      url.get(`sports`).then((response) => {
        const valor = response.data.data.map((data: Modality) => ({
          id: data.id,
          name: data.attributes.name,
          icon: data.attributes.icon,
        }));
        setModalities(valor);
      });
    }
    loadModalities();
  }, []);

  async function loadAllGroups() {
    const response = await api.get(`classes/${id}`);
    let newGroup: Grupo = {
      id: response.data[0].id,
      subject: response.data[0].subject,
      cost: response.data[0].cost,
      bio: response.data[0].bio,
      name: response.data[1].name,
      profile: response.data[1].profile,
    };
    const teste = await api.get(`relations/${id}`).then((response) => {
      setRelations(response.data);
    });
    setGroup(newGroup);
  }

  function returnName(mood: string): string {
    if (mood && modalities.length > 0) {
      const nome = modalities.filter((mod) => String(mod.id) === mood);

      return nome[0].name;
    }
    return "";
  }

  useEffect(() => {
    function getRelations() {
      const data = relations.map(async (r) => {
        api
          .get(`user/${r.user_id}`)
          .then((response) => {
            const user = {
              name: response.data.name,
              id: response.data.id,
            };
            setUsers((users) => [...users, user]);
          })
          .catch(() => {});
      });
      return data;
    }
    getRelations();
  }, [relations]);

  function returnIcon(mood: string): string {
    if (mood && modalities.length > 0) {
      const nome = modalities.filter((mod) => String(mod.id) === mood);
      return nome[0].icon;
    }
    return "";
  }

  return (
    <Styled.PageTeacherList className="container">
      <MainPageHeader title="Estes são os seus grupos"></MainPageHeader>

      <Styled.Main>
        {loading ? (
          <h1>Carregando ...</h1>
        ) : (
          <Styled.Article
            key={group.id}
            profile={group.profile === "1" ? true : false}
          >
            <header>
              {returnIcon(group.subject) ? (
                <img src={returnIcon(group.subject)} alt="modalities" />
              ) : (
                <IoIosPeople id="id" />
              )}

              <div>
                <strong>{returnName(group.subject)}</strong>
                <span> {group.name} </span>
              </div>
            </header>

            <p>{group.bio}</p>

            <footer>
              <ul>
                <h2>PARTICIPANTES</h2>
                {users.map((rl) => (
                  <li key={rl.id}>
                    <span>{rl.name}</span>
                    <a
                      onClick={() => {
                        history.push(`someone-profile/${rl.id}`);
                      }}
                    >
                      Ver perfil
                    </a>
                  </li>
                ))}
              </ul>
            </footer>
          </Styled.Article>
        )}
      </Styled.Main>
    </Styled.PageTeacherList>
  );
};

export default PaginaGrupo;
