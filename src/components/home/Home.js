import React from 'react';
import styled from 'styled-components';

import Map from './Map';

const StyledHome = styled.div`
    height: 100vh;
`;

const Home = () => {
    return (
        <StyledHome>
            <Map />
        </StyledHome>
    );
}

export default Home;