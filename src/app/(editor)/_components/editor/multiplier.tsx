"use client";

import { useState } from "react";
import type { Theme } from "@/lib/default-theme";
import { useThemeStore } from "@/hooks/stores/use-theme-store";
import { useEffectsStore } from "@/hooks/stores/use-effects-store";

const MULTIPLIER_DATA = [
  {
    level: 1,
    colorKey: "combo_one",
    glowColorKey: "combo_one_glow",
  },
  {
    level: 2,
    numberSprite: "/sprites/other/highway_Multiplier_Number2.png",
    glowSprite: "/sprites/other/highway_Multiplier_NumberGlow2.png",
    colorKey: "combo_two",
    glowColorKey: "combo_two_glow",
  },
  {
    level: 3,
    numberSprite: "/sprites/other/highway_Multiplier_Number3.png",
    glowSprite: "/sprites/other/highway_Multiplier_NumberGlow3.png",
    colorKey: "combo_three",
    glowColorKey: "combo_three_glow",
  },
  {
    level: 4,
    numberSprite: "/sprites/other/highway_Multiplier_Number4.png",
    glowSprite: "/sprites/other/highway_Multiplier_NumberGlow4.png",
    colorKey: "combo_four",
    glowColorKey: "combo_four_glow",
  },
];

const Multiplier = () => {
  const otherColors = useThemeStore((state) => state.theme.other);
  const starPower = useEffectsStore((state) => state.starPower);
  const [currentLevel, setCurrentLevel] = useState(4);

  const handleCycleMultiplier = () => {
    setCurrentLevel((prevLevel) => {
      if (prevLevel === 4) return 1;
      return prevLevel + 1;
    });
  };

  const levelData = MULTIPLIER_DATA.find((m) => m.level === currentLevel);

  if (!levelData) return null;

  const currentColor = otherColors[levelData.colorKey as keyof Theme["other"]];
  const currentGlowColor =
    otherColors[levelData.glowColorKey as keyof Theme["other"]];

  return (
    <>
      <img
        src="/sprites/other/spr_multiplier_circle_strip3_1.png"
        alt="Multiplier Background"
        className="absolute right-[28%] bottom-[25.55%]"
        style={{ width: "13%" }}
      />

      <img
        src="/sprites/other/spr_multiplier_circle_strip3_2.png"
        alt=""
        className="absolute right-[28%] bottom-[25.55%]"
        style={{ width: "13%" }}
      />

      {levelData.numberSprite && (
        <div className="absolute right-[33.1%] bottom-[34.8%] aspect-[48/56] w-[2.2cqw]">
          <img
            src={levelData.glowSprite}
            alt=""
            className="absolute inset-0 h-full w-full object-contain"
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: starPower
                ? otherColors.combo_sp_active_glow
                : currentGlowColor,
              maskImage: `url(${levelData.glowSprite})`,
              WebkitMaskImage: `url(${levelData.glowSprite})`,
              maskRepeat: "no-repeat",
              maskSize: "contain",
              maskPosition: "center",
            }}
          />
          <img
            src={levelData.numberSprite}
            alt=""
            className="absolute inset-0 h-full w-full object-contain opacity-45"
          />
          <div
            className="absolute inset-0 mix-blend-overlay"
            style={{
              backgroundColor: starPower
                ? otherColors.combo_sp_active
                : currentColor,
              maskImage: `url(${levelData.numberSprite})`,
              WebkitMaskImage: `url(${levelData.numberSprite})`,
              maskRepeat: "no-repeat",
              maskSize: "contain",
              maskPosition: "center",
            }}
          />
        </div>
      )}

      <img
        src="/sprites/other/spr_multiplier_circle_strip3_0.png"
        alt=""
        className="absolute right-[28%] bottom-[25.55%]"
        style={{ width: "13%" }}
      />

      <img
        src="/sprites/other/dotrow_0.png"
        alt="Dot Row Background"
        className="absolute right-[36.4%] bottom-[35.5%]"
        style={{ width: "4%" }}
      />
      <div className="absolute right-[36.9%] bottom-[36.7%] aspect-[57/84] w-[3cqw] rotate-1">
        <div
          className="absolute inset-0 mix-blend-multiply"
          style={{
            backgroundColor: starPower
              ? otherColors.combo_sp_active
              : currentColor,
            maskImage: "url(/sprites/other/dotrow_1.png)",
            WebkitMaskImage: "url(/sprites/other/dotrow_1.png)",
            maskRepeat: "no-repeat",
            maskSize: "contain",
            maskPosition: "center",
          }}
        />
      </div>
      <div
        title="Multiplier number"
        className="absolute right-[33%] bottom-[34%] z-10 size-[3cqw] cursor-pointer"
        onClick={handleCycleMultiplier}
      />
    </>
  );
};

export default Multiplier;
