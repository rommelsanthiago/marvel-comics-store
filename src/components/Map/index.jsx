import { useState, useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
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
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_API_GOOGLE_API_KEY,
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map address={address} />;
}

function Map({address}) {
  const center = useMemo(() => ({ lat: -7.224140, lng: -39.313411 }), []);
  const zoom = 12;
  const [selected, setSelected] = useState(null);

  if(address){
    (async function () {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
    
      setSelected({ lat, lng });
    })();
  }

  return (
    <>
      <GoogleMap
        zoom={selected ? 16 : zoom}
        center={selected ? selected : center}
        mapContainerStyle={mapStyleContainer}
      >
        {selected && <Marker position={selected} />}
      </GoogleMap>
    </>
  );
};
