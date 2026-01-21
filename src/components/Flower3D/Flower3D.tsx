'use client';

import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Float, useTexture } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

// Single floating flower petal/flower
function FlowerSprite({ position, scale, speed, rotationSpeed }: {
    position: [number, number, number],
    scale: number,
    speed: number,
    rotationSpeed: number
}) {
    const meshRef = useRef<THREE.Mesh>(null);
    const initialY = position[1];

    useFrame((state) => {
        if (meshRef.current) {
            // Floating down slowly
            meshRef.current.position.y -= speed * 0.01;

            // Sway left and right
            meshRef.current.position.x += Math.sin(state.clock.elapsedTime + position[0]) * 0.002;

            // Rotate slowly
            meshRef.current.rotation.z += rotationSpeed * 0.01;

            // Reset to top when off screen
            if (meshRef.current.position.y < -10) {
                meshRef.current.position.y = 10;
            }
        }
    });

    // Random pastel color
    const color = useMemo(() => {
        const colors = ['#FFD9DC', '#D4C8E8', '#C2E8E0', '#FFE0D0', '#F2C4D0', '#FFF5D6', '#E0D0F0'];
        return colors[Math.floor(Math.random() * colors.length)];
    }, []);

    return (
        <mesh ref={meshRef} position={position} scale={scale}>
            <planeGeometry args={[1, 1]} />
            <meshBasicMaterial color={color} transparent opacity={0.7} side={THREE.DoubleSide} />
        </mesh>
    );
}

// Cherry blossom petal shape
function Petal({ position, scale, speed }: {
    position: [number, number, number],
    scale: number,
    speed: number
}) {
    const meshRef = useRef<THREE.Mesh>(null);

    const petalShape = useMemo(() => {
        const shape = new THREE.Shape();
        shape.moveTo(0, 0);
        shape.bezierCurveTo(0.3, 0.3, 0.3, 0.7, 0, 1);
        shape.bezierCurveTo(-0.3, 0.7, -0.3, 0.3, 0, 0);
        return shape;
    }, []);

    const color = useMemo(() => {
        const colors = ['#FFD9DC', '#FFECEF', '#FFC0CB', '#FFB6C1', '#F2C4D0'];
        return colors[Math.floor(Math.random() * colors.length)];
    }, []);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.position.y -= speed * 0.008;
            meshRef.current.position.x += Math.sin(state.clock.elapsedTime * 0.5 + position[0]) * 0.003;
            meshRef.current.rotation.x += 0.01;
            meshRef.current.rotation.z += 0.005;

            if (meshRef.current.position.y < -8) {
                meshRef.current.position.y = 8;
                meshRef.current.position.x = (Math.random() - 0.5) * 15;
            }
        }
    });

    return (
        <mesh ref={meshRef} position={position} scale={scale} rotation={[Math.random() * Math.PI, 0, Math.random() * Math.PI]}>
            <shapeGeometry args={[petalShape]} />
            <meshBasicMaterial color={color} transparent opacity={0.8} side={THREE.DoubleSide} />
        </mesh>
    );
}

// Full flower with multiple petals
function Flower({ position, scale }: { position: [number, number, number], scale: number }) {
    const groupRef = useRef<THREE.Group>(null);

    const petalShape = useMemo(() => {
        const shape = new THREE.Shape();
        shape.moveTo(0, 0);
        shape.bezierCurveTo(0.5, 0.2, 0.5, 0.8, 0, 1.2);
        shape.bezierCurveTo(-0.5, 0.8, -0.5, 0.2, 0, 0);
        return shape;
    }, []);

    const petalColor = useMemo(() => {
        const colors = ['#FFD9DC', '#D4C8E8', '#FFE0D0', '#F2C4D0'];
        return colors[Math.floor(Math.random() * colors.length)];
    }, []);

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
            groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
        }
    });

    return (
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
            <group ref={groupRef} position={position} scale={scale}>
                {/* Petals */}
                {[...Array(5)].map((_, i) => (
                    <mesh key={i} rotation={[0.3, 0, (i * Math.PI * 2) / 5]} position={[0, 0, 0]}>
                        <shapeGeometry args={[petalShape]} />
                        <meshBasicMaterial color={petalColor} transparent opacity={0.85} side={THREE.DoubleSide} />
                    </mesh>
                ))}
                {/* Center */}
                <mesh position={[0, 0, 0.1]}>
                    <circleGeometry args={[0.25, 16]} />
                    <meshBasicMaterial color="#FFF5D6" />
                </mesh>
            </group>
        </Float>
    );
}

interface Flowers3DProps {
    fullScreen?: boolean;
}

export default function Flowers3D({ fullScreen = true }: Flowers3DProps) {
    // Generate random positions for falling petals
    const petals = useMemo(() => {
        return [...Array(25)].map((_, i) => ({
            position: [
                (Math.random() - 0.5) * 15,
                Math.random() * 16 - 8,
                (Math.random() - 0.5) * 5
            ] as [number, number, number],
            scale: 0.3 + Math.random() * 0.4,
            speed: 0.5 + Math.random() * 1
        }));
    }, []);

    // Generate positions for stationary floating flowers
    const flowers = useMemo(() => {
        return [...Array(8)].map((_, i) => ({
            position: [
                (Math.random() - 0.5) * 18,
                (Math.random() - 0.5) * 12,
                -2 + Math.random() * -3
            ] as [number, number, number],
            scale: 0.4 + Math.random() * 0.4
        }));
    }, []);

    return (
        <div style={{
            position: fullScreen ? 'fixed' : 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
            pointerEvents: 'none'
        }}>
            <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
                <ambientLight intensity={1} />

                {/* Falling petals */}
                {petals.map((petal, i) => (
                    <Petal
                        key={`petal-${i}`}
                        position={petal.position}
                        scale={petal.scale}
                        speed={petal.speed}
                    />
                ))}

                {/* Floating flowers in background */}
                {flowers.map((flower, i) => (
                    <Flower
                        key={`flower-${i}`}
                        position={flower.position}
                        scale={flower.scale}
                    />
                ))}
            </Canvas>
        </div>
    );
}