"use client"

import { useRef, useMemo } from "react"
import { useTheme } from "../../context/ThemeContext"

// ... (skipping shaders for brevity)
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"

// Custom shader material for advanced effects
const vertexShader = `
  uniform float time;
  uniform float intensity;
  varying vec2 vUv;
  varying vec3 vPosition;
  
  void main() {
    vUv = uv;
    vPosition = position;
    
    vec3 pos = position;
    pos.y += sin(pos.x * 10.0 + time) * 0.1 * intensity;
    pos.x += cos(pos.y * 8.0 + time * 1.5) * 0.05 * intensity;
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`

const fragmentShader = `
  uniform float time;
  uniform float intensity;
  uniform vec3 color1;
  uniform vec3 color2;
  varying vec2 vUv;
  varying vec3 vPosition;
  
  void main() {
    vec2 uv = vUv;
    
    // Create animated noise pattern
    float noise = sin(uv.x * 20.0 + time) * cos(uv.y * 15.0 + time * 0.8);
    noise += sin(uv.x * 35.0 - time * 2.0) * cos(uv.y * 25.0 + time * 1.2) * 0.5;
    
    // Mix colors based on noise and position
    vec3 color = mix(color1, color2, noise * 0.5 + 0.5);
    color = mix(color, vec3(1.0), pow(abs(noise), 2.0) * intensity);
    
    // Add glow effect
    float glow = 1.0 - length(uv - 0.5) * 2.0;
    glow = pow(glow, 2.0);
    
    gl_FragColor = vec4(color * glow, glow * 0.8);
  }
`

function ShaderPlane({
    position,
    color1 = "#ff5722",
    color2 = "#ffffff",
}: {
    position: [number, number, number]
    color1?: string
    color2?: string
}) {
    const mesh = useRef<THREE.Mesh>(null)

    const uniforms = useMemo(() => ({
        time: { value: 0 },
        intensity: { value: 1.0 },
        color1: { value: new THREE.Color(color1) },
        color2: { value: new THREE.Color(color2) },
    }), [color1, color2]);

    useFrame((state) => {
        if (mesh.current) {
            // eslint-disable-next-line react-hooks/immutability
            uniforms.time.value = state.clock.elapsedTime
            // eslint-disable-next-line react-hooks/immutability
            uniforms.intensity.value = 1.0 + Math.sin(state.clock.elapsedTime * 2) * 0.3
        }
    })

    return (
        <mesh ref={mesh} position={position}>
            <planeGeometry args={[2, 2, 32, 32]} />
            <shaderMaterial
                uniforms={uniforms}
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                transparent
                side={THREE.DoubleSide}
            />
        </mesh>
    )
}



const ShaderBackground = () => {
    const { theme } = useTheme();

    const colors = useMemo(() => {
        if (theme === 'dark') {
            return {
                base: '#0a0a0a',
                color1: '#1a0d00', // Very dark brown
                color2: '#000000'
            };
        } else {
            return {
                base: '#FFFDF1', // Cream
                color1: '#FFCE99', // Peach
                color2: '#FFFDF1'
            };
        }
    }, [theme]);

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: -1,
            pointerEvents: 'none',
            background: colors.base,
            transition: 'background 0.5s ease'
        }}>
            <Canvas camera={{ position: [0, 0, 1] }}>
                <ShaderPlane 
                    position={[0, 0, 0]} 
                    color1={colors.color1} 
                    color2={colors.color2} 
                />
            </Canvas>
        </div>
    );
};

export default ShaderBackground;
