import React, { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import gsap from 'gsap';

export function Model(props) {
  const { nodes, materials } = useGLTF('/model/iphone_quran.glb')
  const modelRef = useRef();

  useEffect(() => {
    if (modelRef.current) {
      gsap.to(modelRef.current.rotation, { duration: 2, y: Math.PI * 2 });
    }
  }, []);
  return (
    <group ref={modelRef} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.object_A_0.geometry}
        material={materials.material}
        position={[-0.043, 0.807, 0.045]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.object001_alu_0.geometry}
        material={materials.material_1}
        position={[-0.051, 0, 0.045]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.object002_fash_0.geometry}
        material={materials.fash}
        position={[11.649, 69.217, -1.801]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.object003_gryl_0.geometry}
        material={materials.gryl}
        position={[4.223, 59.37, 0.508]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.object004_lense_0.geometry}
        material={materials.lense}
        position={[17.268, 61.038, 0.275]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.object005_dchr_0.geometry}
        material={materials.dchr}
        position={[18.843, 58.086, -3.354]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.object006_bezel_0.geometry}
        material={materials.bezel}
        position={[-0.051, -0.004, 3.486]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.object007_but_0.geometry}
        material={materials.material_7}
        position={[0, 36.089, 0.104]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.object008_ant_0.geometry}
        material={materials.material_8}
        position={[-0.051, -0.004, 0.045]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.object009_chr_0.geometry}
        material={materials.material_9}
        position={[18.842, 58.085, -3.111]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.object010_scr_0.geometry}
        material={materials.material_10}
        position={[-0.051, -0.004, 3.858]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.object011_glsl_0.geometry}
        material={materials.glsl}
        position={[18.842, 58.085, -3.646]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.object012_glass_0.geometry}
        material={materials.glass}
        position={[-0.051, -0.004, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.object013_misc1_0.geometry}
        material={materials.misc1}
        position={[18.835, 59.038, 0.028]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.object014_logo_0.geometry}
        material={materials.logo}
        position={[0.504, 6.137, -3.081]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
    </group>
  )
}

useGLTF.preload('/model/iphone_quran.glb')