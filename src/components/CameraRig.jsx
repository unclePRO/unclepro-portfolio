import * as THREE from 'three'
import { useThree, useFrame } from '@react-three/fiber'
import { useScroll } from '@react-three/drei'
import { curve } from './Curve'

export default function CameraRig() {
  const { camera } = useThree()
  const scrollData = useScroll()

  useFrame(() => {
    const t = scrollData.offset
    const safeT = Math.min(t, 0.99)
    const point = curve.getPointAt(safeT)
    const lookAhead = curve.getPointAt(safeT + 0.01)

    camera.position.copy(point)
    camera.lookAt(lookAhead)
  })

  return null
}