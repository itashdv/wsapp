import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import MenuCategory from './MenuCategory';

const StyledCompanyMenu = styled.div`
    & > h3, p {
        text-align: center;
    }
    & > img {
        width: 100%;
        height: auto;
    }
`;

// fetch menu url..
const URL = 'https://gentle-retreat-42311.herokuapp.com/api/menus';

const CompanyMenu = (props) => {
    const [menu, setMenu] = useState(null);
    // fetching company menu from api..
    useEffect(() => {
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();
        const loadData = () => {
            try {
                axios.get(`${ URL }/${ props.companyId }`, { cancelToken: source.token }).then(result => {
                    setMenu(result.data);
                });
            } catch(error) {
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
    }, [props.companyId]);
    return (
        <StyledCompanyMenu>
            {
                !menu && (
                    <h3>Loading menu..</h3>
                )
            }
            {
                menu && (
                    <>
                        <h3>{ menu.menu.name }</h3>
                        <img alt = { menu.menu.name } src = { menu.menu.image.url } />
                        <p>{ menu.menu.description }</p>
                        {
                            menu.categories.map(category => (
                                <MenuCategory key = { category._id } category = { category } />
                            ))
                        }
                    </>
                )
            }
        </StyledCompanyMenu>
    );
};

export default CompanyMenu;