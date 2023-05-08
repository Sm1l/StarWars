import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getPeoples } from "../../store/PeopleSlice";
import axios from "axios";
import { v4 } from "uuid";
import { Pagination } from "@mui/material";

import { Card } from "../Card";

import DartVader from "./img/DartVader.png";

const SContainer = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(3, 1fr);
  gap: 35px;
  @media (max-width: 1124px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const SLoadingContainer = styled.div`
  display: flex;
  /* flex: 1 auto; */
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  gap: 20px;
  justify-content: space-between;
  height: 100%;
`;

const rotate = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;

const SImgLoading = styled.img`
  animation: ${rotate} 2s linear infinite;
`;

//*component
const CardContainer = ({ modalIsVisible, setModalIsVisible }) => {
  const allPeople = useSelector((state) => state.people.peoples);

  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [peoplesPerPage, setPeoplesPerPage] = useState(9);
  const [currentPeoples, setCurrentPeoples] = useState([]);
  const [pageQty, setPageQty] = useState(0);
  const dispatch = useDispatch();

  //*api
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
    dispatch(getPeoples({ peoples: allPpl }));
    // return allPpl;
  };

  useEffect(() => {
    if (allPeople.length === 0) {
      getAllPeople();
    }
  }, [allPeople]);

  //*pagination

  useEffect(() => {
    setPageQty(Math.ceil(allPeople.length / peoplesPerPage));
  }, [allPeople, peoplesPerPage]);

  useEffect(() => {
    setCurrentPeoples(allPeople.slice((currentPage - 1) * peoplesPerPage, currentPage * peoplesPerPage));
  }, [allPeople, currentPage, peoplesPerPage]);

  //*resize

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setPeoplesPerPage(9);
    if (windowWidth <= 1124) {
      setPeoplesPerPage(8);
    }
    if (windowWidth <= 600) {
      setPeoplesPerPage(5);
    }
  }, [windowWidth]);

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
      <SLoadingContainer>
        <SImgLoading src={DartVader} alt="Dart Vader loading" />
      </SLoadingContainer>
    );
  }
  return (
    <SLoadingContainer>
      <SContainer>
        {currentPeoples.map((card) => (
          <Card card={card} key={v4()} modalIsVisible={modalIsVisible} setModalIsVisible={setModalIsVisible} />
        ))}
      </SContainer>
      <Pagination
        showFirstButton
        showLastButton
        count={pageQty}
        page={currentPage}
        size="small"
        onChange={(_, num) => setCurrentPage(num)}
      ></Pagination>
    </SLoadingContainer>
  );
};

export { CardContainer };
