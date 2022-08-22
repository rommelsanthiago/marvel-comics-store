import { useState, useMemo } from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";
import {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

const mapStyleContainer = {
  width: '80%',
  height: '60vh',
  margin: "0 auto",
  marginBottom: "3em"
}

export default function MapContainer({address}) {
  
  return  <LoadScript
            id="script-loader"
            googleMapsApiKey={import.meta.env.VITE_API_GOOGLE_API_KEY}
            language="pt-br"
            region="BR"
            version="weekly"
          >
            <Map address={address} />;
          </LoadScript>
}

function Map({address}) {
  const center = useMemo(() => ({ lat: -7.224140, lng: -39.313411 }), []);
  const [selected, setSelected] = useState(null);

  if(address){
    (async function () {
      const results = await getGeocode({ address });
      const { lat, lng } = getLatLng(results[0]);
    
      setSelected({ lat, lng });
    })();
  }

  return (
    <>
      <GoogleMap
        zoom={selected ? 16 : 12}
        center={selected ? selected : center}
        mapContainerStyle={mapStyleContainer}
      >
        {selected && <Marker position={selected} />}
      </GoogleMap>
    </>
  );
};
