import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import AppContextProvider from './contexts/AppContext';

import Appbar from './components/appbar/Appbar';
import Menu from './components/menu/Menu';
import Search from './components/search/Search';
import Home from './components/home/Home';
import Company from './components/company/Company';
import NotFound from './components/NotFound';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #c7d9cb;
    margin: 0;
    padding: 0;
    font-family: "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue";
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <AppContextProvider>
        <BrowserRouter>
          <Appbar />
          <Switch>
            <Route exact path='/' component = { Home } />
            <Route exact path='/menu' component = { Menu } />
            <Route exact path='/search' component = { Search } />
            <Route exact path='/company/:id' component = { Company } />
            <Route path='*' component = { NotFound } />
          </Switch>
        </BrowserRouter>
      </AppContextProvider>
    </>
  );
}

export default App;
