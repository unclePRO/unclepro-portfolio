import { Cloud, Clouds, Environment, MeshDistortMaterial, MeshWobbleMaterial, Sky } from "@react-three/drei";
import * as THREE from 'three'
import { useFrame, useLoader, extend } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import { Water } from "three-stdlib";
import Ocean from "./Ocean";

const cloudPositions = [
    [-200, 100, -100],
    [300, 20, -200],
    [-500, 30, -300],
    [500, 40, -400],
    [-50, 50, -500],
    [80, 100, -600],
];

const sunPos = [100, -10, -5000];

export default function Background () {

    return (
        <>  
            <directionalLight position={sunPos} intensity={2.2} color="#fff2c2" />
            <Environment preset="sunset"/>
            <fog attach="fog" args={['#b1c7ff', 100, 3000]} />
            <Sky
                distance={450000}
                sunPosition={sunPos}
                inclination={0.9}
                azimuth={0.001}
                turbidity={12}
                rayleigh={0.5}
                mieCoefficient={0.00001}
                mieDirectionalG={0.5}
            />

            <Clouds frustumCulled={false}>
                {cloudPositions.map((pos, i) => (
                    <Cloud
                        key={i}
                        position={pos}
                        bounds={[20, 10, 40]}
                        volume={18}
                        scale={23}
                        segments={50}
                        opacity={1}
                        speed={0.05}
                        color="#ffe8c2"
                    />
                ))}
            </Clouds>

            <Ocean sunPos={sunPos}/>

        
        </>
    )
}