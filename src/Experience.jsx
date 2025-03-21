import { OrbitControls, Sparkles } from "@react-three/drei";
import JellyFishes from "./JellyFishes";

export default function Experience() {
  return (
    <>
      <OrbitControls makeDefault />

      <directionalLight
        castShadow
        position={[1, 2, 1]}
        intensity={10}
        color={"#005EFE"}
      />
      <directionalLight
        castShadow
        position={[-1, 1, -1]}
        intensity={7}
        color={"#AC2CFE"}
      />
      <ambientLight intensity={1.5} />

      <Sparkles
        size={10}
        scale={[50, 50, 50]}
        position-y={1}
        speed={0.4}
        count={80}
      />
      <JellyFishes />
    </>
  );
}
