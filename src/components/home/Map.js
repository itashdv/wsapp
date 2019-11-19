import React, { useContext } from 'react';
import { LoadScriptNext, GoogleMap } from '@react-google-maps/api';
import usePosition from '../../utils/usePosition';

import { AppContext } from '../../contexts/AppContext';
import MyLocation from './MyLocation';
import MapMarker from './MapMarker';
import SelectedMarker from './SelectedMarker';

const Map = () => {
    const { companies, selectedCompany } = useContext(AppContext);
    const { lat, lng, error } = usePosition();
    if (error) console.log(error);
    return (
        <LoadScriptNext googleMapsApiKey = 'AIzaSyDGfNqSErZ8YBaT7SSezWGcz457-bnt8-Y'>
            <GoogleMap
                mapContainerStyle = {{
                    height: '100%',
                    width: '100%'
                }}
                zoom = { 15 }
                center = {
                    // center map on user's location if location access is allowed by user, 
                    // otherwise center map on default hardcoded point..
                    {
                        lat: lat ? lat : 13.355144,
                        lng: lng ? lng : 103.854714
                    }
                }
            >
                { // pin the user's location on a map with a custom icon if location access is allowed by user..
                    lat && lng && (
                        <MyLocation lat = { lat } lng = { lng } />
                    )
                }
                { // mapping list of fetched companies on the map..
                    companies && (
                        companies.map(company => (
                            <MapMarker key={ company._id } company = { company } />
                        ))
                    )
                }
                { // show info window on a map if there is a selected company..
                    selectedCompany && (
                        <SelectedMarker />
                    )
                }
            </GoogleMap>
        </LoadScriptNext>
    );
}

export default Map;