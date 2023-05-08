import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

import { CardContainer } from "../../components/CardContainer";
import { ModalCard } from "../../components/ModalCard";

const SMain = styled.main`
  /* background-color: var(--color-yellow); */
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
`;
const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  padding: 20px 10px;
  width: 100%;
  height: 100%;
  /* align-items: center;
  justify-content: center; */
  gap: 50px;
`;

const SLanguage = styled.p`
  align-self: flex-end;
  font-family: "Source Sans Pro";
  font-size: 16px;
  line-height: 20px;
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

const CharactersPage = () => {
  const allPeople = useSelector((state) => state.people.peoples);
  const modalPeople = useSelector((state) => state.people.modalPeople);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  //*disable scroll
  useEffect(() => {
    if (modalIsVisible) {
      disableBodyScroll(ModalCard);
    } else {
      enableBodyScroll(ModalCard);
    }
  }, [modalIsVisible]);

  //*close modal "Escape"
  useEffect(() => {
    const closeModal = (e) => {
      if (e.key === "Escape") {
        setModalIsVisible(false);
      }
    };
    if (modalIsVisible) {
      window.addEventListener("keydown", closeModal);
    }

    return () => {
      window.removeEventListener("keydown", closeModal);
    };
  }, [modalIsVisible]);

  return (
    <>
      {modalIsVisible && <ModalCard card={modalPeople} setModalIsVisible={setModalIsVisible}></ModalCard>}
      <SMain>
        <SContainer>
          <SLanguage>language: en</SLanguage>
          <STitle>
            {allPeople.length !== 0 ? allPeople.length : null} <SSpan>Peoples</SSpan> for you to choose your favorite
          </STitle>
          <div>
            <div>Color eye</div>
            <CardContainer modalIsVisible={modalIsVisible} setModalIsVisible={setModalIsVisible} />
          </div>
        </SContainer>
      </SMain>
    </>
  );
};

export { CharactersPage };
