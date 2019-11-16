import React from 'react';
import styled from 'styled-components';

import MenuLink from './MenuLink';

const StyledMenu = styled.ul`
  text-align: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const Menu = () => {
  return (
    <StyledMenu>
      <li><MenuLink menuLink='about' menuText='About us' /></li>
      <li><MenuLink menuLink='contacts' menuText='Contacts' /></li>
      <li><MenuLink menuLink='login' menuText='Login' /></li>
    </StyledMenu>
  );
}

export default Menu;