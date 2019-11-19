import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AppContext } from '../../contexts/AppContext';

import SearchInput from './SearchInput';

const StyledCompanySearch = styled.div`
    & > h5 {
        text-align: center;
    }
`;

const CompanySearch = () => {
    const { companies } = useContext(AppContext);
    const [filter, setFilter] = useState('');
    const handleChange = event => {
        setFilter(event.target.value);
    }
    const lowercasedFilter = filter.toLowerCase();
    const filteredData = companies.filter(item => {
        return Object.keys(item).some(key =>
            item[key].toLowerCase().includes(lowercasedFilter)
        );
    });
    return (
        <StyledCompanySearch>
            <h5>Company Search</h5>
            <SearchInput type='text' value={ filter } onChange={ handleChange } />
            <ul>
                {
                    filteredData.map(item => (
                        <li key={ item._id }>
                            <Link to = { `/company/${ item._id }` }>{ item.name }</Link>
                        </li>
                    ))
                }
            </ul>
        </StyledCompanySearch>
    );
}

export default CompanySearch;