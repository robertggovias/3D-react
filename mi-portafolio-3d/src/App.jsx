import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function App() {
  return (
    // El div contenedor debe tener altura para que el Canvas se vea
    <div style={{ height: '100vh', width: '100vw', background: '#111' }}>
      
      <Canvas>
        {/* Luces para que se vea 3D */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />

        {/* Un cubo simple */}
        <mesh>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial color="hotpink" />
        </mesh>

        {/* Controles para rotar la cámara con el mouse (como en Blender) */}
        <OrbitControls />
        
      </Canvas>
      
    </div>
  )
}

export default App