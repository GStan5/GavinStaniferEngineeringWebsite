import React from 'react'


import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, Stars, Text, Billboard } from '@react-three/drei'

const DevStackVisual = () => {
  return (
    <Canvas className='canvas-visual'>
    
    
        <ambientLight intensity='0.5'/>
        <directionalLight intensity='1' postion={[-2, 5, 2]}/>
        <OrbitControls enableZoom={true}/>
        <Sphere args={[2.5, 25, 25]}>
            <Stars radius={100} depth={50} count={10000} factor={4} saturation={0} fade speed={1} />
            <meshPhongMaterial color="#fff" wireframe transparent opacity={0.5} />
        </Sphere>



    </Canvas>
  )
}

export default DevStackVisual