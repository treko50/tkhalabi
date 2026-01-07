import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import FloatingShape from './FloatingShape';
import { useTheme } from '../../contexts/ThemeContext';

export default function Scene3D() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="absolute inset-0 w-full h-full -z-10">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        {/* Lighting */}
        <ambientLight intensity={isDark ? 0.3 : 0.5} />
        <pointLight position={[10, 10, 10]} intensity={isDark ? 0.8 : 1} />
        <pointLight position={[-10, -10, -10]} intensity={isDark ? 0.5 : 0.3} color="#14b8a6" />

        {/* 3D Shapes */}
        <FloatingShape position={[-3, 2, 0]} color={isDark ? '#ef4444' : '#dc2626'} speed={0.8} />
        <FloatingShape position={[3, -1, -2]} color={isDark ? '#14b8a6' : '#0d9488'} speed={1.2} />
        <FloatingShape position={[0, 1, -3]} color={isDark ? '#8b5cf6' : '#7c3aed'} speed={1} />
        <FloatingShape position={[-2, -2, 1]} color={isDark ? '#f59e0b' : '#d97706'} speed={0.9} />
        <FloatingShape position={[2, 2, 2]} color={isDark ? '#ec4899' : '#db2777'} speed={1.1} />
      </Canvas>
    </div>
  );
}
