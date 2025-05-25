// src/components/Particulas.js
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function Particulas() {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1 // coloca atrás de tudo
        },
        particles: {
          number: {
            value: 50
          },
          move: {
            direction: "bottom",
            enable: true,
            speed: 2
          },
          opacity: {
            value: 0.7
          },
          shape: {
            type: "circle" // pode ser "image" para usar folhas, por exemplo
          },
          size: {
            value: 4
          }
        },
        background: {
          color: "#00000000" // transparente
        }
      }}
    />
  );
}
