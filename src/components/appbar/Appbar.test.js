import React from 'react';
import 'jest-styled-components';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import Appbar from './Appbar';
import { StyledMenuIcon } from './Appbar';
import { StyledSearchIcon } from './Appbar';
import { StyledLink } from './Appbar';
import { StyledAppbar } from './Appbar';
import { StyledMenuLink } from './Appbar';
import { StyledTitleLink } from './Appbar';
import { StyledSearchLink } from './Appbar';

describe('Appbar', () => {

    test('Appbar renders correctly', () => {
        const tree = renderer.create(
            <MemoryRouter>
                <Appbar />
            </MemoryRouter>
        );
        expect(tree).toMatchSnapshot();
    });

    // const wrap = mount(
    //     <MemoryRouter>
    //         <Appbar />
    //     </MemoryRouter>
    // );

    it('Renders all appbar elements', () => {
        const wrap = mount(<MemoryRouter><Appbar /></MemoryRouter>);
        expect(wrap.find(StyledAppbar)).toHaveLength(1);
        expect(wrap.find(StyledMenuLink)).toHaveLength(1);
        expect(wrap.find(StyledTitleLink)).toHaveLength(1);
        expect(wrap.find(StyledSearchLink)).toHaveLength(1);
        expect(wrap.find(StyledMenuIcon)).toHaveLength(1);
        expect(wrap.find(StyledSearchIcon)).toHaveLength(1);
    });
    it(`
        StyledAppbar has a background-color of #527559, display flex, flex-wrap nowrap, 
        justify-content space-between, height of 24px and padding of 16px
    `, () => {
        const wrap = mount(<MemoryRouter><Appbar /></MemoryRouter>);
        expect(wrap.find(StyledAppbar)).toHaveStyleRule('background-color', '#527559');
        expect(wrap.find(StyledAppbar)).toHaveStyleRule('display', 'flex');
        expect(wrap.find(StyledAppbar)).toHaveStyleRule('flex-wrap', 'nowrap');
        expect(wrap.find(StyledAppbar)).toHaveStyleRule('justify-content', 'space-between');
        expect(wrap.find(StyledAppbar)).toHaveStyleRule('height', '24px');
        expect(wrap.find(StyledAppbar)).toHaveStyleRule('padding', '16px');
    });
    it('StyledMenuIcon and StyledSearchIcon have a color of #c7d9cb and height of 24px', () => {
        const wrap = mount(<MemoryRouter><Appbar /></MemoryRouter>);
        expect(wrap.find(StyledMenuIcon)).toHaveStyleRule('height', '24px');
        expect(wrap.find(StyledMenuIcon)).toHaveStyleRule('color', '#c7d9cb');
        expect(wrap.find(StyledSearchIcon)).toHaveStyleRule('height', '24px');
        expect(wrap.find(StyledSearchIcon)).toHaveStyleRule('color', '#c7d9cb');
    });
    it('StyledTitleLink has a text of WSApp', () => {
        const wrap = mount(<MemoryRouter><Appbar /></MemoryRouter>);
        const styledTitleLink = wrap.find(StyledTitleLink);
        expect(styledTitleLink.text()).toEqual('WSApp');
    });
    it('StyledMenuLink has a path of "/menu"', () => {
        const wrap = mount(<MemoryRouter><Appbar /></MemoryRouter>);
        const styledMenuLink = wrap.find(StyledMenuLink);
        expect(styledMenuLink.props().to).toEqual('/menu');
    });
    it('StyledTitleLink has a path of "/"', () => {
        const wrap = mount(<MemoryRouter><Appbar /></MemoryRouter>);
        const styledTitleLink = wrap.find(StyledTitleLink);
        expect(styledTitleLink.props().to).toEqual('/');
    });
    it('StyledMenuSearch has a path of "/search"', () => {
        const wrap = mount(<MemoryRouter><Appbar /></MemoryRouter>);
        const styledSearchLink = wrap.find(StyledSearchLink);
        expect(styledSearchLink.props().to).toEqual('/search');
    });
    it('StyledLink has a color of #c7d9cb, height of 24px and text-decoration none', () => {
        const styledLink = mount(<MemoryRouter><StyledLink to='/' /></MemoryRouter>);
        expect(styledLink).toHaveStyleRule('color', '#c7d9cb');
        expect(styledLink).toHaveStyleRule('height', '24px');
        expect(styledLink).toHaveStyleRule('text-decoration', 'none');
    });

});