import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

import { CardContainer } from "../../components/CardContainer";
import { CardContainerWookie } from "../../components/CardContainerWookie";
import { ModalCard } from "../../components/ModalCard";
import { LanguageContainer } from "../../components/LanguageContainer";

const SMain = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  gap: 20px;
`;

//*component

const CharactersPage = () => {
  // const allPeople = useSelector((state) => state.people.peoples);
  const modalPeople = useSelector((state) => state.people.modalPeople);

  const language = useSelector((state) => state.language.language);
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
          <LanguageContainer />
          {language === "en" ? (
            <CardContainer modalIsVisible={modalIsVisible} setModalIsVisible={setModalIsVisible} />
          ) : (
            <CardContainerWookie modalIsVisible={modalIsVisible} setModalIsVisible={setModalIsVisible} />
          )}
        </SContainer>
      </SMain>
    </>
  );
};

export { CharactersPage };
