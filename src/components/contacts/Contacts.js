import React from 'react';
import styled from 'styled-components';

const StyledContacts = styled.div`
    & > h3, p {
        text-align: center;
    }
`;

const Contacts = () => {
    return (
        <StyledContacts>
            <h3>Contact us</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu dictum sapien. Nam vitae risus posuere, volutpat arcu id, consequat sem. Vestibulum quis lorem mattis turpis scelerisque laoreet. Donec tempus neque at orci elementum, venenatis porta elit eleifend. Donec semper sit amet magna in viverra. Duis a sapien dui. Sed dictum dolor in felis iaculis, in imperdiet mauris dignissim.
            </p>
        </StyledContacts>
    );
};

export default Contacts;