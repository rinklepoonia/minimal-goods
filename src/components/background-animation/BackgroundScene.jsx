'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useRef, useEffect, useMemo, useState } from 'react'
import * as THREE from 'three'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Organic Blob Shader Material
const blobVertexShader = `
  uniform float time;
  uniform float morphProgress;
  varying vec2 vUv;
  varying vec3 vNormal;
  
  void main() {
    vUv = uv;
    vNormal = normal;
    
    vec3 pos = position;
    
    // Organic floating animation
    float wave1 = sin(pos.x * 2.0 + time * 0.5) * 0.1;
    float wave2 = cos(pos.y * 2.0 + time * 0.3) * 0.1;
    float wave3 = sin(pos.z * 2.0 + time * 0.4) * 0.1;
    
    pos += normal * (wave1 + wave2 + wave3) * (1.0 - morphProgress);
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`

const blobFragmentShader = `
  uniform vec3 color;
  uniform float opacity;
  varying vec2 vUv;
  varying vec3 vNormal;
  
  void main() {
    float fresnel = pow(1.0 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
    vec3 glowColor = color + fresnel * 0.5;
    gl_FragColor = vec4(glowColor, opacity);
  }
`

// Organic Blob Component
function OrganicBlob({ position, color, index, morphProgress }) {
    const meshRef = useRef()
    const materialRef = useRef()

    useFrame((state) => {
        if (materialRef.current) {
            materialRef.current.uniforms.time.value = state.clock.elapsedTime
            materialRef.current.uniforms.morphProgress.value = morphProgress
        }

        if (meshRef.current) {
            // Smooth floating animation
            meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5 + index) * 0.3
            meshRef.current.position.x = position[0] + Math.cos(state.clock.elapsedTime * 0.3 + index) * 0.2
            meshRef.current.rotation.x += 0.001
            meshRef.current.rotation.y += 0.002

            {/* Fade out during morph - disappear completely after burst */ }
            meshRef.current.visible = morphProgress < 0.5
            if (materialRef.current) {
                materialRef.current.uniforms.opacity.value = Math.max(0, 1.0 - morphProgress * 2)
            }
        }
    })

    return (
        <mesh ref={meshRef} position={position}>
            <icosahedronGeometry args={[1.5, 32]} />
            <shaderMaterial
                ref={materialRef}
                vertexShader={blobVertexShader}
                fragmentShader={blobFragmentShader}
                uniforms={{
                    time: { value: 0 },
                    color: { value: new THREE.Color(color) },
                    opacity: { value: 1.0 },
                    morphProgress: { value: 0 }
                }}
                transparent
                side={THREE.DoubleSide}
            />
        </mesh>
    )
}

// Particle System with Instanced Mesh
function ParticleSystem({ morphProgress, blobPositions, blobColors }) {
    const meshRef = useRef()
    const particleCount = 5000
    const dummy = useMemo(() => new THREE.Object3D(), [])

    const particleData = useMemo(() => {
        const data = []
        for (let i = 0; i < particleCount; i++) {
            const blobIndex = Math.floor(Math.random() * 3)
            const blobPos = blobPositions[blobIndex]

            // Random explosion direction - MORE DRAMATIC
            const explosionAngle = Math.random() * Math.PI * 2
            const explosionPower = Math.random() * 25 + 15 // Increased from 15+10
            const explosionHeight = (Math.random() - 0.5) * 30 // Increased from 20

            data.push({
                blobIndex,
                originalPos: new THREE.Vector3(
                    blobPos[0] + (Math.random() - 0.5) * 3,
                    blobPos[1] + (Math.random() - 0.5) * 3,
                    blobPos[2] + (Math.random() - 0.5) * 3
                ),
                scatteredPos: new THREE.Vector3(
                    blobPos[0] + Math.cos(explosionAngle) * explosionPower,
                    blobPos[1] + explosionHeight,
                    blobPos[2] + Math.sin(explosionAngle) * explosionPower
                ),
                randomOffset: new THREE.Vector3(
                    (Math.random() - 0.5) * 5,
                    (Math.random() - 0.5) * 5,
                    (Math.random() - 0.5) * 3
                ),
                rotationSpeed: Math.random() * 0.1,
                scale: Math.random() * 0.06 + 0.03,
                color: new THREE.Color(blobColors[blobIndex])
            })
        }
        return data
    }, [blobPositions, blobColors])

    useFrame((state) => {
        if (!meshRef.current) return

        const time = state.clock.elapsedTime

        for (let i = 0; i < particleCount; i++) {
            const particle = particleData[i]

            // Interpolate between blob position and scattered position
            let pos
            if (morphProgress < 1) {
                // Bursting phase
                const easeOut = 1 - Math.pow(1 - morphProgress, 3)
                pos = new THREE.Vector3().lerpVectors(particle.originalPos, particle.scatteredPos, easeOut)
            } else {
                // Stay scattered and keep floating
                pos = particle.scatteredPos.clone()
            }

            // Continuous floating motion when scattered
            if (morphProgress > 0.1) {
                const floatIntensity = Math.min(morphProgress, 1)
                pos.x += Math.sin(time * particle.rotationSpeed + i) * particle.randomOffset.x * floatIntensity
                pos.y += Math.cos(time * particle.rotationSpeed * 0.7 + i) * particle.randomOffset.y * floatIntensity
                pos.z += Math.sin(time * particle.rotationSpeed * 0.5 + i) * particle.randomOffset.z * floatIntensity
            }

            dummy.position.copy(pos)

            // Scale particles with burst effect
            let scale = particle.scale
            if (morphProgress < 0.1) {
                scale *= morphProgress * 10
            }
            dummy.scale.set(scale, scale, scale)

            // Random rotation
            dummy.rotation.x = time * particle.rotationSpeed + i
            dummy.rotation.y = time * particle.rotationSpeed * 0.7 + i
            dummy.rotation.z = time * particle.rotationSpeed * 0.5 + i

            dummy.updateMatrix()
            meshRef.current.setMatrixAt(i, dummy.matrix)
            meshRef.current.setColorAt(i, particle.color)
        }

        meshRef.current.instanceMatrix.needsUpdate = true
        if (meshRef.current.instanceColor) {
            meshRef.current.instanceColor.needsUpdate = true
        }

        // Visible once burst starts
        meshRef.current.visible = morphProgress > 0.01
    })

    return (
        <instancedMesh ref={meshRef} args={[null, null, particleCount]}>
            <sphereGeometry args={[1, 8, 8]} />
            <meshBasicMaterial toneMapped={false} />
        </instancedMesh>
    )
}

// Ambient Particles (stars)
function AmbientParticles() {
    const pointsRef = useRef()
    const particleCount = 300

    const positions = useMemo(() => {
        const pos = new Float32Array(particleCount * 3)
        for (let i = 0; i < particleCount; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 40
            pos[i * 3 + 1] = (Math.random() - 0.5) * 40
            pos[i * 3 + 2] = (Math.random() - 0.5) * 20
        }
        return pos
    }, [])

    useFrame((state) => {
        if (pointsRef.current) {
            pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02
        }
    })

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particleCount}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.05}
                color="#ffffff"
                transparent
                opacity={0.4}
                sizeAttenuation
            />
        </points>
    )
}

// Main Scene
function Scene({ scrollProgress, mousePosition }) {
    const groupRef = useRef()
    const [morphProgress, setMorphProgress] = useState(0)

    const blobPositions = [
        [-3, 0, -2],
        [3, 0, -2],
        [0, 2.5, -3]
    ]

    const blobColors = ['#6366f1', '#ec4899', '#8b5cf6']

    useEffect(() => {
        // Burst happens at 10-30% scroll, then stays scattered forever
        if (scrollProgress < 0.1) {
            setMorphProgress(0) // Blobs intact
        } else if (scrollProgress >= 0.1 && scrollProgress < 0.3) {
            // Bursting phase
            const progress = (scrollProgress - 0.1) / 0.2
            setMorphProgress(progress)
        } else {
            // Stay scattered after 30%
            setMorphProgress(1)
        }
    }, [scrollProgress])

    useFrame((state) => {
        if (groupRef.current) {
            // Subtle mouse parallax
            groupRef.current.rotation.y = mousePosition.x * 0.1
            groupRef.current.rotation.x = mousePosition.y * 0.1

            // Camera depth movement on scroll
            state.camera.position.z = 8 - scrollProgress * 2
        }
    })

    return (
        <group ref={groupRef}>
            {/* Organic Blobs */}
            {blobPositions.map((pos, i) => (
                <OrganicBlob
                    key={i}
                    position={pos}
                    color={blobColors[i]}
                    index={i}
                    morphProgress={morphProgress}
                />
            ))}

            {/* Particle System */}
            <ParticleSystem
                morphProgress={morphProgress}
                blobPositions={blobPositions}
                blobColors={blobColors}
            />

            {/* Ambient Particles */}
            <AmbientParticles />

            {/* Lighting */}
            <ambientLight intensity={0.3} />
            <pointLight position={[-5, 5, 5]} intensity={1} color="#6366f1" />
            <pointLight position={[5, -5, 5]} intensity={1} color="#ec4899" />
            <pointLight position={[0, 0, 10]} intensity={0.5} color="#8b5cf6" />
        </group>
    )
}

// Main Background Scene Component
export default function BackgroundScene() {
    const mousePosition = useRef({ x: 0, y: 0 })
    const scrollProgress = useRef(0)

    useEffect(() => {
        const handleMouseMove = (e) => {
            mousePosition.current = {
                x: (e.clientX / window.innerWidth) * 2 - 1,
                y: -(e.clientY / window.innerHeight) * 2 + 1
            }
        }

        const handleScroll = () => {
            scrollProgress.current = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)
        }

        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div className="fixed inset-0 -z-10">
            {/* Dark Cinematic Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/50 to-slate-900" />

            {/* Radial Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/30 via-transparent to-transparent" />

            {/* Scroll Progress Debug Indicator */}
            <div className="fixed top-4 right-4 z-50 bg-black/50 text-white px-4 py-2 rounded-lg font-mono text-sm">
                Scroll: {Math.round(scrollProgress.current * 100)}%
                <div className="text-xs mt-1 text-purple-300">
                    Burst at 10-30% • Stays scattered after
                </div>
            </div>

            {/* Three.js Canvas */}
            <Canvas
                camera={{ position: [0, 0, 8], fov: 50 }}
                className="absolute inset-0"
                gl={{ antialias: true, alpha: true }}
            >
                <Scene
                    mousePosition={mousePosition.current}
                    scrollProgress={scrollProgress.current}
                />

                {/* Post-processing Effects */}
                <EffectComposer>
                    <Bloom
                        intensity={1.5}
                        luminanceThreshold={0.2}
                        luminanceSmoothing={0.9}
                        height={300}
                    />
                </EffectComposer>
            </Canvas>

            {/* Noise Grain Overlay */}
            <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />
            </div>
        </div>
    )
}
