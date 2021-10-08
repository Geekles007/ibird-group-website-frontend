import React, {memo, useEffect, useRef, useState} from "react";
import mapboxgl from 'mapbox-gl';
import {observer} from "mobx-react";
import styled from "styled-components";

interface MapBoxUIProps {
}

const MapWrapper = styled.div`
    width: 100%;
    height: 100%;
`;

mapboxgl.accessToken = process.env.REACT_APP_MAP_BOX_TOKEN ?? "";

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

export default observer(MapBoxUI);