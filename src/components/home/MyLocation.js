import React from 'react';
import { Marker } from '@react-google-maps/api';

const MyLocation = (props) => (
    <Marker
        position = {{
            lat: props.lat,
            lng: props.lng
        }}
        icon = {{
            url: process.env.PUBLIC_URL + '/icons/loveHouse.png',
            scaledSize: {
                width: 36,
                height: 36
            }
        }}
    />
);

export default MyLocation;