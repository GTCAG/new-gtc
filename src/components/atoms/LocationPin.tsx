import React from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";
import "./pin.css";

interface LocationPinProps {
  text?: string;
  lat: number;
  lng: number;
}

const Root = styled.div``;

const LocationPin: React.FC<LocationPinProps> = ({ text }) => {
  return (
    <Root>
      <Icon icon={locationIcon} className="pin-icon" />
      <p className="pin-text">{text}</p>
    </Root>
  );
};

export default LocationPin;
