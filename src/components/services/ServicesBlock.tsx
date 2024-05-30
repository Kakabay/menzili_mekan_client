import React from 'react';
import ServicesCard from './ServicesCard';

const ServicesBock = () => {
  return (
    <div className="grid grid-cols-3 gap-[32px]">
      <ServicesCard
        title="Animation Production"
        text="Real-time animation production pipeline. Animost Studio offers full animation production services at 2X ~ 4X speed comparing to traditional workflow."
      />
      <ServicesCard
        title="3D Assets Creation"
        text="Animost Studio can assist you at every stage of 3D asset creation, from single asset work to full level and world creation, film or game-optimized assets."
      />
      <ServicesCard
        title="Motion Capture & Previz"
        text="Re60+ Optitrack cameras plus Faceware HMCs. One of largest motion capture facilities in South-East Asia ready for your mocap-related needs."
      />
    </div>
  );
};

export default ServicesBock;
