import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import s from "./spinning-object.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// 3D Tools
import { Canvas, useThree } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";

const MainSpinningObject = ({ object, image, scaler }) => {
  const scrollRef = useRef();
  const ref = useRef();
  // const { scene } = useThree();

  const objectElem = object || "/images/red_ryder_punch.obj";
  const imageElem = image || "/images/red_ryder_punch_image.png";

  const obj = useLoader(OBJLoader, objectElem);
  // const gltf = useLoader(GLTFLoader, objectElem);
  // const obj = gltf.scene;

  const scaleSize = 0.17;
  obj.scale.set(scaleSize, scaleSize, scaleSize);

  // Load the texture.
  const texture = useLoader(TextureLoader, imageElem);
  const aspectRatio = texture.image.width / texture.image.height;

  // const scaler = scaler; // 1 punch, 1.12 berry, 1.055 cat

  // Offset and repeat properties can be used to adjust how the texture is mapped onto the object.
  // Adjust these values to fit your needs.
  texture.offset.set(0, 0); // This will center the texture.
  texture.repeat.set(1 * scaler, aspectRatio * scaler); // This will scale the texture down to half its original size.

  const material = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      map: texture,
      metalness: 0,
      roughness: 0,
    });
  }, [texture]);

  // Apply the texture to all materials in the object.
  obj.traverse((child) => {
    if (child.isMesh) {
      child.material = material;
      child.material.side = THREE.DoubleSide;
    }
  });

  texture.encoding = THREE.sRGBEncoding;

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: scrollRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 2,
        // markers: true,
      },
    });

    tl.to(ref.current.rotation, { y: Math.PI * 4.5 });

    // Attach scene and THREE to the window object for DEBUGGING
    // if (typeof window !== "undefined") {
    //   window.scene = scene;
    //   window.THREE = THREE;
    // } else {
    //   global.scene = scene;
    //   global.THREE = THREE;
    // }
  }, []);

  return <primitive object={obj} ref={ref} />;
};

const SpinningObject = ({ height = "40rem", backgroundColor = "transparent", object, image, scaler }) => {
  const scrollRef = useRef();

  return (
    <>
      <div className={s.objectContain} ref={scrollRef}>
        <Canvas>
          <ambientLight intensity={1} />
          <pointLight position={[20, -4, 0]} intensity={5} distance={0} color={0x00ffff} />
          <pointLight position={[25, -1, 6]} intensity={2} distance={0} color={0xfe00f7} />
          <pointLight position={[-40, 6, 7]} intensity={2} distance={0} color={0x22fe00} />
          <MainSpinningObject object={object} image={image} scaler={scaler} />
        </Canvas>
      </div>
    </>
  );
};

export default SpinningObject;
