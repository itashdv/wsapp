// main context for the whole app..
import React, { createContext, useState, useEffect, useReducer } from 'react';
import mapReducer from '../reducers/MapReducer';

export const AppContext = createContext();

const AppContextProvider = (props) => {

  const [currentCompany, dispatch1] = useReducer(mapReducer, null);

  const [companies, setCompanies] = useState([]);

  const [searchCompanies, setSearchCompanies] = useState([]);

  const [searchDishes, setSearchDishes] = useState([]);

  // fetching list of companies for Home component..
  const fetchCompanies = async () => {
    const response = await fetch('https://gentle-retreat-42311.herokuapp.com/api/companies');
    const result = await response.json();
    setCompanies(result);
  }

  // fetching list of companies for Search component..
  const fetchCompaniesForSearch = async () => {
    const response = await fetch('https://gentle-retreat-42311.herokuapp.com/api/search/companies');
    const result = await response.json();
    setSearchCompanies(result);
  }

  // fetching list of menu items for Search component..
  const fetchDishesForSearch = async () => {
    const response = await fetch('https://gentle-retreat-42311.herokuapp.com/api/search/dishes');
    const result = await response.json();
    setSearchDishes(result);
  }

  useEffect(() => {
    fetchCompanies();
    fetchCompaniesForSearch();
    fetchDishesForSearch();
  }, []);

  return (
    <AppContext.Provider value = {{
        companies,
        searchCompanies,
        searchDishes,
        currentCompany,
        dispatch1
      }}>
      { props.children }
    </AppContext.Provider>
  );

}

export default AppContextProvider;