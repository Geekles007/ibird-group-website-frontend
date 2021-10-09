import React, {memo, useEffect, useRef, useState} from "react";

import mapboxgl from 'mapbox-gl';
import {observer} from "mobx-react";
import styled from "styled-components";
import {REACT_APP_MAP_BOX_TOKEN} from "../../constants";

interface MapBoxUIProps {
}

const MapWrapper = styled.div`
    width: 100%;
    height: 100%;
`;

mapboxgl.accessToken = REACT_APP_MAP_BOX_TOKEN;

const MapBoxUI: React.FC<MapBoxUIProps> = ({}) => {
    const mapContainer: any = useRef(null);
    const map: any = useRef(null);
    const [lng, setLng] = useState(44.020019);
    const [lat, setLat] = useState(56.317066);
    const [zoom, setZoom] = useState(13);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current ?? "",
            style: 'mapbox://styles/geekles007/ckpgybhd11utk17qkavbs7adw',
            center: [lng, lat],
            zoom: zoom
        })
        const marker = new mapboxgl.Marker()
            .setLngLat([44.020019, 56.317066])
            .addTo(map.current);
    }, []);

    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    });

    return (
        <>
            <MapWrapper ref={mapContainer} className="map-container" />
        </>
    );

}

// The following is required to stop "npm build" from transpiling mapbox code.
// notice the exclamation point in the import.
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

export default observer(MapBoxUI);