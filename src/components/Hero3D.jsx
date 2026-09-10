import { useMemo, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

function canWebGL() {
  try {
    const c = document.createElement('canvas')
    return !!(c.getContext('webgl2') || c.getContext('webgl'))
  } catch {
    return false
  }
}

function Core() {
  const mesh = useRef(null)
  const ring = useRef(null)
  useFrame((_, dt) => {
    if (mesh.current) {
      mesh.current.rotation.x += dt * 0.12
      mesh.current.rotation.y += dt * 0.18
    }
    if (ring.current) ring.current.rotation.z -= dt * 0.15
  })
  const dots = useMemo(() => {
    const g = new THREE.BufferGeometry()
    const n = 220
    const pos = new Float32Array(n * 3)
    for (let i = 0; i < n; i++) {
      const r = 2.2 + Math.random() * 2.4
      const t = Math.random() * Math.PI * 2
      const p = Math.acos(2 * Math.random() - 1)
      pos[i * 3] = r * Math.sin(p) * Math.cos(t)
      pos[i * 3 + 1] = r * Math.sin(p) * Math.sin(t)
      pos[i * 3 + 2] = r * Math.cos(p)
    }
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    return g
  }, [])

  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.9}>
      <mesh ref={mesh}>
        <icosahedronGeometry args={[1.25, 1]} />
        <meshBasicMaterial color="#22d3ee" wireframe transparent opacity={0.5} />
      </mesh>
      <mesh ref={ring} rotation={[Math.PI / 2.4, 0, 0]}>
        <torusGeometry args={[2.1, 0.012, 8, 120]} />
        <meshBasicMaterial color="#a78bfa" transparent opacity={0.65} />
      </mesh>
      <points geometry={dots}>
        <pointsMaterial color="#7dd3fc" size={0.035} transparent opacity={0.8} sizeAttenuation />
      </points>
    </Float>
  )
}

export default function Hero3D() {
  const [ok] = useState(() => canWebGL())
  if (!ok) return null
  return (
    <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 hidden w-[46%] opacity-70 md:block lg:opacity-90">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 6], fov: 50 }} gl={{ antialias: true, alpha: true, powerPreference: 'low-power' }}>
        <Core />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent" />
    </div>
  )
}
