import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const RotatingCube = () => {
  const cubeRef = useRef();

  useFrame(() => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x += 0.01;
      cubeRef.current.rotation.y += 0.01;
    }
  });

  const handleClick = () => {
    alert("Você clicou no cubo!");
  };

  return (
    <mesh ref={cubeRef} position={[0, 0, 0]} onClick={handleClick}>
      <sphereGeometry args={[3, 3, 33334]} />
      <meshStandardMaterial color="royalblue" />
    </mesh>
  );
};

export default RotatingCube;
