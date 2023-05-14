import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { v4 } from "uuid";
import { Pagination } from "@mui/material";

import { getPeoples, getPeoplesWookie } from "../../store/peopleSlice";
import { Card } from "../Card";
import { SelectFilter } from "../SelectFilter";

import DartVader from "./img/DartVader.png";

//*style
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

const SSelectContainer = styled.div`
  align-self: flex-start;
`;

const SLoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

const STitle = styled.h2`
  font-weight: 400;
  font-size: 35px;
  line-height: 41px;
  text-align: center;
  letter-spacing: 3px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const SSpan = styled.span`
  font-weight: 700;
`;

//*component
const CardContainer = ({ modalIsVisible, setModalIsVisible }) => {
  const allPeoples = useSelector((state) => state.people.peoples);
  const allPeoplesWookie = useSelector((state) => state.people.peoplesWookie);
  //!delete test
  // useEffect(() => {
  //   const set = new Set();
  //   allPeoples.map((people) => {
  //     set.add(people.eye_color);
  //   });
  //   console.log(set);
  // }, [allPeoples]);

  const [allFilterPeoples, setAllFilterPeoples] = useState(allPeoples);

  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [peoplesPerPage, setPeoplesPerPage] = useState(9);
  const [currentPeoples, setCurrentPeoples] = useState([]);
  const [pageQty, setPageQty] = useState(0);

  const [colorEye, setColorEye] = useState("all");

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
    if (allFilterPeoples.length === 0) {
      getAllPeople();
    }
  }, [allFilterPeoples]);

  //?wookie

  const getAllPeopleWookie = async () => {
    // setLoading(true);
    let allPplWookie = [];
    for (let i = 1; i < 84; i++) {
      const URL_WOOKIE = `https://swapi.dev/api/people/${i}/?format=wookiee`;
      try {
        const res = await getPeople(URL_WOOKIE);
        allPplWookie = allPplWookie.concat(res.data);
      } catch (e) {
        console.error(e, "Page:", i);
        continue;
      }
    }
    // setLoading(false);
    dispatch(getPeoplesWookie({ peoplesWookie: allPplWookie }));
  };

  useEffect(() => {
    if (allPeoplesWookie.length === 0) {
      getAllPeopleWookie();
    }
  }, [allPeoplesWookie]);

  //?wookie

  //*pagination
  useEffect(() => {
    setPageQty(Math.ceil(allFilterPeoples.length / peoplesPerPage));
  }, [allFilterPeoples, peoplesPerPage]);

  useEffect(() => {
    setCurrentPeoples(allFilterPeoples.slice((currentPage - 1) * peoplesPerPage, currentPage * peoplesPerPage));
  }, [allFilterPeoples, currentPage, peoplesPerPage]);

  //*filter
  useEffect(() => {
    if (colorEye === "all") {
      setAllFilterPeoples(allPeoples);
    } else {
      const filterPeoples = allPeoples.filter((people) => people.eye_color === colorEye);
      setAllFilterPeoples(filterPeoples);
    }
    setCurrentPage(1);
  }, [allPeoples, colorEye]);

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

  if (loading) {
    return (
      <SLoadingContainer>
        <SImgLoading src={DartVader} alt="Dart Vader loading" />
      </SLoadingContainer>
    );
  }
  return (
    <SLoadingContainer>
      <STitle>
        {allFilterPeoples.length !== 0 ? allFilterPeoples.length : null} <SSpan>Peoples</SSpan> for you to choose your
        favorite
      </STitle>
      <SSelectContainer>
        <SelectFilter colorEye={colorEye} setColorEye={setColorEye} />
      </SSelectContainer>
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
