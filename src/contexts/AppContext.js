import React, { createContext, useReducer } from 'react';
import companyReducer from '../reducers/CompanyReducer';
import mapReducer from '../reducers/MapReducer';

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const [companies, dispatch1] = useReducer(companyReducer, []);
    const [selectedCompany, dispatch2] = useReducer(mapReducer, null);
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