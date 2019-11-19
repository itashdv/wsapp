import React, { createContext, useReducer, useEffect } from 'react';
import axios from 'axios';
import companyReducer from '../reducers/CompanyReducer';
import mapReducer from '../reducers/MapReducer';

// fetch companies url..
const URL = 'https://gentle-retreat-42311.herokuapp.com/api/search/companies';

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const [companies, dispatch1] = useReducer(companyReducer, []);
    const [selectedCompany, dispatch2] = useReducer(mapReducer, null);
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
    }, [dispatch1]);
    return (
        <AppContext.Provider value = {{
            companies,
            dispatch1,
            selectedCompany,
            dispatch2
        }}>
            { props.children }
        </AppContext.Provider>
    );
}

export default AppContextProvider;