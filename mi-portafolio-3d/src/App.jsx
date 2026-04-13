import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

// 1. Importamos el componente de tu modelo (asegúrate de que el nombre coincida)
import { Producto } from './Producto'

const baseDeDatosAnaquel = [
  {id: 'prod_01', tipo: 'competencia_alta', ubcación: [-2.45, 0, 0]},
  {id: 'prod_02', tipo: 'competencia_media', ubcación: [0, 0, 0]},
  {id: 'prod_03', tipo: 'producto_cliente', ubcación: [2.45, 0, 0]},
]
function App() {
  return (
    <div style={{ height: '100vh', width: '100vw', background: '#fdf182' }}>
      <Canvas>
        <ambientLight intensity={0.7} />
        {/* Luz direccional para darle sombras al museo */}
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
{/* 2. LA MAGIA DE REACT (.map)
          Le decimos: "Por cada 'item' en mi base de datos, dibuja un <Producto />"
        */}
        {/* 2. Aquí llamamos a tu modelo como si fuera una etiqueta HTML */}
        {baseDeDatosAnaquel.map((item) => (
          <Producto key={item.id} // La clave es importante para que React sepa qué producto es cuál
          position={item.ubcación} />
        ))}
        <Product position={[-2, 0, 0]} />        
        <Product position={[2, 0, 0]} />

        <OrbitControls />
      </Canvas>
    </div>
  )
}

export default App