import { ScrollControls, Html, Stars, Sparkles } from '@react-three/drei'
import ScrollLogic from './ScrollLogic'
import CameraRig from './CameraRig'
import { EffectComposer, Bloom } from '@react-three/postprocessing'

export default function Scene() {

  return (
    <>            
      <ScrollControls pages={4} damping={0.1}>
        <CameraRig />
        <ScrollLogic />
      </ScrollControls>

      <EffectComposer>
        <Bloom intensity={1.2} luminanceThreshold={0.6} luminanceSmoothing={0.2} mipmapBlur />
      </EffectComposer>
    </>
  )
}