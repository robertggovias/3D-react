import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

// 1. Importamos el componente de tu modelo (asegúrate de que el nombre coincida)
import { Resting_zone_museum } from './Resting_zone_museum' 

function App() {
  return (
    <div style={{ height: '100vh', width: '100vw', background: '#111' }}>
      <Canvas>
        <ambientLight intensity={0.7} />
        {/* Luz direccional para darle sombras al museo */}
        <directionalLight position={[10, 10, 5]} intensity={1.5} />

        {/* 2. Aquí llamamos a tu modelo como si fuera una etiqueta HTML */}
        <Resting_zone_museum />

        <OrbitControls />
      </Canvas>
    </div>
  )
}

export default App