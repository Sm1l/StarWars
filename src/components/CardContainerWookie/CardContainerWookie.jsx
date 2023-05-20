import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 } from "uuid";
import { getPeoplesWookie } from "../../store/peopleSlice";
import { useSelector, useDispatch } from "react-redux";

import { Card } from "../Card/Card";

import DartVader from "./img/DartVader.png";

import { SContainer, SLoadingContainer, SImgLoading, STitle, SSpan } from "./stylesCardContainerWookie";

const CardContainerWookie = ({ modalIsVisible, setModalIsVisible }) => {
  const dispatch = useDispatch();
  const allPeoplesWookie = useSelector((state) => state.people.peoplesWookie);
  const [loading, setLoading] = useState(false);
  const [peoplesWookie, setPeoplesWookie] = useState(null);
  const [fetching, setFetching] = useState(true);
  let [cardsToLoad, setCardsToLoad] = useState(12);
  const [cardsToRender] = useState(9);

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
        console.log(peoplesWookie);
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

  useEffect(() => {
    setPeoplesWookie(allPeoplesWookie.slice(0, cardsToLoad));
  }, [allPeoplesWookie]);

  const scrollHandler = (e) => {
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
      // console.log("scrollHeight", e.target.documentElement.scrollHeight); //*высота страницы с учетом скролла
      // console.log("scrollTop", e.target.documentElement.scrollTop); //*положение скролла от верха страницы
      // console.log("innerHeight", window.innerHeight); //*высота страницы браузера
      setFetching(true);
    }
  };

  const addPeoplesWookie = () => {
    if (peoplesWookie?.length < allPeoplesWookie?.length) {
      setPeoplesWookie(allPeoplesWookie.slice(0, cardsToLoad + cardsToRender));
      setCardsToLoad(cardsToLoad + cardsToRender);
    }
  };

  useEffect(() => {
    if (fetching) {
      addPeoplesWookie();
    }
    setFetching(false);
  }, [fetching]);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

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
          {peoplesWookie ? peoplesWookie.length : null} <SSpan>rcwochuanaoc</SSpan>
        </STitle>
        <SContainer>
          {peoplesWookie &&
            peoplesWookie.map((card) => (
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
