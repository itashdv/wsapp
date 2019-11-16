// main context for the whole app..
import React, { createContext, useState, useEffect, useReducer } from 'react';
import appReducer from '../reducers/AppReducer';

export const AppContext = createContext();

const AppContextProvider = (props) => {

  const [currentCompany, dispatch] = useReducer(appReducer, null);

  const [companies, setCompanies] = useState([]);

  // fetching list of companies from api..
  const fetchData = async () => {
    const response = await fetch('https://mighty-brook-28904.herokuapp.com/api/companies');
    const jsonArr = await response.json();
    setCompanies(jsonArr);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider value = {{ companies, currentCompany, dispatch }}>
      { props.children }
    </AppContext.Provider>
  );

}

export default AppContextProvider;