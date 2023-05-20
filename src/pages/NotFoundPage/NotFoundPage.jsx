import React from "react";

import NotFound from "./img/404.png";

import { SMain, SContainer, SImageContainer, SImage, SButton } from "./styleNotFoundPage";

const NotFoundPage = () => {
  return (
    <SMain>
      <SContainer>
        <SImageContainer>
          <SImage src={NotFound} alt="Not Found" />
        </SImageContainer>
        <SButton to="/">Return</SButton>
      </SContainer>
    </SMain>
  );
};

export { NotFoundPage };
