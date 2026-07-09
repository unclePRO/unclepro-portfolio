import * as THREE from 'three'
import { useThree, useFrame } from '@react-three/fiber'
import { useScroll } from '@react-three/drei'
import { useRef } from 'react'
import { curve } from './Curve'

export default function CameraRig() {
  const { camera } = useThree()
  const scrollData = useScroll()
  const cameraT = useRef(0)

  useFrame((state, delta) => {
    const pageIndex = Math.min(Math.round(scrollData.offset * 4.5), 3);
    
    const targets = [0, 0.35, 0.60, 0.85]
    const targetT = targets[pageIndex]

    cameraT.current = THREE.MathUtils.damp(cameraT.current, targetT, 3, delta)

    const point = curve.getPointAt(Math.min(cameraT.current, 0.99))
    const lookAhead = curve.getPointAt(Math.min(cameraT.current + 0.01, 0.99))

    camera.position.copy(point)
    camera.lookAt(lookAhead)
  })

  return null
}