import Filter from "./components/Filter";
import NavBar from "./components/NavBar";
import SearchResults from "./components/SearchResults";
import Title from "./components/Title";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import { useEffect, useRef, useState } from "react";

mapboxgl.accessToken =
  "pk.eyJ1IjoianVnZGZnZGZnIiwiYSI6ImNscGZwN2M2eTFtdGgyaXM5MnJheXd2c28ifQ.GFt9N1T6tkNuT_ueCAJodQ";
function App() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-4.4834526);
  const [lat, setLat] = useState(48.3831122);
  const [zoom, setZoom] = useState(11);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/dark-v11",
      center: [lng, lat],
      zoom: zoom,
    });

    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <div className="h-[100vh] bg-[color:var(--bg-color)] overflow-hidden">
      <NavBar />
      <aside className="h-32 scrollbar scrollbar-thumb-[color:var(--primary-color)] scrollbar-track-[color:var(--bg-color)] relative z-10 min-h-full flex-1 origin-left bg-[color:var(--bg-color)] text-light-elements shadow-xl transition-all lg:w-1/3 w-4/5 overflow-y-scroll">
        <Title />
        <div className="w-full border border-[#3d3d3d]"></div>
        <Filter />
        <div className="w-full border border-[#3d3d3d]"></div>
        <SearchResults />
      </aside>
      <main className="!absolute top-0 left-0 h-screen w-screen bg-gray-secondary mapboxgl-map">
        <div className="mapboxgl-canvas-container mapboxgl-interactive mapboxgl-touch-drag-pan mapboxgl-touch-zoom-rotate">
          <div ref={mapContainer} className="map-container" />
        </div>
        <div className="sidebar">
          Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>
      </main>
    </div>
  );
}

export default App;
