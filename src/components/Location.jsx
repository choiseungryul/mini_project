import { useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';


function Location({ address = '서울특별시 강동구 천호대로' }) {

  return (
    <div className="location">
      <div className='location-title'>
      <h2>Contact Us</h2>
      </div>
      <div className="location-content">
        <Map
          center={{ lat: 37.53839, lng: 127.12357 }}
          style={{ width: "600px", height: "400px" }}>
          <MapMarker position={{ lat: 37.53825, lng: 127.12730 }} >
            <div className='marker'>Location</div>
          </MapMarker>
        </Map>
        <div className="location-footer">
          <div className='location-footer-title'>
            <h2>Address</h2>
          </div>
          <div className="location-footer-main">
            <p>14, Cheonho-daero 157-gil, Gangdong-gu, Seoul, Republic of Korea <br/><br/>
              서울특별시 강동구 천호대로 157길 14, 8F</p>
          </div>
        </div>
    </div>
    </div>
  );
}

export default Location;