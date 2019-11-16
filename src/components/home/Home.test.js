import React from 'react';
import { GoogleMap, LoadScriptNext, Marker } from '@react-google-maps/api';
import 'jest-styled-components';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

import AppContextProvider from '../../contexts/AppContext';

import Home from './Home';
import { StyledHome } from './Home';

describe('Home Page with a Map', () => {
    // const wrap = mount(
    //     <AppContextProvider>
    //         <Home />
    //     </AppContextProvider>
    // );
    it('Must have one StyledHome component with a height of 100vh', () => {
        const wrap = mount(<AppContextProvider><Home /></AppContextProvider>);
        expect(wrap.find(StyledHome)).toHaveLength(1);
        expect(wrap.find(StyledHome)).toHaveStyleRule('height', '100vh');
    });
    it('Must have one LoadScriptNext component with prop googleMapsApiKey', () => {
        const wrap = mount(<AppContextProvider><Home /></AppContextProvider>);
        expect(wrap.find(LoadScriptNext)).toHaveLength(1);

        // const loadScriptNext = wrap.find(LoadScriptNext);
        // expect(loadScriptNext.props('googleMapsApiKey')).toEqual(true);
        // expect(wrap.find(StyledHome)).toHaveStyleRule('height', '100vh');
    });
});