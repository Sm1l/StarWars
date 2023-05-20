import styled, { css } from "styled-components";

export const SCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-light-grey);
  padding: 10px 25px;
  border-radius: 8px;
  box-shadow: 4px 4px 4px rgba(33, 33, 33, 0.1);
  gap: 15px;
  cursor: pointer;
`;
export const SCardName = styled.p`
  font-size: 18px;
  font-weight: 700;
  line-height: 21px;
  text-shadow: 4px 4px 4px rgba(33, 33, 33, 0.1);
`;

export const SAnthropometricContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const SAnthropometricItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;
export const SAnthropometricCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 45px;
  height: 45px;
  font-size: 15px;
  line-height: 18px;
  padding: 10px;
  border: 3px solid var(--color-black);
  border-radius: 50%;
  overflow: hidden;
`;
export const SAnthropometricText = styled.p`
  color: var(--color-grey);
`;

export const STagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const STagItem = styled.div`
  font-family: "Roboto";
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-green);
  box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.18);
  border-radius: 11px;
  padding: 2px 20px;
  ${(props) =>
    props.blue &&
    css`
      background-color: var(--color-light-blue);
    `}
  ${(props) =>
    props.yellow &&
    css`
      background-color: var(--color-yellow);
    `}
  ${(props) =>
    props.pink &&
    css`
      background-color: var(--color-pink);
    `}
`;
