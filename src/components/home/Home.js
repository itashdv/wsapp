import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GoogleMap, LoadScriptNext, Marker, InfoWindow } from '@react-google-maps/api';
import { AppContext } from '../../contexts/AppContext';
import usePosition from '../../utils/usePosition';

import styled from 'styled-components';

const StyledHome = styled.div`
    height: 100vh;
`;

const Home = () => {
    const { companies, currentCompany, dispatch1 } = useContext(AppContext);
    const { lat, lng, error } = usePosition();
    // if (error) console.log(error);
    return (
        <StyledHome>
            <LoadScriptNext googleMapsApiKey = 'AIzaSyDGfNqSErZ8YBaT7SSezWGcz457-bnt8-Y'>
                <GoogleMap
                    mapContainerStyle = {{
                        height: '100%',
                        width: '100%'
                    }}
                    zoom = { 15 }
                    center = {{
                        lat: lat ? lat : 13.355144,
                        lng: lng ? lng : 103.854714
                    }}
                >

                    { lat && lng && (
                        <Marker
                            id = "myLocationMarker"
                            position = {{
                                lat: lat,
                                lng: lng
                            }}
                            icon = {{
                                url: process.env.PUBLIC_URL + '/icons/loveHouse.png',
                                scaledSize: {
                                    width: 36,
                                    height: 36
                                }
                            }}
                        />
                    ) }

                    { companies && (

                        companies.map(company => (
                            <Marker
                                key = { company._id }
                                // onLoad = {marker => {
                                //   console.log(`marker: ${ marker }`);
                                // }}
                                position = {{
                                    lat: parseFloat(company.lat),
                                    lng: parseFloat(company.lng)
                                }}
                                onClick = {
                                    () => {
                                        dispatch1({
                                            type: 'SELECT_CURRENT_COMPANY',
                                            company: company
                                        });
                                    }
                                }
                            />
                        ))

                    ) }

                    {
                        currentCompany && (
                            <InfoWindow
                                position = {{
                                    lat: parseFloat(currentCompany.lat),
                                    lng: parseFloat(currentCompany.lng)
                                }}
                                onCloseClick = {
                                    () => {
                                        dispatch1({ type: 'RESET_CURRENT_COMPANY' });
                                    }
                                }
                            >
                                <div>
                                    <h3>{ currentCompany.name }</h3>
                                    <p>{ currentCompany.description }</p>
                                    <p><strong>Address:</strong></p>
                                    <p>{ currentCompany.address }</p>
                                    <Link to = { `/company/${ currentCompany._id }` }>Visit</Link>
                                </div>
                            </InfoWindow>
                        )
                    }

                </GoogleMap>
            </LoadScriptNext>
        </StyledHome>
    );
}

export default Home;