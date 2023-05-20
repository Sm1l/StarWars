import React from "react";
import { useDispatch } from "react-redux";

import { getModalPeople } from "../../store/peopleSlice";

//*style
import {
  SCardContainer,
  SCardName,
  SAnthropometricContainer,
  SAnthropometricItem,
  SAnthropometricCircle,
  SAnthropometricText,
  STagContainer,
  STagItem,
} from "./stylesCard";

const Card = ({ card, setModalIsVisible }) => {
  const dispatch = useDispatch();
  const cardHandleClick = () => {
    setModalIsVisible(true);
    dispatch(getModalPeople({ modalPeople: card }));
  };

  const genderItem = () => {
    if (card.gender === "male" || card.gender === "scraanwo") {
      return <STagItem>{card.gender}</STagItem>;
    } else if (card.gender === "female" || card.gender === "wwwoscraanwo") {
      return <STagItem pink>{card.gender}</STagItem>;
    } else if (card.gender === "hermaphrodite" || card.gender === "acworcscraakacrcoowaahaowo") {
      return <STagItem yellow>{card.gender}</STagItem>;
    }
  };

  return (
    <SCardContainer tabIndex={0} onClick={cardHandleClick}>
      <SCardName>{card.name}</SCardName>
      <SAnthropometricContainer>
        <SAnthropometricItem>
          <SAnthropometricCircle>{card.height !== "unknown" ? card.height : "?"}</SAnthropometricCircle>
          <SAnthropometricText>height</SAnthropometricText>
        </SAnthropometricItem>
        <SAnthropometricItem>
          <SAnthropometricCircle>{card.mass !== "unknown" ? card.mass : "?"}</SAnthropometricCircle>
          <SAnthropometricText>mass</SAnthropometricText>
        </SAnthropometricItem>
      </SAnthropometricContainer>
      <STagContainer>
        {card.gender !== "n/a" && genderItem()}
        {card.birth_year !== "unknown" && <STagItem blue>{card.birth_year}</STagItem>}
      </STagContainer>
    </SCardContainer>
  );
};

export { Card };
