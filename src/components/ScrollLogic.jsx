import { Html, useScroll } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react'
import ApplyStyle from './ApplyStyle';
import { curve } from './Curve';
import Background from './Background';
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Page3 from './pages/page3';
import Page4 from './pages/page4';
export default function ScrollLogic() {
    const sunRef = useRef();


    const page1GroupRef = useRef();
    const page2GroupRef = useRef();
    const page3GroupRef = useRef();
    const page4GroupRef = useRef();

    const page1Ref = useRef();
    const page2Ref = useRef();
    const page3Ref = useRef();
    const page4Ref = useRef();

    const scrollData = useScroll();

    const page1Point = curve.getPointAt(0.019);
    const page2Point = curve.getPointAt(0.37);
    const page3Point = curve.getPointAt(0.62);
    const page4Point = curve.getPointAt(0.87);

    useFrame(() => {
        if (page1GroupRef.current) page1GroupRef.current.position.copy(page1Point);
        if (page2GroupRef.current) page2GroupRef.current.position.copy(page2Point);
        if (page3GroupRef.current) page3GroupRef.current.position.copy(page3Point);
        if (page4GroupRef.current) page4GroupRef.current.position.copy(page4Point);

        const scroll1 = scrollData.range(0, 1/4);
        const scroll2 = scrollData.range(1/4, 1/4);
        const scroll3 = scrollData.range(2/4, 1/4);
        const scroll4 = scrollData.range(3/4, 1/4);

        // ApplyStyle(page1Ref, scroll1, true);
        // ApplyStyle(page2Ref, scroll2);
        // ApplyStyle(page3Ref, scroll3);
        // ApplyStyle(page4Ref, scroll4);
    })

    return (
        <>  
            <Background/>

            <group ref={page1GroupRef}>
                <Html transform portal={{ current: scrollData.fixed }} occlude={false} className="pointer-events-none">
                    <div ref={page1Ref}>
                        <Page1/>
                    </div>
                </Html>
            </group>

            <group ref={page2GroupRef}>
                <Html transform portal={{ current: scrollData.fixed }} occlude={false} className="pointer-events-none">
                    <div ref={page2Ref}>
                        <Page2/>
                    </div>
                </Html>
            </group>

            <group ref={page3GroupRef}>
                <Html transform portal={{ current: scrollData.fixed }} occlude={false} className="pointer-events-none">
                    <div ref={page3Ref}>
                        <Page3/>
                    </div>
                </Html>
            </group>

            <group ref={page4GroupRef}>
                <Html transform portal={{ current: scrollData.fixed }} occlude={false} className="pointer-events-none">
                    <div ref={page4Ref}>
                        <Page4/>
                    </div>
                </Html>
            </group>
        </>
        );
}