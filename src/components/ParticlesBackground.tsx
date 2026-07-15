import React, { useEffect, useRef } from 'react';
import { loadFull } from 'tsparticles';
import { tsParticles } from 'tsparticles-engine';

const ParticlesBackground: React.FC = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initParticles = async () => {
      if (!particlesRef.current) return;

      await loadFull(tsParticles);

      await tsParticles.load('particles-container', {
        fullScreen: {
          enable: true,
          zIndex: -2,
        },
        background: {
          color: {
            value: 'transparent',
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: 'grab',
            },
            onClick: {
              enable: true,
              mode: 'push',
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 160,
              links: {
                opacity: 0.5,
              },
            },
            push: {
              quantity: 3,
            },
          },
        },
        particles: {
          color: {
            value: ['#818cf8', '#22d3ee', '#a78bfa', '#fbbf24', '#f0f2fc'],
          },
          links: {
            color: '#7c86c9',
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: true,
            speed: 1.1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 110,
          },
          opacity: {
            value: { min: 0.25, max: 0.7 },
            animation: {
              enable: true,
              speed: 0.8,
              minimumValue: 0.2,
              sync: false,
            },
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 1, max: 3.5 },
          },
        },
        detectRetina: true,
      });
    };

    initParticles();
  }, []);

  return (
    <div
      ref={particlesRef}
      id="particles-container"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -2,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    />
  );
};

export default ParticlesBackground;
