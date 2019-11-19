import React from 'react';
import styled from 'styled-components';

const StyledLogin = styled.div`
    & > h3, p {
        text-align: center;
    }
`;

const Login = () => {
    return (
        <StyledLogin>
            <h3>Login</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            </p>
        </StyledLogin>
    );
};

export default Login;