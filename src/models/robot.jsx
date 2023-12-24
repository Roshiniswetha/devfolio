import React, { Suspense, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, useAnimations } from "@react-three/drei";
import robot from '../assets/glb/robot_blender_school_project.glb';

const RobotCanvas = () => {
  const { scene, animations } = useGLTF(robot);
  const robotRef = useRef();
  const { actions } = useAnimations(animations, robotRef);

  useEffect(() => {
    actions["Robot_Gear|CamLightEmptyAction"].play();
  }, []);

  return (
    <primitive object={scene} scale={2.5} position-y={0} rotation-y={0} ref={robotRef}/>
  );
};

const Robot = () => {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        position: [40, 13, 65],
        fov: 30,
        near: 0.1,
        far: 1000,
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

