import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import { useDispatch, useSelector } from "react-redux";
// import { getPeople } from "../../store/PeopleSlice";
// import { getCards } from "../../helpers/GetCards/GetCards";
import axios from "axios";
import { v4 } from "uuid";

import { Card } from "../Card";

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 35px;
`;

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardContainer = ({ allPeople, setAllPeople, setModalIsVisible }) => {
  // const [allPeople, setAllPeople] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [peoplesPerPage] = useState(9);

  const URL = "https://swapi.dev/api/people/";
  const getPeople = (url) => axios.get(url);
  const getAllPeople = async () => {
    setLoading(true);
    let allPpl = [];
    let next = URL;
    while (next != null) {
      const res = await getPeople(next);
      allPpl = allPpl.concat(res.data.results);
      next = res.data.next;
    }
    setLoading(false);
    setAllPeople(allPpl);
  };

  useEffect(() => {
    getAllPeople();
  }, []);
  console.log(allPeople);

  //*---------------------------------start-------------------------
  // const URL = "https://swapi.dev/api/people/";
  // let people = [];

  // const getCards = (url) => {
  //   axios
  //     .get(url)
  //     .then((response) => {
  //       people = people.concat(response.data.results);
  //       // console.log("people", people);
  //       if (response.data.next) {
  //         getCards(response.data.next);
  //       }
  //       return people;
  //     })
  //     .catch((error) => console.log(error));
  // };
  // // getCards(URL);
  // // console.log("people", people);
  //*---------------------------------end-------------------------

  //todo Igor
  // const url = "https://swapi.dev/api/people";

  // const getPeople = (url) => fetch(url).then((res) => res.json());

  // const getAllPeople = async () => {
  //   let allPeople = [];

  //   let next = url;

  //   while (next != null) {
  //     const res = await getPeople(next);

  //     allPeople = allPeople.concat(res.results);
  //     next = res.next;
  //   }

  //   console.log(allPeople);

  //   return allPeople;
  // };

  // getAllPeople();

  if (loading) {
    return (
      <LoadingContainer>
        <h2>Loading...</h2>
      </LoadingContainer>
    );
  }
  return (
    <StyledContainer>
      {allPeople.map((card) => (
        <Card card={card} key={v4()} setModalIsVisible={setModalIsVisible} />
      ))}
    </StyledContainer>
  );
};

export { CardContainer };
