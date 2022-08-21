import { useState, useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";

import * as S from "./styles"

const mapStyleContainer = {
  width: '80%',
  height: '50vh',
  margin: "0 auto",
}

export default function MapContainer() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_API_GOOGLE_API_KEY,
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const center = useMemo(() => ({ lat: -7.224140, lng: -39.313411 }), []);
  const zoom = 12;
  const [selected, setSelected] = useState(null);

  return (
    <>
      <S.PlacesContainer>
        <PlacesAutocomplete setSelected={setSelected} />
      </S.PlacesContainer>

      <GoogleMap
        zoom={selected ? 16 : zoom}
        center={selected ? selected : center}
        mapContainerStyle={mapStyleContainer}
      >
        {selected && <Marker position={selected} />}
      </GoogleMap>
    </>
  );
}

const PlacesAutocomplete = ({ setSelected }) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0]);
  
    setSelected({ lat, lng });
  };

  const enterKeyPress = (eventKey) => {
    if (eventKey.key === "Enter") {
        eventKey.preventDefault();
        return handleSelect()
    }
  }

  return (
    <Combobox onSelect={handleSelect}>
      <S.InputSearch
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={!ready}
        placeholder="Procure um endereço"
        onKeyPress={enterKeyPress}
      />
      <ComboboxPopover>
        <ComboboxList>
          {status === "OK" &&
            data.map(({ place_id, description }) => (
              <ComboboxOption key={place_id} value={description} />
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
};
