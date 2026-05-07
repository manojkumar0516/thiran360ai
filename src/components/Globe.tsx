import { useEffect, useRef, useState } from "react";
import GlobeGl from "react-globe.gl";
import { cn } from "@/lib/utils";

interface GlobeProps {
  className?: string;
}

export function Globe({ className }: GlobeProps) {
  const globeRef = useRef<any>();
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const onResize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    window.addEventListener('resize', onResize);
    onResize();

    // Auto-rotate
    if (globeRef.current) {
      globeRef.current.controls().autoRotate = true;
      globeRef.current.controls().autoRotateSpeed = 0.5;
      globeRef.current.controls().enableZoom = false;
      // Pre-set the camera position
      globeRef.current.pointOfView({ altitude: 1.8 });
    }

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);
  
  // Re-apply controls when globeRef is attached
  useEffect(() => {
    if (globeRef.current) {
      globeRef.current.controls().autoRotate = true;
      globeRef.current.controls().autoRotateSpeed = 1;
      globeRef.current.controls().enableZoom = false;
    }
  }, [globeRef.current]);

  return (
    <div ref={containerRef} className={cn("relative w-full aspect-square max-w-[800px] mx-auto flex items-center justify-center fade-in-globe", className)}>
      {dimensions.width > 0 && (
        <GlobeGl
          ref={globeRef}
          width={dimensions.width}
          height={dimensions.width} // Keep it square based on width
          globeImageUrl="https://unpkg.com/three-globe/example/img/earth-night.jpg"
          bumpImageUrl="https://unpkg.com/three-globe/example/img/earth-topology.png"
          backgroundImageUrl=""
          backgroundColor="rgba(0,0,0,0)"
          showAtmosphere={true}
          atmosphereColor="#2563eb"
          atmosphereAltitude={0.15}
        />
      )}
      <style>{`
        .fade-in-globe {
          animation: fadeInGlobe 2s ease-in forwards;
          opacity: 0;
        }
        @keyframes fadeInGlobe {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
