import React, { Suspense, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, useAnimations } from "@react-three/drei";
import robot from '../assets/glb/cute_home_robot.glb';

const RobotCanvas = () => {
  const { scene, animations } = useGLTF(robot);
  const robotRef = useRef();
  const { actions } = useAnimations(animations, robotRef);
  console.log(actions, animations)

  useEffect(() => {
    actions["Take 001"].play();
  }, []);

  return (
    <primitive object={scene} scale={2.5} position-y={0} rotation-y={0} ref={robotRef}/>
  );
};

const Robot = () => {
  return (
    <Canvas
      shadows
    //   frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        position: [4, -16, 18],
        fov: 45,
        near: 0.1,
        far: 800,
      }}
    >
        <directionalLight intensity={2.5} position={[0, 0, 1]} />
        <ambientLight intensity={0.5} />
      <Suspense fallback={null}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <RobotCanvas />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default Robot;

