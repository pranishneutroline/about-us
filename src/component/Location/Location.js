import React from "react";
import "./location.css";

const Location = () => {
  return <>
  <div className="location-photo">
        <div className="location-button flex-col">  {/* this flex-col is coming from components/navbar.css */}
         <button className="our_location_button d-grid mx-auto justify-content-center bg-info">our location</button>
        </div>
        </div>

  </>;
};

export default Location;
