import Router from "./routers/Router";
import mapboxgl from 'mapbox-gl'

function App() {
  mapboxgl.accessToken = 'pk.eyJ1Ijoiam9yZ2VjcnV6MTkiLCJhIjoiY2ttbzZtdmY3MGZmcDMwb2NoM2k3amdtYiJ9.7Ndz4cpwEZ-YZuUsiHpItA';
  return (
    <main>
      <Router />
    </main>
  )  
}

export default App;
