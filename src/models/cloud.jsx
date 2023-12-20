import React, { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
// import { GLTFLoader } from 'three-gltf-loader';
import { OrbitControls, Preload, useGLTF, useAnimations } from "@react-three/drei";
import cloud from '../assets/glb/low_poly_cloud.glb';

const Cloud = (props) => {
    const { scene, nodes, materials } = useGLTF(cloud);
    const cloudRef = useRef()
    const numberOfObjects = 5;


    useFrame(() => {
        if (cloudRef.current) {
        cloudRef.current.translateX(0.4);
        }
      });
  return (
      <Suspense fallback={null}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <group dispose={null}>
            {/* <mesh geometry={nodes.Suzanne.geometry} material={materials.Gold} position={position} /> */}
            {/* <primitive ref={cloudRef}  object={scene} scale={0.5} {...props}/> */}
            <mesh ref={cloudRef} geometry={nodes.Object_2.geometry} scale={0.5} material={materials["Scene_-_Root"]} {...props} />
        </group>
        <Preload all />
      </Suspense>
  );
};

export default Cloud;
