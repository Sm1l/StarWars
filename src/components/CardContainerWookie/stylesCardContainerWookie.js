import styled, { keyframes } from "styled-components";

export const SContainer = styled.div`
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

export const SLoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  justify-content: space-between;
  height: 100%;
`;

export const rotate = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-360deg);
    }
`;

export const SImgLoading = styled.img`
  animation: ${rotate} 2s linear infinite;
`;
export const STitle = styled.h2`
  font-weight: 400;
  font-size: 35px;
  line-height: 41px;
  text-align: center;
  letter-spacing: 3px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media (max-width: 765px) {
    font-size: 28px;
  }
`;

export const SSpan = styled.span`
  font-weight: 700;
`;
