import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../contexts/AppContext';

import SearchInput from './SearchInput';

const StyledDishSearch = styled.div`
    & > h5 {
        text-align: center;
    }
`;

const DishSearch = () => {
    const { searchDishes } = useContext(AppContext);
    const [filter, setFilter] = useState('');
    const handleChange = event => {
        setFilter(event.target.value);
    }
    const lowercasedFilter = filter.toLowerCase();
    const filteredData = searchDishes.filter(item => {
        return Object.keys(item).some(key =>
            item[key].toLowerCase().includes(lowercasedFilter)
        );
    });
    return (
        <StyledDishSearch>
            <h5>Dish Search</h5>
            <SearchInput type='text' value={ filter } onChange={ handleChange } />
            {
                filteredData.map(item => (
                    <div key={ item._id }>
                        <div>
                            <p>{ item.name }</p>

                        </div>
                    </div>
                ))
            }
        </StyledDishSearch>
    );
}

export default DishSearch;