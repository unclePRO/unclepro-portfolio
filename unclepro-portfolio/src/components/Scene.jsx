import { ScrollControls, Stars, Scroll } from '@react-three/drei'

export default function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />
      
      <Stars radius={100} depth={50} count={5000} factor={10} saturation={0} fade speed={1} />

      {/* pages={4} means the virtual scrollable area is 4 viewports tall */}
      <ScrollControls pages={4} damping={0.2}>
        
        {/* AREA 1: Everything in this block lives inside the 3D space */}
        <Scroll>
          {/* We will place 3D assets, paths, or meshes here later */}
          <mesh position={[0, 0, -2]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="#8833ff" wireframe />
          </mesh>
        </Scroll>

        {/* AREA 2: Everything in this block is normal HTML layered over the canvas */}
        <Scroll html className="w-full text-white">
          
          {/* Page 1: Intro */}
          <section className="h-screen w-full flex flex-col justify-center items-center p-8">
            <h1 className="text-5xl font-extrabold tracking-wider bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              uncle PRO
            </h1>
            <p className="mt-4 text-xl text-gray-400">Scroll to explore the universe</p>
          </section>

          {/* Page 2: GitHub / Commits */}
          <section className="h-screen w-full flex flex-col justify-center items-start p-20">
            <h2 className="text-4xl font-bold text-purple-400">Systems & Infrastructure</h2>
            <p className="mt-2 text-gray-300 max-w-md">Exploring backend architectures and deployment workflows.</p>
          </section>

          {/* Page 3: Projects & Storefront */}
          <section className="h-screen w-full flex flex-col justify-center items-end p-20">
            <h2 className="text-4xl font-bold text-pink-500">Custom Environments</h2>
            <p className="mt-2 text-gray-300 max-w-md text-right">Tailored dotfiles and system workspace configurations.</p>
          </section>

          {/* Page 4: Connect / Spotify */}
          <section className="h-screen w-full flex flex-col justify-center items-center p-8">
            <h2 className="text-4xl font-bold">Get In Touch</h2>
          </section>

        </Scroll>
      </ScrollControls>
    </>
  )
}