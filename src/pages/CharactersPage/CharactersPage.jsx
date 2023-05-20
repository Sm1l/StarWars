import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

import { CardContainer } from "../../components/CardContainer";
import { CardContainerWookie } from "../../components/CardContainerWookie";
import { ModalCard } from "../../components/ModalCard";
import { LanguageContainer } from "../../components/LanguageContainer";

import { SMain, SContainer } from "./stylesCharacterPage";

const CharactersPage = () => {
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
      {modalIsVisible && <ModalCard card={modalPeople} setModalIsVisible={setModalIsVisible} />}
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
