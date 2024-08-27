import { Html, OrbitControls, } from "@react-three/drei";
import React, { Suspense,  } from "react";
import { Model } from "./iphone3d";
import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";
import visual from "../assets/png/Visuals.png"


const Iphone3dView = () => {

    const [cameraPosition, setCameraPosition] = useState([0, 0, 100]);

  useEffect(() => {
    
    const updateCameraPosition = () => {
     
      const width = window.innerWidth;
      if(width<320){
        setCameraPosition([0,0,180])
      }
      if(width<480){
        setCameraPosition([0,0,250])
        
      }
      else if(width<720){
        setCameraPosition([0,0,300])
        
      }
      else if(width<1024){
        setCameraPosition([0,0,200])
      }
      else if(width<2160){
        setCameraPosition([0,0,220])
      }
      else if(width<3200){
        setCameraPosition([0,0,350])
    }
      else if(width<4320){
        setCameraPosition([0,0,500])
      }
      else if(width<8320){
        setCameraPosition([0,0,600])
      }
      
    
    };

    updateCameraPosition(); 
    window.addEventListener('resize', updateCameraPosition);

    return () => window.removeEventListener('resize', updateCameraPosition);
  }, []);
  return (
    <div className="canvas-container" 
    style={{
      backgroundImage: `url(${visual})`,
      backgroundSize: "contain",
      backgroundPosition: "center",
      backgroundRepeat:"no-repeat"
    }}
    >
      <Canvas 
        camera={{
          fov: 45,
          position: cameraPosition,
        }}
        
      >
       
        <ambientLight intensity={4} />
        <directionalLight intensity={6} position={[2, 1, 0]} />
        <directionalLight intensity={6} position={[2, 1, -10]} />
        <OrbitControls enableZoom={false}
        />
        <Suspense
          fallback={
            <Html>
              <div>Loading..........</div>
            </Html>
          }
        >
          <Model/>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Iphone3dView;
