import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Menu } from 'styled-icons/boxicons-regular/Menu';
import { Search } from 'styled-icons/boxicons-regular/Search';

export const StyledMenuIcon = styled(Menu)`
  color: #c7d9cb;
  height: 24px;
`;

export const StyledSearchIcon = styled(Search)`
  color: #c7d9cb;
  height: 24px;
`;

export const StyledLink = styled(Link)`
  color: #c7d9cb;
  height: 24px;
  text-decoration: none;
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
`;

export const StyledMenuLink = styled(StyledLink)``;
export const StyledTitleLink = styled(StyledLink)``;
export const StyledSearchLink = styled(StyledLink)``;

export const StyledAppbar = styled.div`
  background-color: #527559;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  height: 24px;
  padding: 16px;
`;

// findable by const styledAppbar = wrapper.find('StyledAppbar');
StyledAppbar.displayName = 'StyledAppbar';

const Appbar = () => (
  <StyledAppbar>
    <StyledMenuLink to='/menu'>
      <StyledMenuIcon />
    </StyledMenuLink>
    <StyledTitleLink to='/'>
      WSApp
    </StyledTitleLink>
    <StyledSearchLink to='/search'>
      <StyledSearchIcon />
    </StyledSearchLink>
  </StyledAppbar>
);

export default Appbar;