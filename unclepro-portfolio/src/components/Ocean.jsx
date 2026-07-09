import * as THREE from 'three'
import { extend, useFrame, useLoader } from "@react-three/fiber"
import { useMemo, useRef } from "react";
import { Water } from "three-stdlib"


extend({ Water })

export default function Ocean({ sunPos }) {
    const waterRef = useRef()
        
    const rawTexture = useLoader(
        THREE.TextureLoader, 
        'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/waternormals.jpg'
    );
    
    const waterNormals = useMemo(() => {
        const clonedTexture = rawTexture.clone();
        clonedTexture.wrapS = clonedTexture.wrapT = THREE.RepeatWrapping;
        clonedTexture.needsUpdate = true;
        return clonedTexture;
    }, [rawTexture]);
    
    const geom = useMemo(() => new THREE.PlaneGeometry(10000, 10000), []);
    
    const config = useMemo(() => ({
        textureWidth: 512,
        textureHeight: 512,
        waterNormals, // Pass the unlocked clone here!
        sunDirection: new THREE.Vector3(...sunPos).normalize(),
        sunColor: 0xfff2c2,
        waterColor: 0x004466,
        distortionScale: 3.7,
        fog: true,
        }),
        [waterNormals, sunPos]
    );
    
    useFrame((state, delta) => {
        if (waterRef.current) {
        waterRef.current.material.uniforms.time.value += delta * 0.5;
        }
    });

    return (
        <>
            <water 
                ref={waterRef} 
                args={[geom, config]} 
                rotation-x={-Math.PI / 2} 
                position={[0, -10, 0]} 
            />
        </>
    )
}