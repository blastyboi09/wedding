'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

const petalColors = ['#FFD9DC', '#FFECEF', '#FFC0CB', '#FFB6C1', '#F2C4D0'];
const flowerColors = ['#FFD9DC', '#D4C8E8', '#FFE0D0', '#F2C4D0'];

const seeded = (seed: number) => {
    const x = Math.sin(seed * 999) * 10000;
    return x - Math.floor(x);
};

function Petal({
    position,
    rotation,
    scale,
    speed,
    color,
}: {
    position: [number, number, number];
    rotation: [number, number, number];
    scale: number;
    speed: number;
    color: string;
}) {
    const meshRef = useRef<THREE.Mesh>(null);

    const petalShape = useMemo(() => {
        const shape = new THREE.Shape();
        shape.moveTo(0, 0);
        shape.bezierCurveTo(0.3, 0.3, 0.3, 0.7, 0, 1);
        shape.bezierCurveTo(-0.3, 0.7, -0.3, 0.3, 0, 0);
        return shape;
    }, []);

    useFrame((state) => {
        if (!meshRef.current) return;

        meshRef.current.position.y -= speed * 0.008;
        meshRef.current.position.x += Math.sin(state.clock.elapsedTime * 0.5 + position[0]) * 0.003;
        meshRef.current.rotation.x += 0.01;
        meshRef.current.rotation.z += 0.005;

        if (meshRef.current.position.y < -8) {
            meshRef.current.position.y = 8;
            meshRef.current.position.x = position[0];
        }
    });

    return (
        <mesh ref={meshRef} position={position} scale={scale} rotation={rotation}>
            <shapeGeometry args={[petalShape]} />
            <meshBasicMaterial color={color} transparent opacity={0.65} side={THREE.DoubleSide} />
        </mesh>
    );
}

function Flower({ position, scale, color }: { position: [number, number, number]; scale: number; color: string }) {
    const groupRef = useRef<THREE.Group>(null);

    const petalShape = useMemo(() => {
        const shape = new THREE.Shape();
        shape.moveTo(0, 0);
        shape.bezierCurveTo(0.5, 0.2, 0.5, 0.8, 0, 1.2);
        shape.bezierCurveTo(-0.5, 0.8, -0.5, 0.2, 0, 0);
        return shape;
    }, []);

    useFrame((state) => {
        if (!groupRef.current) return;

        groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
        groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    });

    return (
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
            <group ref={groupRef} position={position} scale={scale}>
                {[0, 1, 2, 3, 4].map((index) => (
                    <mesh key={index} rotation={[0.3, 0, (index * Math.PI * 2) / 5]}>
                        <shapeGeometry args={[petalShape]} />
                        <meshBasicMaterial color={color} transparent opacity={0.6} side={THREE.DoubleSide} />
                    </mesh>
                ))}
                <mesh position={[0, 0, 0.1]}>
                    <circleGeometry args={[0.25, 16]} />
                    <meshBasicMaterial color="#FFF5D6" transparent opacity={0.72} />
                </mesh>
            </group>
        </Float>
    );
}

interface Flowers3DProps {
    fullScreen?: boolean;
}

export default function Flowers3D({ fullScreen = true }: Flowers3DProps) {
    const petals = useMemo(() => {
        return Array.from({ length: 25 }, (_, index) => ({
            position: [
                (seeded(index + 1) - 0.5) * 15,
                seeded(index + 2) * 16 - 8,
                (seeded(index + 3) - 0.5) * 5,
            ] as [number, number, number],
            rotation: [seeded(index + 4) * Math.PI, 0, seeded(index + 5) * Math.PI] as [number, number, number],
            scale: 0.3 + seeded(index + 6) * 0.4,
            speed: 0.5 + seeded(index + 7),
            color: petalColors[index % petalColors.length],
        }));
    }, []);

    const flowers = useMemo(() => {
        return Array.from({ length: 8 }, (_, index) => ({
            position: [
                (seeded(index + 20) - 0.5) * 18,
                (seeded(index + 30) - 0.5) * 12,
                -2 + seeded(index + 40) * -3,
            ] as [number, number, number],
            scale: 0.4 + seeded(index + 50) * 0.4,
            color: flowerColors[index % flowerColors.length],
        }));
    }, []);

    return (
        <div
            style={{
                position: fullScreen ? 'fixed' : 'absolute',
                inset: 0,
                width: fullScreen ? '100vw' : '100%',
                height: fullScreen ? '100vh' : '100%',
                zIndex: 0,
                pointerEvents: 'none',
                opacity: 0.55,
                overflow: 'hidden',
            }}
        >
            <Canvas camera={{ position: [0, 0, 10], fov: 50 }} style={{ width: '100%', height: '100%' }}>
                <ambientLight intensity={1} />
                {petals.map((petal, index) => (
                    <Petal key={`petal-${index}`} {...petal} />
                ))}
                {flowers.map((flower, index) => (
                    <Flower key={`flower-${index}`} {...flower} />
                ))}
            </Canvas>
        </div>
    );
}
