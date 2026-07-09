import * as THREE from 'three'
import { useThree, useFrame } from '@react-three/fiber'
import { useScroll } from '@react-three/drei'
import { curve } from './Curve'

export default function CameraRig() {
  const { camera } = useThree()
  const scrollData = useScroll()

  useFrame(() => {
    const t = scrollData.offset
    const point = curve.getPointAt(t)
    const lookAhead = curve.getPointAt(Math.min(t + 0.01, 1))

    camera.position.copy(point)
    camera.lookAt(lookAhead)
  })

  return null
}