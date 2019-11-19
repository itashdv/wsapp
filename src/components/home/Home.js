import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { AppContext } from '../../contexts/AppContext';
import Map from './Map';

// fetch companies url..
const URL = 'https://gentle-retreat-42311.herokuapp.com/api/search/companies';

const StyledHome = styled.div`
    height: 100vh;
`;

const Home = () => {
    const { dispatch1 } = useContext(AppContext);
    // fetching list of companies from api..
    useEffect(() => {
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();
        const loadData = () => {
            try {
                axios.get(URL, { cancelToken: source.token }).then(result => {
                    dispatch1({
                        type: 'LOAD_COMPANIES',
                        companies: result.data
                    });
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
        <StyledHome>
            <Map />
        </StyledHome>
    );
}

export default Home;