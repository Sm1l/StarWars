import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 } from "uuid";
import { getPeoplesWookie } from "../../store/peopleSlice";
import { useSelector, useDispatch } from "react-redux";
import styled, { keyframes } from "styled-components";

import { Card } from "../Card/Card";

import DartVader from "./img/DartVader.png";

//*styles
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
      transform: rotate(-360deg);
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
  @media (max-width: 765px) {
    font-size: 26px;
  }
`;

const SSpan = styled.span`
  font-weight: 700;
`;

const CardContainerWookie = ({ modalIsVisible, setModalIsVisible }) => {
  const dispatch = useDispatch();
  const allPeoplesWookie = useSelector((state) => state.people.peoplesWookie);
  const [loading, setLoading] = useState(false);

  //?wookie

  const getAllPeopleWookie = async () => {
    const getPeople = (url) => axios.get(url);
    setLoading(true);
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
    setLoading(false);
    dispatch(getPeoplesWookie({ peoplesWookie: allPplWookie }));
  };

  useEffect(() => {
    if (allPeoplesWookie.length === 0) {
      getAllPeopleWookie();
    }
  }, [allPeoplesWookie]);

  //?wookie
  if (loading) {
    return (
      <SLoadingContainer>
        <SImgLoading src={DartVader} alt="Dart Vader loading" />
      </SLoadingContainer>
    );
  }
  return (
    <>
      <SLoadingContainer>
        <STitle>
          {allPeoplesWookie.length !== 0 ? allPeoplesWookie.length : null} <SSpan>rcwochuanaoc</SSpan>
        </STitle>
        <SContainer>
          {allPeoplesWookie.map((card) => (
            <Card
              card={{
                name: card.whrascwo,
                mass: card.scracc,
                height: card.acwoahrracao,
                gender: card.rrwowhwaworc,
                birth_year: card.rhahrcaoac_roworarc,
                hair_color: card.acraahrc_oaooanoorc,
                skin_color: card.corahwh_oaooanoorc,
                eye_color: card.worowo_oaooanoorc,
              }}
              key={v4()}
              modalIsVisible={modalIsVisible}
              setModalIsVisible={setModalIsVisible}
            />
          ))}
        </SContainer>
      </SLoadingContainer>
    </>
  );
};

export { CardContainerWookie };
