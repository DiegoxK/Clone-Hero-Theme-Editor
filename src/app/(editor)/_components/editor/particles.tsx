import { useEffectsStore } from "@/hooks/stores/use-effects-store";
import { useThemeStore } from "@/hooks/stores/use-theme-store";

export default function Particles() {
  return (
    <>
      <Particle size={1.5} x={25} y={65} />
      <Particle size={1.6} x={60} y={75} />
      <Particle size={1.5} x={10} y={80} />
      <Particle size={1.5} x={5} y={100} />
      <Particle size={1.5} x={-10} y={90} />
      <Particle size={1.2} x={85} y={90} />
      <Particle size={1.2} x={50} y={100} />
      <Particle size={1.2} x={30} y={90} />
      <Particle size={1.1} x={45} y={80} />
    </>
  );
}

function Particle({ size, x, y }: { size: number; x: number; y: number }) {
  const otherColors = useThemeStore((state) => state.theme.other);
  const starPower = useEffectsStore((state) => state.starPower);

  return (
    <div
      className="absolute aspect-square"
      style={{ width: `${size}cqw`, bottom: `${y}%`, left: `${x}%` }}
    >
      <img
        src={`/sprites/other/note_Particle.png`}
        alt=""
        className="absolute inset-0 h-full w-full object-contain"
      />
      <div
        className="absolute inset-0 h-full w-full object-contain mix-blend-multiply brightness-110"
        style={{
          backgroundColor: starPower
            ? otherColors.striker_hit_particles_sp_active
            : otherColors.striker_hit_particles,
          maskImage: `url(/sprites/other/note_Particle.png)`,
          WebkitMaskImage: `url(/sprites/other/note_Particle.png)`,
          maskRepeat: "no-repeat",
          maskSize: "contain",
          maskPosition: "center",
        }}
      />
    </div>
  );
}
