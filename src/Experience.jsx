import {
  Text,
  Html,
  ContactShadows,
  PresentationControls,
  Float,
  Environment,
  useGLTF,
  OrbitControls,
} from "@react-three/drei";

export default function Experience() {
  const computer = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );
  //console.log("loading gltf");
  //#6B705C,A6A2A2
  //const mouseOver = () => {
  //console.log("trying to move");
  //computer.scene.position.setZ(100); // = 10;
  //};

  return (
    <>
      <color args={["#6B705C"]} attach="background" />
      <Environment preset="city" />

      <PresentationControls
        global
        rotation={[0.13, 0.1, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 2, tension: 400 }}
      >
        <Float rotationIntensity={0.4}>
          <rectAreaLight
            width={2.5}
            height={1.65}
            intensity={65}
            color={"#90a955"}
            rotation={[-0.1, Math.PI, 0]}
            position={[0, 0.55, -1.15]}
          />
          <primitive
            onPointerEnter={() => {
              computer.scene.position.setX(-1.25);
              computer.scene.position.setY(-1);
              computer.scene.position.setZ(1.5);
            }}
            onPointerLeave={() => {
              computer.scene.position.setX(0);
              computer.scene.position.setY(-1.2);
              computer.scene.position.setZ(0);
            }}
            object={computer.scene}
            position-y={-1.2}
            rotation-x={0.13}
          >
            <Html
              transform
              wrapperClass="htmlScreen"
              distanceFactor={1.17}
              position={[0, 1.56, -1.4]}
              rotation-x={-0.256}
            >
              <iframe src="https://blog-html-ashy.vercel.app/" />
            </Html>
          </primitive>
          <Text
            font="./bangers-v20-latin-regular.woff"
            fontSize={1}
            position={[3, 0.75, 0.75]}
            rotation-y={-1.25}
            maxWidth={2}
          >
            ELIZA NIERWINSKA
          </Text>
        </Float>
      </PresentationControls>

      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
    </>
  );
}
