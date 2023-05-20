import React from "react";
import Logo from "./img/Logo.svg";

import "../../abstracts/variables.scss";

import { StyledHeader, StyledContainer, StyledNavContainer, StyledNavLink } from "./headerStyles";

const Header = () => {
  return (
    <StyledHeader>
      <StyledContainer>
        <img src={Logo} alt="Star Wars logo" />
        <StyledNavContainer>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/characters">Characters</StyledNavLink>
        </StyledNavContainer>
      </StyledContainer>
    </StyledHeader>
  );
};

export { Header };
