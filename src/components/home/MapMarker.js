import React, { useContext } from 'react';
import { Marker } from '@react-google-maps/api';

import { AppContext } from '../../contexts/AppContext';

const MapMarker = (props) => {
    const { dispatch2 } = useContext(AppContext);
    return (
        <Marker
            position = {{
                lat: parseFloat(props.company.lat),
                lng: parseFloat(props.company.lng)
            }}
            onClick = {
                () => {
                    dispatch2({
                        type: 'SELECT_COMPANY',
                        company: props.company
                    })
                }
            }
        />
    );
};

export default MapMarker;