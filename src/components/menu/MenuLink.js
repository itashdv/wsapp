import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledMenuLink = styled(Link)`
  display: block;
  margin: 16px;
  padding: 10px;
  color: #527559;
  text-decoration: none;
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
`;

const MenuLink = (props) => {
  return (
    <StyledMenuLink to={ `/${ props.menuLink }` }>
      { props.menuText }
    </StyledMenuLink>
  );
}

export default MenuLink;