"use client";

import { useThemeStore } from "@/hooks/use-theme-store";
import type { Theme } from "@/lib/default-theme";

const STRIKER_MAPPING = [
  { name: "green", position: 1 },
  { name: "red", position: 2 },
  { name: "yellow", position: 3 },
  { name: "blue", position: 4 },
  { name: "orange", position: 5 },
];

const Strikers = () => {
  const guitarColors = useThemeStore((state) => state.theme.guitar);

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
          state="open"
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
  state: "default" | "pressed" | "open";
  position: number;
  baseColor: string;
  headColor: string;
  ringColor: string;
  headLight: string;
}

const Striker = ({
  state,
  position,
  baseColor,
  headColor,
  ringColor,
  headLight,
}: StrikerProps) => {
  const otherColors = useThemeStore((state) => state.theme.other);

  return (
    <div className="relative aspect-square w-[7.5cqw]">
      {state === "pressed" ? (
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
      ) : state === "open" ? (
        <>
          <img
            src={`/sprites/guitar/striker_GuitarUnderlay${position}.png`}
            alt=""
            className="absolute inset-0 h-full w-full object-contain"
          />
          <div
            className="absolute inset-0 mix-blend-multiply"
            style={{
              backgroundColor: baseColor,
              maskImage: `url(/sprites/guitar/striker_GuitarUnderlay${position}.png)`,
              WebkitMaskImage: `url(/sprites/guitar/striker_GuitarUnderlay${position}.png)`,
              maskRepeat: "no-repeat",
              maskSize: "contain",
              maskPosition: "center",
            }}
          />
          <img
            src={`/sprites/guitar/spr_targets_lift.png`}
            alt=""
            className="absolute bottom-[-7%] left-[25%] h-full w-[50%] scale-y-200 object-contain"
          />
          <div
            className="absolute bottom-[-7%] left-[25%] h-full w-[50%] scale-y-200 mix-blend-multiply"
            style={{
              backgroundColor: baseColor,
              maskImage: `url(/sprites/guitar/spr_targets_lift.png)`,
              WebkitMaskImage: `url(/sprites/guitar/spr_targets_lift.png)`,
              maskRepeat: "no-repeat",
              maskSize: "contain",
              maskPosition: "center",
            }}
          />
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
          <img
            src={`/sprites/guitar/striker_GuitarHead${position}.png`}
            alt=""
            className="absolute bottom-[18%] left-0 h-full w-full object-contain"
          />
          <div
            className="absolute bottom-[18%] left-0 h-full w-full mix-blend-multiply"
            style={{
              backgroundColor: baseColor,
              maskImage: `url(/sprites/guitar/striker_GuitarHead${position}.png)`,
              WebkitMaskImage: `url(/sprites/guitar/striker_GuitarHead${position}.png)`,
              maskRepeat: "no-repeat",
              maskSize: "contain",
              maskPosition: "center",
            }}
          />
          <div
            className="absolute bottom-[18%] left-0 h-full w-full mix-blend-screen brightness-110"
            style={{
              backgroundColor: ringColor,
              maskImage: `url(/sprites/guitar/striker_HeadGlow${position}.png)`,
              WebkitMaskImage: `url(/sprites/guitar/striker_HeadGlow${position}.png)`,
              maskRepeat: "no-repeat",
              maskSize: "contain",
              maskPosition: "center",
            }}
          />
          <img
            src={`/sprites/other/spr_hitflames_strip16_3.png`}
            alt=""
            className="absolute bottom-[50%] left-0 h-full w-full scale-200 object-contain opacity-35"
          />
          <div
            className="absolute bottom-[50%] left-0 h-full w-full scale-200 opacity-85 mix-blend-overlay brightness-105"
            style={{
              backgroundColor: otherColors.striker_hit_flame,
              maskImage: `url(/sprites/other/spr_hitflames_strip16_3.png)`,
              WebkitMaskImage: `url(/sprites/other/spr_hitflames_strip16_3.png)`,
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
          <div
            className="absolute inset-0 mix-blend-multiply"
            style={{
              backgroundColor: baseColor,
              maskImage: `url(/sprites/guitar/striker_GuitarUnderlay${position}.png)`,
              WebkitMaskImage: `url(/sprites/guitar/striker_GuitarUnderlay${position}.png)`,
              maskRepeat: "no-repeat",
              maskSize: "contain",
              maskPosition: "center",
            }}
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
      {state !== "open" && (
        <>
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
        </>
      )}
    </div>
  );
};

export default Strikers;
