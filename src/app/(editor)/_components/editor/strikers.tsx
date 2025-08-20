"use client";

import { useAssetStore } from "@/hooks/stores/use-asset-store";
import { useEffectsStore } from "@/hooks/stores/use-effects-store";
import { useThemeStore } from "@/hooks/stores/use-theme-store";
import type { Theme } from "@/lib/presets/index";
import Particles from "./particles";

const STRIKER_MAPPING = [
  { name: "green", position: 1 },
  { name: "red", position: 2 },
  { name: "yellow", position: 3 },
  { name: "blue", position: 4 },
  { name: "orange", position: 5 },
];

interface StrikerProps {
  state: "default" | "pressed" | "open";
  position: number;
  baseColor: string;
  headColor: string;
  ringColor: string;
  headLight: string;
}

const createMaskStyle = (imageUrl: string) => ({
  maskImage: `url(${imageUrl})`,
  WebkitMaskImage: `url(${imageUrl})`,
  maskRepeat: "no-repeat",
  maskSize: "contain",
  maskPosition: "center",
});

const Strikers = () => {
  const starPower = useEffectsStore((state) => state.starPower);
  const guitarColors = useThemeStore((state) => state.theme.guitar);
  const otherColors = useThemeStore((state) => state.theme.other);
  const cycleStrikerState = useAssetStore((state) => state.cycleStrikerState);
  const strikerState = useAssetStore((state) => state.strikerState);
  const strikerHitFlameOpen = useEffectsStore(
    (state) => state.strikerHitFlameOpen,
  );

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
    <>
      <div className="absolute bottom-[5%] left-[50%] flex -translate-x-1/2 justify-center gap-x-[0.35cqw]">
        {strikerData.map((striker) => (
          <Striker key={striker.position} state={strikerState} {...striker} />
        ))}
      </div>
      {strikerHitFlameOpen && (
        <>
          <div
            className="absolute bottom-[-37%] left-[50%] h-full w-[24.5cqw] -translate-x-1/2 scale-200 opacity-70 mix-blend-screen"
            style={{
              backgroundColor: starPower
                ? otherColors.striker_hit_flame_sp_active
                : otherColors.striker_hit_flame_open,
              ...createMaskStyle(`/sprites/guitar/spr_open_note_hit.png`),
            }}
          />
          <div
            className="absolute bottom-[-35.5%] left-[50%] h-full w-[19.6cqw] -translate-x-1/2 scale-x-200 scale-y-400 opacity-70 mix-blend-screen"
            style={{
              backgroundColor: starPower
                ? otherColors.striker_hit_flame_sp_active
                : otherColors.striker_hit_flame_open,
              ...createMaskStyle(`/sprites/guitar/spr_open_note_hitflame.png`),
            }}
          />
        </>
      )}
      <div
        title="Strikers"
        className="absolute right-[30.5%] bottom-[8%] z-10 h-[3.5cqw] w-[39cqw] cursor-pointer"
        onClick={cycleStrikerState}
      />
    </>
  );
};

const Striker = (props: StrikerProps) => {
  const STATE_COMPONENTS = {
    default: <StrikerDefault {...props} />,
    pressed: <StrikerPressed {...props} />,
    open: <StrikerOpen {...props} />,
  };

  return (
    <div className="relative aspect-square w-[7.5cqw]">
      {STATE_COMPONENTS[props.state]}
      {props.state !== "open" && (
        <>
          <img
            src={`/sprites/guitar/striker_Ring${props.position}.png`}
            alt=""
            className="absolute inset-0 h-full w-full object-contain"
          />
          <div
            className="absolute inset-0 mix-blend-multiply"
            style={{
              backgroundColor: props.ringColor,
              ...createMaskStyle(
                `/sprites/guitar/striker_Ring${props.position}.png`,
              ),
            }}
          />
        </>
      )}
    </div>
  );
};

const StrikerDefault = ({ position, baseColor, headColor }: StrikerProps) => (
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
        ...createMaskStyle(
          `/sprites/guitar/striker_GuitarUnderlay${position}.png`,
        ),
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
        ...createMaskStyle(`/sprites/guitar/striker_GuitarHead${position}.png`),
      }}
    />

    <div
      className="absolute inset-0 opacity-90 brightness-55"
      style={{
        backgroundColor: headColor,
        ...createMaskStyle(`/sprites/guitar/striker_HeadColor${position}.png`),
      }}
    />
  </>
);

const StrikerPressed = ({ position, baseColor, headLight }: StrikerProps) => (
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
        ...createMaskStyle(`/sprites/guitar/striker_down_${position}.png`),
      }}
    />

    <div
      className="absolute inset-0 mix-blend-screen"
      style={{
        backgroundColor: headLight,
        ...createMaskStyle(`/sprites/guitar/striker_DownGlow_${position}.png`),
      }}
    />
  </>
);

const StrikerOpen = ({ position, baseColor, ringColor }: StrikerProps) => {
  const starPower = useEffectsStore((state) => state.starPower);
  const otherColors = useThemeStore((state) => state.theme.other);
  const guitarColors = useThemeStore((state) => state.theme.guitar);
  const strikerHitFLame = useEffectsStore((state) => state.strikerHitFLame);
  const strikerHoldSpark = useEffectsStore((state) => state.strikerHoldSpark);
  const noteParticles = useEffectsStore((state) => state.noteParticles);
  const strikerHitFlameOpen = useEffectsStore(
    (state) => state.strikerHitFlameOpen,
  );

  return (
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
          ...createMaskStyle(
            `/sprites/guitar/striker_GuitarUnderlay${position}.png`,
          ),
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
          ...createMaskStyle(`/sprites/guitar/spr_targets_lift.png`),
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
          ...createMaskStyle(`/sprites/guitar/striker_Ring${position}.png`),
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
          ...createMaskStyle(
            `/sprites/guitar/striker_GuitarHead${position}.png`,
          ),
        }}
      />
      <div
        className="absolute bottom-[18%] left-0 h-full w-full mix-blend-screen brightness-110"
        style={{
          backgroundColor: strikerHitFlameOpen
            ? guitarColors.striker_head_light_open
            : ringColor,
          ...createMaskStyle(`/sprites/guitar/striker_HeadGlow${position}.png`),
        }}
      />
      {noteParticles && <Particles />}
      {strikerHoldSpark && (
        <>
          <div
            className="absolute bottom-[42%] left-[-3%] h-full w-full scale-150 opacity-50 blur-sm"
            style={{
              backgroundColor: starPower
                ? otherColors.striker_hold_spark_sp_active
                : otherColors.striker_hold_spark,
              ...createMaskStyle(`/sprites/other/heldflames-color_10.png`),
            }}
          />
          <img
            src={`/sprites/other/heldflames-overlay_10.png`}
            alt=""
            className="absolute bottom-[47%] left-[-4%] h-full w-full scale-170 object-contain blur-[0.01cqw]"
          />
        </>
      )}

      {strikerHitFLame && (
        <div
          className="absolute bottom-[50%] left-[-4%] h-full w-full scale-200 opacity-55 mix-blend-screen saturate-200"
          style={{
            backgroundColor: starPower
              ? otherColors.striker_hit_flame_sp_active
              : otherColors.striker_hit_flame,
            ...createMaskStyle(`/sprites/other/spr_hitflames_strip16_3.png`),
          }}
        />
      )}
    </>
  );
};

export default Strikers;
