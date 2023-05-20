import styled, { css } from "styled-components";

export const SModalOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: hidden;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

export const SModalContainer = styled.div`
  background-color: var(--color-blue);
  position: relative;
  display: flex;
  max-width: 800px;
  margin: 20px;
  box-shadow: 4px 4px 8px rgba(1, 28, 64, 0.2);
  border-radius: 16px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  gap: 30px;
  @media (max-width: 768px) {
    padding: 10px;
    gap: 10px;
  }
`;
export const SInfoContainer = styled.div`
  background-image: linear-gradient(var(--color-purple), var(--color-blue));
  padding: 30px;
  border-radius: 0 16px 16px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  @media (max-width: 768px) {
    padding: 10px;
    gap: 10px;
  }
`;
export const STagContainer = styled.div`
  display: flex;
  gap: 10px;
  align-self: flex-end;
`;
export const STagItem = styled.div`
  font-family: "Roboto";
  font-size: 12px;
  line-height: 14px;
  box-shadow: 4px 4px 8px rgba(1, 28, 64, 0.2);
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

export const SModalName = styled.h2`
  color: var(--color-white);
  font-weight: 700;
  font-size: 36px;
  line-height: 42px;
  text-shadow: 4px 4px 4px rgba(33, 33, 33, 0.1);
  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

export const SInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px;
  background-color: var(--color-white);
  border-radius: 10px;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const SInfoP = styled.p`
  font-size: 16px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
export const SAnthropometricContainer = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 768px) {
    gap: 10px;
  }
`;

export const SAnthropometricItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: var(--color-white);
  padding: 10px;
  border-radius: 16px;
`;
export const SAnthropometricCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 45px;
  height: 45px;
  font-size: 16px;
  line-height: 18px;
  padding: 10px;
  border: 3px solid var(--color-black);
  border-radius: 50%;
  overflow: hidden;
`;
export const SAnthropometricText = styled.p`
  color: var(--color-grey);
`;

export const SCloseButton = styled.button`
  position: absolute;
  top: -40px;
  right: 0;
  background-color: transparent;
  transition: transform 0.5s ease-in-out;
  :hover {
    transform: rotateZ(90deg);
    transition: transform 0.5s ease-in-out;
  }
`;

export const SCloseImg = styled.img``;
