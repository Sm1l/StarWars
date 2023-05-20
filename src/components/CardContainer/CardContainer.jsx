import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { v4 } from "uuid";
import { Pagination } from "@mui/material";

import { getPeoples } from "../../store/peopleSlice";
import { Card } from "../Card";
import { SelectFilter } from "../SelectFilter";

import DartVader from "./img/DartVader.png";

import { SContainer, SSelectContainer, SLoadingContainer, SImgLoading, STitle, SSpan } from "./stylesCardContainer";

//*component
const CardContainer = ({ modalIsVisible, setModalIsVisible }) => {
  const allPeoples = useSelector((state) => state.people.peoples);
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
