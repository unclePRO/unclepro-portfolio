import * as THREE from 'three'

export const curve = new THREE.CatmullRomCurve3([
  new THREE.Vector3(0, 0, 0),
  new THREE.Vector3(2, 1, -20),
  new THREE.Vector3(-3, -2, -45),
  new THREE.Vector3(0, 0, -70),
  new THREE.Vector3(0, -1, -100),
], false, 'catmullrom', 0.5)