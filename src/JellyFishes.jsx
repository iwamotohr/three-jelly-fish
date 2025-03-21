import { useAnimations, useGLTF, Float, Clone } from "@react-three/drei";
import * as THREE from "three";

export default function JellyFish() {
  const jellyFish = useGLTF("./jelly_fish_anim.glb");
  const animations = useAnimations(jellyFish.animations, jellyFish.scene);
  const action = animations.actions.Beat;

  const modelClickHandler = (event) => {
    action.reset().play();
    action.setLoop(THREE.LoopOnce);
    action.clampWhenFinished = true;

    event.stopPropagation();
  };

  const cloneAttrs = [
    {
      floatSpeed: 1,
      floatIntensity: 8,
      scale: 0.9,
      position: [3, 2, -1],
      rotation: [Math.PI / 2, 0, 0],
    },
    {
      floatSpeed: 2,
      floatIntensity: 6,
      scale: 0.8,
      position: [-3, -2, -2],
      rotation: [Math.PI / 2, 0, 0],
    },
    {
      floatSpeed: 0.6,
      floatIntensity: 7,
      scale: 0.7,
      position: [-2, 2, -2],
      rotation: [-Math.PI / 4, 0, 0],
    },
    {
      floatSpeed: 1,
      floatIntensity: 7,
      scale: 1,
      position: [4, -2, 3],
      rotation: [0, 0, -Math.PI / 4],
    },
  ];

  return (
    <>
      <Float speed={0.8} floatIntensity={7}>
        <primitive
          object={jellyFish.scene}
          rotation={[Math.PI / 6, 0, 0]}
          onClick={modelClickHandler}
          onPointerEnter={() => {
            document.body.style.cursor = "pointer";
          }}
          onPointerLeave={() => {
            document.body.style.cursor = "default";
          }}
        />
        ;
      </Float>
      {cloneAttrs.map(
        (
          { floatSpeed, floatIntensity, scale, position, rotation } = cloneAttr,
          index
        ) => {
          return (
            <Float
              key={index}
              speed={floatSpeed}
              floatIntensity={floatIntensity}
            >
              <Clone
                object={jellyFish.scene}
                scale={scale}
                position={position}
                rotation={rotation}
                onClick={(event) => event.stopPropagation()}
                onPointerEnter={(event) => event.stopPropagation()}
              />
              ;
            </Float>
          );
        }
      )}
    </>
  );
}
useGLTF.preload("/jelly_fish_anim.glb");
