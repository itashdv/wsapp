import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import CompanyMenu from './CompanyMenu';
import Loading from '../Loading';

const StyledCompany = styled.div`
    padding: 5px;
    & > h3 {
        text-align: center;
    }
    & > img {
        width: 100%;
        height: auto;
    }
`;

// fetch company url..
const URL = 'https://gentle-retreat-42311.herokuapp.com/api/companies';

const Company = ({ history, match }) => {
    const [company, setCompany] = useState(null);
    // fetching company from api..
    useEffect(() => {
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();
        const loadData = () => {
            try {
                axios.get(`${ URL }/${ match.params.id }`, { cancelToken: source.token }).then(result => {
                    setCompany(result.data);
                });
            } catch (error) {
                if (axios.isCancel(error)) {
                    console.log('Api call canceled!');
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
    }, [match.params.id]);
    return (
        <StyledCompany>
            <button onClick={ () => { history.goBack(); } }>Back</button>
            { !company && (
                <Loading />
            ) }
            { company && (
                <>
                    <h3>{ company.name }</h3>
                    <img alt = { company.name } src = { company.image.url } />
                    <p>{ company.description }</p>
                    <h4>Address</h4>
                    <p>{ company.address }</p>
                    <h4>Website</h4>
                    <p><a target='_blank' rel='noopener noreferrer' href={ company.website }>{ company.website }</a></p>
                    <CompanyMenu companyId = { company._id } />
                </>
            ) }
        </StyledCompany>
    );
};

export default Company;