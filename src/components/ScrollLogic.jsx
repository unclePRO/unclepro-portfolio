import * as THREE from 'three'
import { Cloud, Clouds, Environment, Html, Sky, useScroll } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react'
import ApplyStyle from './ApplyStyle';
import { curve } from './Curve';
import Background from './Background';

export default function ScrollLogic() {
    const sunRef = useRef();


    const page1GroupRef = useRef();
    const page2GroupRef = useRef();
    const page1Ref = useRef();
    const page2Ref = useRef();

    const scrollData = useScroll();

    const page1Point = curve.getPointAt(0.12);
    const page2Point = curve.getPointAt(0.62);

    useFrame(() => {
        if (page1GroupRef.current) page1GroupRef.current.position.copy(page1Point);
        if (page2GroupRef.current) page2GroupRef.current.position.copy(page2Point);

        const scroll1 = scrollData.range(0, 1/2);
        const scroll2 = scrollData.range(1/2, 1/2);

        ApplyStyle(page1Ref, scroll1, true);
        ApplyStyle(page2Ref, scroll2);
    })

    return (
        <>  
            <Background/>

            <group ref={page1GroupRef}>
                <Html transform portal={{ current: scrollData.fixed }} occlude={false} className="pointer-events-none">
                    <section ref={page1Ref}>
                        <h1 className="text-6xl font-bold text-white whitespace-nowrap">uncle PRO</h1>
                    </section>
                </Html>
            </group>

            <group ref={page2GroupRef}>
                <Html transform portal={{ current: scrollData.fixed }} occlude={false} className="pointer-events-none">
                    <section ref={page2Ref}>
                        <h1 className="text-6xl font-bold text-white whitespace-nowrap">2nd page fr</h1>
                    </section>
                </Html>
            </group>
        </>
        );
}