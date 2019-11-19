import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import CompanySearch from './CompanySearch';
import DishSearch from './DishSearch';

const StyledSearch = styled.div`
    padding: 10px;
    & > h4 {
        text-align: center;
    }
`;

const Search = () => {
    const [company, setCompany] = useState(false);
    const [dish, setDish] = useState(false);
    const searchByCompany = event => {
        event.preventDefault();
        setDish(false);
        setCompany(true);
    }
    const searchByDish = event => {
        event.preventDefault();
        setCompany(false);
        setDish(true);
    }
    return (
        <StyledSearch>
            <h4>Search by <a href='#' onClick={ searchByCompany }>company</a> | <a href='#' onClick={ searchByDish }>dish</a></h4>
            { company && (
                <CompanySearch />
            ) }
            { dish && (
                <DishSearch />
            ) }
        </StyledSearch>
    );
}

export default Search;