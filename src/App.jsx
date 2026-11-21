import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Scene from './components/Scene'

export default function App() {
  return (
    // Padlock the container to the screen without 100vw scrollbar glitch
    <div 
      id="r3f-container"
      style={{ position: 'fixed', inset: 0, width: '100%', height: '100%', overflow: 'hidden', backgroundColor: '#050505' }}
    >
      
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ powerPreference: 'high-performance', antialias: true }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>

    </div>
  )
}