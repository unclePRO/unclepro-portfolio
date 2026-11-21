export default function ApplyStyle(ref, dist) {
    if (!ref?.current) return;

    // If the card is behind the camera or too close (avoids CSS 3D matrix explosion and camera clipping),
    // or if the card is far away, completely remove it from rendering.
    if (dist <= 2 || dist >= 45) {
        if (ref.current.style.display !== 'none') {
            ref.current.style.display = 'none';
        }
        return;
    }

    if (ref.current.style.display !== 'flex') {
        ref.current.style.display = 'flex';
    }

    // At nominal target station distance (~9.5 to 10 units), opacity is 1.0.
    let opacity = 1;
    if (dist < 7) {
        // Smoothly fade out before camera gets close to prevent visual collision
        opacity = Math.max(0, Math.min(1, (dist - 2) / 5));
    } else if (dist > 16) {
        // Smoothly fade in as camera approaches the station
        opacity = Math.max(0, Math.min(1, (45 - dist) / 29));
    }

    ref.current.style.opacity = opacity.toFixed(3);
    ref.current.style.pointerEvents = opacity > 0.6 ? 'auto' : 'none';
}
