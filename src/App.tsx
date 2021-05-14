import { Canvas } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import "./App.css";
import { useSpring, animated, config } from "@react-spring/three";
import { Mesh } from "three";
import { OrbitControls } from "@react-three/drei";

function Scene() {
  const [active, setActive] = useState(false);

  const { scale } = useSpring({
    scale: active ? 2 : 1,
    config: config.wobbly,
  });

  const meshRef = useRef<Mesh>();

  return (
    <animated.mesh
      scale={scale}
      onClick={() => setActive(!active)}
      ref={meshRef}
    >
      <coneGeometry />
      <meshPhongMaterial color="#f7a440" />
    </animated.mesh>
  );
}

function App() {
  return (
    <div className="canvas-container">
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight />
        <Scene />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;
