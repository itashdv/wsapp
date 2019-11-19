import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { InfoWindow } from '@react-google-maps/api';

import { AppContext } from '../../contexts/AppContext';

const CompanyInfo = styled.div`
    padding: 5px;
`;

const SelectedMarker = () => {
    const { selectedCompany, dispatch2 } = useContext(AppContext);
    return (
        <InfoWindow
            position = {{
                lat: parseFloat(selectedCompany.lat),
                lng: parseFloat(selectedCompany.lng)
            }}
            onCloseClick = {
                () => {
                    dispatch2({ type: 'DESELECT_COMPANY' })
                }
            }
        >
            <CompanyInfo>
                <h3>{ selectedCompany.name }</h3>
                <p>{ selectedCompany.description }</p>
                <p><strong>Address:</strong></p>
                <p>{ selectedCompany.address }</p>
                <Link to = { `/company/${ selectedCompany._id }` }>Visit</Link>
            </CompanyInfo>
        </InfoWindow>
    );
}

export default SelectedMarker;