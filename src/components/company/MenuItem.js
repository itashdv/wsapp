import React from 'react';
import styled from 'styled-components';

const StyledMenuItem = styled.div`
    & > img {
        width: 100%;
        height: auto;
    }
`;

const MenuItem = (props) => {
    return (
        <StyledMenuItem>
            <p><u>{ props.item.name }</u></p>
            <img alt = { props.item.name } src = { props.item.image.url } />
            <p>{ props.item.description }</p>
            <p><u>Calories</u></p>
            <p>carbs: { props.item.calories.carbs }</p>
            <p>fats: { props.item.calories.fats }</p>
            <p>proteins: { props.item.calories.proteins }</p>
            <hr />
        </StyledMenuItem>
    );
};

export default MenuItem;