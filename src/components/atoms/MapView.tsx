import axios from "axios";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const Root = styled.div`
  height: 600px;
  width: 100%;
`;

const location = {
  address: "Grace Trinity Church, 5821 Auburn Blvd, Sacramento, CA 95841",
  lat: 38.672306065588856,
  lng: -121.33052636429623,
};

const mapOptions = {
  zoom: 17,
  center: {
    ...location,
  },
  styles: [
    { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
    { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
    { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
    {
      featureType: "administrative.locality",
      elementType: "labels.text.fill",
      stylers: [{ color: "#d59563" }],
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [{ color: "#d59563" }],
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [{ color: "#263c3f" }],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [{ color: "#6b9a76" }],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [{ color: "#38414e" }],
    },
    {
      featureType: "road",
      elementType: "geometry.stroke",
      stylers: [{ color: "#212a37" }],
    },
    {
      featureType: "road",
      elementType: "labels.text.fill",
      stylers: [{ color: "#9ca5b3" }],
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [{ color: "#746855" }],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [{ color: "#1f2835" }],
    },
    {
      featureType: "road.highway",
      elementType: "labels.text.fill",
      stylers: [{ color: "#f3d19c" }],
    },
    {
      featureType: "transit",
      elementType: "geometry",
      stylers: [{ color: "#2f3948" }],
    },
    {
      featureType: "transit.station",
      elementType: "labels.text.fill",
      stylers: [{ color: "#d59563" }],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#17263c" }],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [{ color: "#515c6d" }],
    },
    {
      featureType: "water",
      elementType: "labels.text.stroke",
      stylers: [{ color: "#17263c" }],
    },
  ],
  //   disableDefaultUI: true,
};

let google_maps_init = false;
let google_maps_loaded = false;
const initGoogleMaps = (key, cb) => {
  if (!google_maps_init) {
    const googleMapScript = document.createElement("script");
    googleMapScript.id = "map-script";
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${key}&libraries=places`;
    window.document.body.appendChild(googleMapScript);
    google_maps_init = true;
    googleMapScript.addEventListener("load", () => {
      google_maps_loaded = true;
      cb();
    });
  } else {
    if (google_maps_loaded) cb();
    else {
      const script = document.getElementById("map-script");
      script?.addEventListener("load", () => {
        cb();
      });
    }
  }
};

const MapView: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  const createGoogleMap = () => {
    // @ts-ignore
    const map = new window.google.maps.Map(mapRef.current, mapOptions);
    return map;
  };
  // TODO add loading circle for maps?
  useEffect(() => {
    axios.get("/map").then((res) => {
      const key = res.data.key;
      initGoogleMaps(key, createGoogleMap);
    });
  }, []);

  return <Root className="google-map" ref={mapRef}></Root>;
};

export default MapView;
