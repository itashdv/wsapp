import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledMenuCategory = styled.div`

`;

const MenuCategory = (props) => {
    const [category, setCategory] = useState(props.category);
    const [items, setItems] = useState(null);
    return (
        <StyledMenuCategory>
            <h5>{ category.name }</h5>

        </StyledMenuCategory>
    );
}

export default MenuCategory;