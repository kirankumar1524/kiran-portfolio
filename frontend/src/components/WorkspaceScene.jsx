import { Canvas } from '@react-three/fiber'
import { Float, OrbitControls, Sphere, Stars } from '@react-three/drei'

function WorkspaceScene() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 45 }} className="h-full w-full">
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Stars radius={50} depth={30} count={300} factor={4} saturation={0} fade />
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.85}>
        <Sphere args={[1.6, 64, 64]} scale={1.2}>
          <meshStandardMaterial color="#06B6D4" roughness={0.2} metalness={0.7} transparent opacity={0.85} />
        </Sphere>
      </Float>
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.35} />
    </Canvas>
  )
}

export default WorkspaceScene
