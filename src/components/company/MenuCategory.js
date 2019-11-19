import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledMenuCategory = styled.div`
    & > h4 {
        text-align: center;
    }
`;

const ItemImage = styled.img`
    width: 100%;
    height: auto;
`;

const MenuCategory = (props) => {
    const [category, setCategory] = useState(props.category);
    const [items, setItems] = useState([]);
    const fetchItems = async (categoryId) => {
    	const response = await fetch(`https://gentle-retreat-42311.herokuapp.com/api/items/${ categoryId }`);
    	const result = await response.json();
    	console.log(result);
    	setItems(result);
    }
    useEffect(() => {
    	fetchItems(category._id);
    }, [category._id]);
    return (
        <StyledMenuCategory>
            <h4>{ category.name }</h4>
            {
                items.map((item, index) => (
                    <div key={ index }>
                        <h4>{ item.name }</h4>
                        <ItemImage src={ item.image.url } />
                        <p>{ item.description }</p>
                        <p><u>Calories</u></p>
                        <p>carbs: { item.calories.carbs }</p>
                        <p>fats: { item.calories.fats }</p>
                        <p>proteins: { item.calories.proteins }</p>
                        <hr />
                    </div>
                ))
            }
        </StyledMenuCategory>
    );
}

export default MenuCategory;