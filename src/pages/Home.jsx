import { Canvas } from '@react-three/fiber';
import { Suspense, useState, useRef, useEffect } from 'react';
// import Loader from '../components/Loader';
import Bird from '../models/bird';
import { Island } from '../models/island';
// import Sky from '../models/sky';
import Cloud from '../models/cloud';
import HomeInfo from './HomeInfo';

function Home() {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [22, -7, -43];
    let rotation = [0, 0, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosition, rotation];
  };

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, 1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };

  const adjustCloudForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, 0, 0];
    } else {
      screenScale = [2,2,2]
      screenPosition = [[-500, 10, -430],[10, 20, 90]];

      // [20, -40, -430];
    }
    

    return [screenScale, screenPosition];
  };

  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();

  const [cloudScale, cloudPosition] = adjustCloudForScreenSize();
  return (
    <div className="bg-gradient-to-bl from-indigo-200 via-red-200 to-yellow-100 min-h-screen flex justify-center items-center">
    <section className='w-full h-screen relative'>
      <div className='absolute bottom-36 left-20 z-10 flex items-center justify-center'>
       <HomeInfo currentStage={currentStage} />
       </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={null}>
      <directionalLight position={[1, 1, 1]} intensity={2} />
      <ambientLight intensity={0.5} />
      <hemisphereLight
        skyColor='#b1e1ff'
        groundColor='#000000'
        intensity={1}
      />
      {cloudPosition.map((position, i) => (
        <Cloud 
          key={i}
          position={position}
          scale={cloudScale}
      />
      ))}
      {/* <Sky/> */}
      <Island 
        position={islandPosition}
        scale={islandScale}
        rotation={islandRotation}
        isRotating={isRotating}
        setIsRotating={setIsRotating}
        setCurrentStage={setCurrentStage}
      />
      </Suspense>
      </Canvas>
    </section>
    </div>
  );
}

export default Home;
