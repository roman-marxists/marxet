import { GoogleMap, useJsApiLoader, Circle } from "@react-google-maps/api";
import { useState, useCallback, LoadScript } from "react";

const API_KEY = process.env.REACT_APP_API_KEY;

const containerStyle = {
  width: "30vw",
  height: "20vh",
};

const center = {
  lat: 40.74532,
  lng: -73.9574,
};

const ProductMap = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY,
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={6}
      onLoad={onLoad}
      onUnmount={onUnmount}
      region={"United States"}
    >
      <Circle
        center={center}
        radius={2}
        options={{ fillColor: "#ff0000", strokeOpacity: 0 }}
      ></Circle>
    </GoogleMap>
  ) : (
    <></>
  );
};

export default ProductMap;
