import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Center, Bounds } from '@react-three/drei';

interface ModelProps {
  url: string;
}

const Model: React.FC<ModelProps> = ({ url }) => {
  const { scene } = useGLTF(url);
  return <primitive object={scene} rotation={[-Math.PI / 2, 0, 0]}/>;
};

interface ModelViewerProps {
  modelUrl: string;
}

const ModelViewer: React.FC<ModelViewerProps> = ({ modelUrl }) => {
  return (
    <div className="card">
      <Canvas camera={{ position: [0, 1, 3], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 0, 10]} intensity={1} />
        <directionalLight position={[0, 0, -10]} intensity={1} />
        <directionalLight position={[10, 0, 0]} intensity={1} />
        <directionalLight position={[-10, 0, 0]} intensity={1} />
        <Suspense fallback={null}>
          <Bounds fit clip observe margin={1}>
            <Center>
              <Model url={modelUrl} />
            </Center>
          </Bounds>
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default ModelViewer;