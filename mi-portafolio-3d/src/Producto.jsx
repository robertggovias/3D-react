// 1. Adicionamos useFrame (para rodar a 60fps) e useRef
import { useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";
// 2. Importamos a ferramenta mágica que permite pôr HTML dentro do 3D
import { Html } from "@react-three/drei";

export function Producto(props) {
  const [mirando, setMirando] = useState(false);
  const tempoInicio = useRef(0);
  
  // 3. Este useRef vai "agarrar" a etiqueta de texto no HTML
  const textoRef = useRef();

  let colorBase = 'gray'; 
  if (props.tipo === 'producto_cliente') {
    colorBase = 'blue'; 
  }

  // 4. A MÁGICA DA PERFORMANCE:
  // O useFrame roda o tempo todo em segundo plano, sem travar o React.
  useFrame(() => {
    // Se estivermos olhando E a etiqueta de texto existir...
    if (mirando && textoRef.current) {
      const tempoAtual = Date.now() - tempoInicio.current;
      // ...nós mudamos o texto DIRETAMENTE. (Dividimos por 1000 para ver em segundos)
      textoRef.current.innerText = `${(tempoAtual / 1000).toFixed(1)}s`;
    }
  });

  return(
    <mesh      
      position={props.position}
      onPointerOver={(evento) => {
        evento.stopPropagation();
        setMirando(true);
        tempoInicio.current = Date.now();
      }}
      onPointerOut={() => {
        setMirando(false);
        const tiempoTotal = Date.now() - tempoInicio.current;
        
        // ¡NUEVO!: Si el jefe nos dio la función, le enviamos nuestro ID y el tiempo
        if (props.alDejarDeMirar) {
          props.alDejarDeMirar(props.id, tiempoTotal);
        }
        
        if (textoRef.current) textoRef.current.innerText = "0.0s";
      }}
      scale={mirando ? 1.1 : 1}
    >
      <boxGeometry args={[1, 1.5, 0.5]} />
      <meshStandardMaterial color={mirando ? 'hotpink' : colorBase} />

      {/* 5. A ETIQUETA HTML FLUTUANTE! */}
      {/* Colocamos ela um pouco acima do objeto (position no eixo Y) */}
      <Html position={[0, 1.2, 0]} center>
        <div style={{ 
          background: 'rgba(0, 0, 0, 0.8)', 
          color: 'white', 
          padding: '4px 8px', 
          borderRadius: '5px',
          fontFamily: 'monospace',
          userSelect: 'none'
        }}>
          {/* Aqui conectamos o nosso textoRef para o useFrame poder atualizá-lo */}
          <span ref={textoRef}>0.0s</span>
        </div>
      </Html>

    </mesh>
  )
}