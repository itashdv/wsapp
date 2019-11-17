import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledMenuCategory = styled.div`

`;

const MenuCategory = (props) => {
    const [category, setCategory] = useState(props.category);
    const [items, setItems] = useState(null);
    const fetchItems = async (categoryId) => {
    	const response = await fetch(`https://mighty-brook-28904.herokuapp.com/api/items/${ categoryId }`);
    	const result = await response.json();
    	console.log(result);
    	setItems(result);
    }
    useEffect(() => {
    	fetchItems(category._id);
    }, [category.id]);
    return (
        <StyledMenuCategory>
            <h5>{ category.name }</h5>
        </StyledMenuCategory>
    );
}

export default MenuCategory;