import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-white);
  background-color: var(--color-blue);
  width: 100%;
  padding-top: 10px;
`;
export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  padding-top: 10px;
  padding: 10px;
  gap: 10px;
`;
export const StyledNavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-white);
  gap: 70px;
  font-size: 25px;
  line-height: 100%;
  @media (max-width: 768px) {
    gap: 20px;
    font-size: 18px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: var(--color-white);
  transition: color 300ms ease-out;

  &:hover {
    color: var(--color-light-green);
    transition: color 300ms ease-out;
  }
  &.active {
    text-decoration: underline;
    color: var(--color-light-green);
  }
`;
