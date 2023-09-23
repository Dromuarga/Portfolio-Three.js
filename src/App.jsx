import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";
import { useState } from "react";
import BarLoader from "react-spinners/BarLoader";

export default function App() {
  const [loading, setLoading] = useState(true);
  window.setTimeout(() => {
    setLoading(false);
  }, 2000);
  return (
    <>
      {loading ? (
        <div className="loading">
          <BarLoader loading={loading} size={200} color="#90A955" />
          <p>Loading...</p>
        </div>
      ) : (
        <Canvas
          camera={{
            fov: 45,
            near: 0.1,
            far: 2000,
            position: [-3, 1.5, 4],
          }}
        >
          <Experience />
        </Canvas>
      )}
    </>
  );
}
