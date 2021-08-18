import React, { useState, useEffect } from "react";
import MainPageHeader from "../../components/MainPageHeader";
import { useHistory } from "react-router-dom";
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
  favorito: boolean;
  relation: number;
}

export interface Relation {
  id: number;
  class_id: number;
  user_id: number;
  favorito: boolean;
}

interface Modality {
  id: number;
  description: string;
}

const TeacherList: React.FC = () => {
  let gr: Grupo[];
  gr = [];

  let mods: Modality[];
  mods = [];
  const history = useHistory();
  const [groups, setGroups] = useState(gr);
  const [loading, setLoading] = useState(true);
  const [modalities, setModalities] = useState(mods);

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


  async function loadAllGroups() {
    setGroups([]);
    const { data } = await api.get("relations");
    data.map(async (gp: Relation) => {
      const response = await api.get(`classes/${gp.class_id}`);
      let newGroup: Grupo = {
        id: response.data[0].id,
        subject: response.data[0].subject,
        cost: response.data[0].cost,
        bio: response.data[0].bio,
        name: response.data[1].name,
        profile: response.data[1].profile,
        favorito: gp.favorito,
        relation: gp.id,
      };
      setGroups((valor) => [...valor, newGroup]);
    });
  }

  async function handleFavorite(relation: number, isFavorito: boolean) {
    if (isFavorito) {
      await api.put(`relations/${relation}`, { favorito: false });
      loadAllGroups();
    } else {
      await api.put(`relations/${relation}`, { favorito: true });
      loadAllGroups();
    }
  }

  async function handleDelete(relation: number) {
    api.delete(`relations/${relation}`).then((response) => {
      toast.success("Você saiu do grupo!");
      loadAllGroups();
    });
  }

   function returnName(mood: string): string {
     if (mood && modalities.length > 0) {
       const nome = modalities.filter((mod) => String(mod.id) === String(mood));
       console.log(typeof(mood))
       return nome[0].description;
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
          groups.map((group) => {
            return (
              <Styled.Article
                key={group.id}
                profile={group.profile === "1" ? true : false}
              >
                <header>

                  <div>
                    <strong>{returnName(group.subject)}</strong>
                    <span> {group.name} </span>
                  </div>

                  <Styled.ButtonsContainer>
                    {group.favorito ? (
                      <FaHeart
                        onClick={() => {
                          handleFavorite(group.relation, group.favorito);
                        }}
                      ></FaHeart>
                    ) : (
                      <FaRegHeart
                        onClick={() => {
                          handleFavorite(group.relation, group.favorito);
                        }}
                      ></FaRegHeart>
                    )}

                    <FaTrashAlt
                      onClick={() => {
                        handleDelete(group.relation);
                      }}
                    ></FaTrashAlt>
                  </Styled.ButtonsContainer>
                </header>

                <p>{group.bio}</p>

                <footer>
                  {String(group.profile) === "1" ? (
                    <p>
                      Preço/hora
                      <strong>R$ {group.cost}</strong>
                    </p>
                  ) : null}

                  <a onClick={() => history.push(`group/${group.id}`)}>
                    <AiOutlineFileSearch />
                    {/* <img src={whatsappIcon} alt="whatsapp icon" /> */}
                    Ver detalhes
                  </a>
                </footer>
              </Styled.Article>
            );
          })
        )};
      </Styled.Main>
    </Styled.PageTeacherList>
  );
};

export default TeacherList;
