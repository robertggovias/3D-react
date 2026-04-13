import { meshBounds } from "@react-three/drei";
import { useState} from "react";

export function Producto(props) {
    const[mirando, setMirando] = useState(false)
    return(
        <mesh
            {...props}
            onPointerOver={(evento) => {
                evento.stopPropagation() // Evita que el láse atraviese y toque 
                setMirando(true)        
            }}
            onPointerOut={() => setMirando(false)}
            scale={mirando ? 1.1 : 1}
        >
        </mesh>
    )
}