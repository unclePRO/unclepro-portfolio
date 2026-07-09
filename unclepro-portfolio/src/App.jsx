import { Canvas } from '@react-three/fiber'
import Scene from './components/Scene'

export default function App() {
  return (
    // We are using raw style={{}} here to force the browser to obey.
    // This absolutely padlocks the container to the screen.
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', overflow: 'hidden', backgroundColor: '#050505' }}>
      
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        {/* Make sure pages={2} is inside this file! */}
        <Scene />
      </Canvas>

    </div>
  )
}