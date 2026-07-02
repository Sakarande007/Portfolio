import { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Box, Torus } from '@react-three/drei';
import * as THREE from 'three';

// A simple procedural Robot component
const Robot = () => {
  const groupRef = useRef<THREE.Group>(null);
  const leftArmRef = useRef<THREE.Mesh>(null);
  const rightArmRef = useRef<THREE.Mesh>(null);
  const leftLegRef = useRef<THREE.Mesh>(null);
  const rightLegRef = useRef<THREE.Mesh>(null);
  const headRef = useRef<THREE.Group>(null);

  const { viewport } = useThree();

  // Robot State
  const [targetPos, setTargetPos] = useState(new THREE.Vector3(0, -viewport.height / 2 + 1, 0));
  const [isFalling, setIsFalling] = useState(false);
  const currentPos = useRef(new THREE.Vector3(0, 0, 0));
  
  // Animation state
  const time = useRef(0);
  const lastScrollY = useRef(0);
  const scrollVelocity = useRef(0);
  const tumbleRot = useRef(new THREE.Vector3(0, 0, 0));
  const peekTimer = useRef(0);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Calculate Scroll Velocity
    const scrollY = window.scrollY;
    const dy = scrollY - lastScrollY.current;
    scrollVelocity.current = THREE.MathUtils.lerp(scrollVelocity.current, dy / delta, 0.1);
    lastScrollY.current = scrollY;

    const absVel = Math.abs(scrollVelocity.current);
    
    // Check if scrolling heavily (falling)
    if (absVel > 500) {
      if (!isFalling) setIsFalling(true);
    } else if (absVel < 50) {
      if (isFalling) setIsFalling(false);
    }

    if (isFalling) {
      // Falling / Tumbling behavior
      targetPos.x = 0;
      targetPos.y = THREE.MathUtils.lerp(targetPos.y, -viewport.height / 2 + 1, delta * 2);
      
      tumbleRot.current.x += delta * 5 * Math.sign(scrollVelocity.current);
      tumbleRot.current.y += delta * 3;
      tumbleRot.current.z += delta * 4;

      groupRef.current.rotation.set(
        tumbleRot.current.x,
        tumbleRot.current.y,
        tumbleRot.current.z
      );

      time.current += delta * 15;
      if (leftArmRef.current) leftArmRef.current.rotation.x = Math.sin(time.current) * 2;
      if (rightArmRef.current) rightArmRef.current.rotation.x = Math.cos(time.current) * 2;
      if (leftLegRef.current) leftLegRef.current.rotation.x = Math.cos(time.current) * 2;
      if (rightLegRef.current) rightLegRef.current.rotation.x = Math.sin(time.current) * 2;

    } else {
      // Idle / Running behavior
      
      // Smoothly reset body rotation to face forward
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, 0, delta * 5);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, 0, delta * 5);
      groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, 0, delta * 5);

      // Mouse tracking for head
      if (headRef.current) {
        // Map pointer from [-1, 1] to rotation angles
        const targetHeadX = -state.pointer.y * 0.5;
        const targetHeadY = state.pointer.x * 0.8;
        headRef.current.rotation.x = THREE.MathUtils.lerp(headRef.current.rotation.x, targetHeadX, delta * 5);
        headRef.current.rotation.y = THREE.MathUtils.lerp(headRef.current.rotation.y, targetHeadY, delta * 5);
      }

      // Random movement logic & Peeking Pause
      const dist = currentPos.current.distanceTo(targetPos);
      if (dist < 0.1) {
        // Stop and peek for 3 seconds
        peekTimer.current += delta;
        
        // Smoothly stop arm/leg swinging when standing still
        if (leftArmRef.current) leftArmRef.current.rotation.x = THREE.MathUtils.lerp(leftArmRef.current.rotation.x, 0, delta * 5);
        if (rightArmRef.current) rightArmRef.current.rotation.x = THREE.MathUtils.lerp(rightArmRef.current.rotation.x, 0, delta * 5);
        if (leftLegRef.current) leftLegRef.current.rotation.x = THREE.MathUtils.lerp(leftLegRef.current.rotation.x, 0, delta * 5);
        if (rightLegRef.current) rightLegRef.current.rotation.x = THREE.MathUtils.lerp(rightLegRef.current.rotation.x, 0, delta * 5);

        if (peekTimer.current > 3) {
          // Pick new random target
          const newX = (Math.random() - 0.5) * (viewport.width - 2);
          const newY = -viewport.height / 2 + 1 + Math.random() * (viewport.height / 2 - 1);
          setTargetPos(new THREE.Vector3(newX, newY, 0));
          peekTimer.current = 0;
        }
      } else {
        // Move towards target
        const moveSpeed = 1.2; // Slowed down significantly
        currentPos.current.lerp(targetPos, delta * moveSpeed);

        // Running animation
        time.current += delta * 6; // Slower swing to match slower speed
        const swing = Math.sin(time.current);
        
        if (leftArmRef.current) leftArmRef.current.rotation.x = swing;
        if (rightArmRef.current) rightArmRef.current.rotation.x = -swing;
        if (leftLegRef.current) leftLegRef.current.rotation.x = -swing;
        if (rightLegRef.current) rightLegRef.current.rotation.x = swing;
      }
    }

    // Apply position
    groupRef.current.position.copy(currentPos.current);
    
    // Add subtle floating to head
    if (headRef.current && !isFalling) {
      headRef.current.position.y = 1.2 + Math.sin(time.current * 0.5) * 0.05;
    }
  });

  const material = useMemo(() => new THREE.MeshStandardMaterial({ 
    color: "#00F5FF",
    roughness: 0.2,
    metalness: 0.8,
  }), []);

  const darkMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: "#101010",
    roughness: 0.5,
  }), []);

  return (
    <group ref={groupRef} scale={0.5}>
      {/* Body */}
      <Box args={[1, 1.5, 0.8]} position={[0, 0, 0]} material={material} />
      
      {/* Head Group */}
      <group ref={headRef} position={[0, 1.2, 0]}>
        <Box args={[0.8, 0.8, 0.8]} material={material} />
        {/* Eyes */}
        <Box args={[0.15, 0.15, 0.1]} position={[-0.2, 0.1, 0.41]} material={darkMaterial} />
        <Box args={[0.15, 0.15, 0.1]} position={[0.2, 0.1, 0.41]} material={darkMaterial} />
        {/* Smiling Mouth (Torus arc) */}
        <Torus args={[0.2, 0.04, 16, 32, Math.PI]} rotation={[0, 0, Math.PI]} position={[0, -0.1, 0.41]} material={darkMaterial} />
      </group>

      {/* Left Arm */}
      <group position={[-0.7, 0.5, 0]}>
        <Box ref={leftArmRef} args={[0.3, 1.2, 0.3]} position={[0, -0.4, 0]} material={material} />
      </group>

      {/* Right Arm */}
      <group position={[0.7, 0.5, 0]}>
        <Box ref={rightArmRef} args={[0.3, 1.2, 0.3]} position={[0, -0.4, 0]} material={material} />
      </group>

      {/* Left Leg */}
      <group position={[-0.3, -0.8, 0]}>
        <Box ref={leftLegRef} args={[0.35, 1.2, 0.35]} position={[0, -0.4, 0]} material={darkMaterial} />
      </group>

      {/* Right Leg */}
      <group position={[0.3, -0.8, 0]}>
        <Box ref={rightLegRef} args={[0.35, 1.2, 0.35]} position={[0, -0.4, 0]} material={darkMaterial} />
      </group>
    </group>
  );
};

export const InteractiveAvatar = () => {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-[-2]">
      <Canvas camera={{ position: [0, 0, 15], fov: 40 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1.5} color="#00F5FF" />
        <directionalLight position={[-10, 10, -10]} intensity={0.5} color="#7C3AED" />
        <Robot />
      </Canvas>
    </div>
  );
};
