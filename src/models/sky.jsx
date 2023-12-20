import { useGLTF } from '@react-three/drei';
import skyScene from '../assets/glb/sky_4.glb';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const Sky = ({ isRotating }) => {
  const sky = useGLTF(skyScene);
  const skyRef = useRef();

//   useFrame((_, delta) => {
//     if (isRotating) {
//       skyRef.current.rotation.y += 0.15 * delta;
//     }
//   })

  return (
    <mesh ref={skyRef}>
      <primitive object={sky.scene} />
    </mesh>
  );
};

export default Sky;
