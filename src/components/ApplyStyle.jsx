export default function ApplyStyle( ref, localScroll, home = false ) {

    if(ref.current) {
        if (!home && localScroll == 0) {
            ref.current.style.display = 'none'
            return;
        } else {
            ref.current.style.display = 'flex'
        }
        // const zPos = localScroll * 400;
        // const rotX = localScroll * 0;
        // const rotY = localScroll * 0;
        // const rotZ = localScroll * 0;
        // const blur = localScroll * 0;
        // const opacity = 1 - localScroll;
        // const letterSpread = localScroll * 10;
        // const scale = 0.7 + (localScroll * 2);

        // ref.current.style.transform = 
        //     `translate3d(0px, 0px, ${zPos}px) 
        //     rotateX(${rotX}deg) rotateY(${rotY}deg) rotateZ(${rotZ}deg)
        //     scale(${scale})`;

        // ref.current.style.opacity = opacity;
        // ref.current.style.filter = `blur(${blur}px)`
        // ref.current.style.letterSpacing = `${letterSpread}px`
    }
    return;
}