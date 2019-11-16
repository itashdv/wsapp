import React from 'react';
import styled from 'styled-components';

const StyledNotFound = styled.h3`
    text-align: center;
    color: #527559;
`;

const NotFound = () => {
  return (
    <StyledNotFound>Not Found 404</StyledNotFound>
  );
}

export default NotFound;