"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Nodes() {
    const count = 40;
    const mesh = useRef<THREE.Points>(null!);
    const lineMesh = useRef<THREE.LineSegments>(null!);

    const particles = useMemo(() => {
        const temp = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            temp[i * 3] = (Math.random() - 0.5) * 10;
            temp[i * 3 + 1] = (Math.random() - 0.5) * 10;
            temp[i * 3 + 2] = (Math.random() - 0.5) * 10;
        }
        return temp;
    }, []);

    const velocities = useMemo(() => {
        const temp = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            temp[i * 3] = (Math.random() - 0.5) * 0.005;
            temp[i * 3 + 1] = (Math.random() - 0.5) * 0.005;
            temp[i * 3 + 2] = (Math.random() - 0.5) * 0.005;
        }
        return temp;
    }, []);

    useFrame(() => {
        const positions = mesh.current.geometry.attributes.position.array as Float32Array;

        // Update positions
        for (let i = 0; i < count; i++) {
            positions[i * 3] += velocities[i * 3];
            positions[i * 3 + 1] += velocities[i * 3 + 1];
            positions[i * 3 + 2] += velocities[i * 3 + 2];

            // Boundary check
            if (Math.abs(positions[i * 3]) > 5) velocities[i * 3] *= -1;
            if (Math.abs(positions[i * 3 + 1]) > 5) velocities[i * 3 + 1] *= -1;
            if (Math.abs(positions[i * 3 + 2]) > 5) velocities[i * 3 + 2] *= -1;
        }
        mesh.current.geometry.attributes.position.needsUpdate = true;

        // Build line geometry
        const lineCoords = [];
        for (let i = 0; i < count; i++) {
            for (let j = i + 1; j < count; j++) {
                const dx = positions[i * 3] - positions[j * 3];
                const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
                const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
                const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

                if (dist < 2) {
                    lineCoords.push(positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2]);
                    lineCoords.push(positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]);
                }
            }
        }

        lineMesh.current.geometry.setAttribute('position', new THREE.Float32BufferAttribute(lineCoords, 3));
    });

    return (
        <group>
            <points ref={mesh}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        args={[particles, 3]}
                    />
                </bufferGeometry>
                <pointsMaterial size={0.05} color="#00F3FF" transparent opacity={0.6} sizeAttenuation />
            </points>
            <lineSegments ref={lineMesh}>
                <bufferGeometry />
                <lineBasicMaterial color="#00FF41" transparent opacity={0.2} />
            </lineSegments>
        </group>
    );
}

export default function NetworkBackground() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <Nodes />
            </Canvas>
        </div>
    );
}
