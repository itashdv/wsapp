import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import MenuItem from './MenuItem';

// fetch menu items url..
const URL = 'https://gentle-retreat-42311.herokuapp.com/api/items';

const StyledMenuCategory = styled.div`
    & > h4 {
        text-align: center;
    }
`;

const MenuCategory = (props) => {
    const [items, setItems] = useState([]);
    // fetching menu items by category..
    useEffect(() => {
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();
        const loadData = () => {
            try {
                axios.get(`${ URL }/${ props.category._id }`, { cancelToken: source.token }).then(result => {
                    setItems(result.data);
                });
            } catch(error) {
                if (axios.isCancel(error)) {
                    console.log('Api call is canceled!');
                } else {
                    throw error;
                }
            }
        }
        loadData();
        // cleaning up api call on component unmount..
        return () => {
            source.cancel();
        };
    }, [props.category._id]);
    return (
        <StyledMenuCategory>
            <h4>{ props.category.name }</h4>
            {
                items && (
                    items.map(item => (
                        <MenuItem key = { item._id } item = { item } />
                    ))
                )
            }
        </StyledMenuCategory>
    );
};

export default MenuCategory;