import type { Theme } from "@/lib/default-theme";

type StrikersProps = {
  guitarColors: Theme["guitar"];
  pressed: boolean;
};

const STRIKER_MAPPING = [
  { name: "green", position: 1 },
  { name: "red", position: 2 },
  { name: "yellow", position: 3 },
  { name: "blue", position: 4 },
  { name: "orange", position: 5 },
];

const Strikers = ({ guitarColors, pressed }: StrikersProps) => {
  const strikerData = STRIKER_MAPPING.map((striker) => {
    const colorName = striker.name;

    const headCoverColorKey =
      `striker_head_cover_${colorName}` as keyof Theme["guitar"];
    const headColorKey = `striker_cover_${colorName}` as keyof Theme["guitar"];
    const headLightKey =
      `striker_head_light_${colorName}` as keyof Theme["guitar"];
    const baseColorKey = `striker_base_${colorName}` as keyof Theme["guitar"];

    return {
      position: striker.position,
      baseColor: guitarColors[baseColorKey],
      headColor: guitarColors[headCoverColorKey],
      headLight: guitarColors[headLightKey],
      ringColor: guitarColors[headColorKey],
    };
  });

  return (
    <div className="absolute bottom-[5%] left-[50%] flex -translate-x-1/2 justify-center gap-x-[0.35cqw]">
      {strikerData.map((striker) => (
        <Striker
          key={striker.position}
          pressed={pressed}
          baseColor={striker.baseColor}
          headColor={striker.headColor}
          position={striker.position}
          ringColor={striker.ringColor}
          headLight={striker.headLight}
        />
      ))}
    </div>
  );
};

interface StrikerProps {
  pressed: boolean;
  position: number;
  baseColor: string;
  headColor: string;
  ringColor: string;
  headLight: string;
}

const Striker = ({
  pressed,
  position,
  baseColor,
  headColor,
  ringColor,
  headLight,
}: StrikerProps) => {
  return (
    <div className="relative aspect-square w-[7.5cqw]">
      {pressed ? (
        <>
          <img
            src={`/sprites/guitar/striker_down_${position}.png`}
            alt=""
            className="absolute inset-0 h-full w-full object-contain"
          />
          <div
            className="absolute inset-0 mix-blend-multiply"
            style={{
              backgroundColor: baseColor,
              maskImage: `url(/sprites/guitar/striker_down_${position}.png)`,
              WebkitMaskImage: `url(/sprites/guitar/striker_down_${position}.png)`,
              maskRepeat: "no-repeat",
              maskSize: "contain",
              maskPosition: "center",
            }}
          />
          <div
            className="absolute inset-0 mix-blend-screen"
            style={{
              backgroundColor: headLight,
              maskImage: `url(/sprites/guitar/striker_DownGlow_${position}.png)`,
              WebkitMaskImage: `url(/sprites/guitar/striker_DownGlow_${position}.png)`,
              maskRepeat: "no-repeat",
              maskSize: "contain",
              maskPosition: "center",
            }}
          />
        </>
      ) : (
        <>
          <img
            src={`/sprites/guitar/striker_GuitarUnderlay${position}.png`}
            alt=""
            className="absolute inset-0 h-full w-full object-contain"
          />
          <img
            src={`/sprites/guitar/striker_GuitarHead${position}.png`}
            alt=""
            className="absolute inset-0 h-full w-full object-contain"
          />
          <div
            className="absolute inset-0 mix-blend-multiply"
            style={{
              backgroundColor: baseColor,
              maskImage: `url(/sprites/guitar/striker_GuitarHead${position}.png)`,
              WebkitMaskImage: `url(/sprites/guitar/striker_GuitarHead${position}.png)`,
              maskRepeat: "no-repeat",
              maskSize: "contain",
              maskPosition: "center",
            }}
          />
          {/* <img
            src={`/sprites/guitar/striker_HeadColor${position}.png`}
            alt=""
            className="absolute inset-0 h-full w-full object-contain"
          /> */}

          <div
            className="absolute inset-0 opacity-90 brightness-55"
            style={{
              backgroundColor: headColor,
              maskImage: `url(/sprites/guitar/striker_HeadColor${position}.png)`,
              WebkitMaskImage: `url(/sprites/guitar/striker_HeadColor${position}.png)`,
              maskRepeat: "no-repeat",
              maskSize: "contain",
              maskPosition: "center",
            }}
          />
        </>
      )}
      <img
        src={`/sprites/guitar/striker_Ring${position}.png`}
        alt=""
        className="absolute inset-0 h-full w-full object-contain"
      />
      <div
        className="absolute inset-0 mix-blend-multiply"
        style={{
          backgroundColor: ringColor,
          maskImage: `url(/sprites/guitar/striker_Ring${position}.png)`,
          WebkitMaskImage: `url(/sprites/guitar/striker_Ring${position}.png)`,
          maskRepeat: "no-repeat",
          maskSize: "contain",
          maskPosition: "center",
        }}
      />
    </div>
  );
};

export default Strikers;
