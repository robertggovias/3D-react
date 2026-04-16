import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Producto } from './Producto'
import './App.css' // ¡NUEVO!: Importamos nuestro archivo de estilos

const baseDeDatosAnaquel = [
  { id: 'prod_01', tipo: 'competencia_alta', ubicación: [-2.45, 0, 0] },
  { id: 'prod_02', tipo: 'competencia_media', ubicación: [0, 0, 0] },
  { id: 'prod_03', tipo: 'producto_cliente', ubicación: [2.45, 0, 0] },
]

function App() {
  const [totales, setTotales] = useState({
    prod_01: 0,
    prod_02: 0,
    prod_03: 0
  })

  const sumarTiempo = (idProducto, tiempoExtra) => {
    setTotales((valoresAnteriores) => ({
      ...valoresAnteriores,
      [idProducto]: valoresAnteriores[idProducto] + tiempoExtra
    }))
  }

  return (
    /* 1. Usamos la clase del contenedor principal */
    <div className="contenedor-principal">
      
      /* 2. Usamos la clase del dashboard. ¡Mira qué limpio queda! */
      <div className="dashboard">
        <h3>Dashboard (Suma Total)</h3>
        <ul>
          <li>Competencia Alta: {(totales.prod_01 / 1000).toFixed(1)}s</li>
          <li>Competencia Media: {(totales.prod_02 / 1000).toFixed(1)}s</li>
          <li><b>Tu Producto: {(totales.prod_03 / 1000).toFixed(1)}s</b></li>
        </ul>
      </div>

      <Canvas>
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />

        {baseDeDatosAnaquel.map((item) => (
          <Producto 
            key={item.id} 
            id={item.id}
            tipo={item.tipo} 
            position={item.ubicación} 
            alDejarDeMirar={sumarTiempo} 
          />
        ))}

        <OrbitControls />
      </Canvas>
    </div>
  )
}

export default App