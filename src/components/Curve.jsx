import * as THREE from 'three'

export const curve = new THREE.CatmullRomCurve3([
  // new THREE.Vector3(0, 0, 0),        For now lets have a simple straight path
  // new THREE.Vector3(30, -5, -250),   
  // new THREE.Vector3(-40, 20, -500),  
  // new THREE.Vector3(20, 30, -750),  
  // new THREE.Vector3(0, 0, -1000)
  new THREE.Vector3(0, 0, 0),        
  new THREE.Vector3(0, 0, -200),   
  new THREE.Vector3(0, 0, -300),  
  new THREE.Vector3(0, 0, -400),  
  new THREE.Vector3(0, 0, -500)
], false, 'catmullrom', 0.5)