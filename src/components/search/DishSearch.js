import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import SearchInput from './SearchInput';

// fetch menu items url..
const URL = 'https://gentle-retreat-42311.herokuapp.com/api/search/dishes';

const StyledDishSearch = styled.div`
    & > h5 {
        text-align: center;
    }
`;

const DishSearch = () => {
    const [menuItems, setMenuItems] = useState([]);
    const [filter, setFilter] = useState('');
    const handleChange = event => {
        setFilter(event.target.value);
    }
    const lowercasedFilter = filter.toLowerCase();
    const filteredData = menuItems.filter(item => {
        return Object.keys(item).some(key =>
            item[key].toLowerCase().includes(lowercasedFilter)
        );
    });
    // fetching list of menu items from api..
    useEffect(() => {
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();
        const loadData = () => {
            try {
                axios.get(URL, { cancelToken: source.token }).then(result => {
                    setMenuItems(result.data);
                });
            } catch (error) {
                if (axios.isCancel(error)) {
                    console.log('Api call cancelled!');
                } else {
                    throw error;
                }
            }
        };
        loadData();
        // cleaning up the api call on component unmount..
        return () => {
            source.cancel();
        };
    }, []);
    return (
        <StyledDishSearch>
            <h5>Dish Search</h5>
            <SearchInput type='text' value={ filter } onChange={ handleChange } />
            <ul>
                {
                    filteredData.map(item => (
                        <li key={ item._id }>
                            <p>{ item.name }</p>
                        </li>
                    ))
                }
            </ul>
        </StyledDishSearch>
    );
}

export default DishSearch;