import React from 'react'
import { Canvas } from '@react-three/fiber';
import { Car } from '../models/car'

function Loader() {

    const adjustCarForScreenSize = () => {
        let screenScale = null;
    
        let screenPosition;
    
        if (window.innerWidth < 768) {
          screenScale = 0.5;
          screenPosition = [0,0,-5];
        } else {
          screenScale = 0.5;
          screenPosition = [0,-2,0];
        }
    
        return [screenScale, screenPosition];
      };

      const [carScale, carPosition] =
      adjustCarForScreenSize();


  return (
    <section className='w-full h-screen relative md:max-xl:flex flex'>
        <Canvas
        camera={{ near: 0.1, far: 1000 }}
      >
      <directionalLight position={[1, 1, 1]} intensity={2} />
      <ambientLight intensity={0.5} />
      <hemisphereLight
        skyColor='#b1e1ff'
        groundColor='#000000'
        intensity={1}
      />
              <Car scale={carScale} position={carPosition}/>
      </Canvas>

    </section>
  )
}

export default Loader