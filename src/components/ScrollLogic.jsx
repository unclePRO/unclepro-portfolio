import { Html, useScroll } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';
import ApplyStyle from './ApplyStyle';
import { curve } from './Curve';
import Background from './Background';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';

export default function ScrollLogic() {
    const page1GroupRef = useRef();
    const page2GroupRef = useRef();
    const page3GroupRef = useRef();
    const page4GroupRef = useRef();

    const page1Ref = useRef();
    const page2Ref = useRef();
    const page3Ref = useRef();
    const page4Ref = useRef();

    const scrollData = useScroll();
    const { camera } = useThree();

    const page1Point = curve.getPointAt(0.019);
    const page2Point = curve.getPointAt(0.37);
    const page3Point = curve.getPointAt(0.62);
    const page4Point = curve.getPointAt(0.87);

    useFrame(() => {
        if (page1GroupRef.current) page1GroupRef.current.position.copy(page1Point);
        if (page2GroupRef.current) page2GroupRef.current.position.copy(page2Point);
        if (page3GroupRef.current) page3GroupRef.current.position.copy(page3Point);
        if (page4GroupRef.current) page4GroupRef.current.position.copy(page4Point);

        const camZ = camera.position.z;
        const dist1 = camZ - page1Point.z;
        const dist2 = camZ - page2Point.z;
        const dist3 = camZ - page3Point.z;
        const dist4 = camZ - page4Point.z;

        ApplyStyle(page1Ref, dist1);
        ApplyStyle(page2Ref, dist2);
        ApplyStyle(page3Ref, dist3);
        ApplyStyle(page4Ref, dist4);
    });

    return (
        <>  
            <Background/>

            <group ref={page1GroupRef}>
                <Html transform portal={{ current: scrollData.fixed }} occlude={false} className="pointer-events-none overflow-hidden">
                    <div ref={page1Ref} className="transition-opacity duration-200">
                        <Page1/>
                    </div>
                </Html>
            </group>

            <group ref={page2GroupRef}>
                <Html transform portal={{ current: scrollData.fixed }} occlude={false} className="pointer-events-none overflow-hidden">
                    <div ref={page2Ref} className="transition-opacity duration-200">
                        <Page2/>
                    </div>
                </Html>
            </group>

            <group ref={page3GroupRef}>
                <Html transform portal={{ current: scrollData.fixed }} occlude={false} className="pointer-events-none overflow-hidden">
                    <div ref={page3Ref} className="transition-opacity duration-200">
                        <Page3/>
                    </div>
                </Html>
            </group>

            <group ref={page4GroupRef}>
                <Html transform portal={{ current: scrollData.fixed }} occlude={false} className="pointer-events-none overflow-hidden">
                    <div ref={page4Ref} className="transition-opacity duration-200">
                        <Page4/>
                    </div>
                </Html>
            </group>
        </>
    );
}
