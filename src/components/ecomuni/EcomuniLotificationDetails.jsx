import {useState, useRef, useLayoutEffect} from 'react'
import { useParams } from "react-router-dom"
import { getLotificationDetails } from "../../utils/getLotificationDetails"
import { Map, Marker, NavigationControl, Popup } from 'mapbox-gl'

const EcomuniLotificationDetails = () => {
  const {departamento, ciudad, lotificacion} = useParams()
  const data  = getLotificationDetails(departamento, ciudad, lotificacion);
  const { nombre, geo: { lat, long } } = data[0];
  const ref = useRef(null);
  const [map, setMap] = useState(null);
  
  useLayoutEffect(() => {
    if (ref.current && !map) {
      const map = new Map({
        container: ref.current, // container ID
        style: 'mapbox://styles/mapbox/dark-v10', // style URL
        center: [long, lat], // starting position [lng, lat]
        zoom: 16 // starting zoom
      });

      const popup = new Popup()
      .setHTML(`<h1 class="text-xl p-3">${nombre}</h1>`)
      
      new Marker({color: '#61DAFB'})
      .setLngLat([long, lat])
      .setPopup(popup)
      .addTo(map);
      
      map.addControl(new NavigationControl());

      setMap(map);
    }
  }, [ref, map])

  return (
    <div className="pt-32">
      <div className="z-20 absolute left-4 top-20 bg-white py-2 md:py-4 px-2 md:px-6 rounded-md w-1/2 md:w-1/4">
        <h2 className="text-xl sm md:text-3xl text-center font-bold text-slate-800 mb-5">{ (nombre ? nombre : '') }</h2>
        <p><strong>Ubicación:</strong> En frente de Ciudad Mujer, La Empalizada</p>
        <p><strong>Precio:</strong> L. 200,000</p>
        <p><strong>Longitud:</strong> 20x10 mts2</p>
      </div>
      <div ref={ref} className='fixed h-screen w-screen top-16 left-0 z-10'></div>
    </div>
  )
}

export default EcomuniLotificationDetails
