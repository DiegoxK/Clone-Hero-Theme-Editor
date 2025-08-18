"use client";

import { useEffectsStore } from "@/hooks/stores/use-effects-store";
import { useThemeStore } from "@/hooks/stores/use-theme-store";
import { useState } from "react";

export default function OpenNote() {
  const [isSp_Phrase, setIsSp_Phrase] = useState(false);

  const guitarColors = useThemeStore((state) => state.theme.guitar);
  const starPower = useEffectsStore((state) => state.starPower);

  const cycleNoteState = () => {
    setIsSp_Phrase((prev) => !prev);
  };

  return (
    <>
      <div className="absolute bottom-[33.5%] left-[50%] aspect-[334/64] w-[24cqw] -translate-x-1/2">
        {isSp_Phrase ? (
          <>
            <img
              src="/sprites/guitar/guitarNote_Open_Base.png"
              alt=""
              className="absolute inset-0 h-full w-full object-contain"
            />
            <div
              className="absolute inset-0 mix-blend-multiply brightness-85"
              style={{
                backgroundColor: guitarColors.note_sp_phrase,
                maskImage: "url(/sprites/guitar/guitarNote_Open_Base.png)",
                WebkitMaskImage:
                  "url(/sprites/guitar/guitarNote_Open_Base.png)",
                maskRepeat: "no-repeat",
                maskSize: "contain",
                maskPosition: "center",
              }}
            />

            <div
              className="absolute inset-0 mix-blend-overlay brightness-75"
              style={{
                backgroundColor: starPower
                  ? guitarColors.note_sp_phrase
                  : guitarColors.note_open,
                maskImage: "url(/sprites/guitar/guitarNote_Open_Body1.png)",
                WebkitMaskImage:
                  "url(/sprites/guitar/guitarNote_Open_Body1.png)",
                maskRepeat: "no-repeat",
                maskSize: "contain",
                maskPosition: "center",
              }}
            />

            <div
              className="absolute inset-0 opacity-80 brightness-90"
              style={{
                backgroundColor: guitarColors.note_sp_phrase,
                maskImage:
                  "url(/sprites/guitar/guitarNote_Open_SPHighlight9.png)",
                WebkitMaskImage:
                  "url(/sprites/guitar/guitarNote_Open_SPHighlight9.png)",
                maskRepeat: "no-repeat",
                maskSize: "contain",
                maskPosition: "center",
              }}
            />
          </>
        ) : (
          <>
            <img
              src="/sprites/guitar/guitarNote_Open_Base.png"
              alt=""
              className="absolute inset-0 h-full w-full object-contain"
            />
            <div
              className="absolute inset-0 mix-blend-multiply brightness-65 saturate-90"
              style={{
                backgroundColor: starPower
                  ? guitarColors.note_sp_active
                  : guitarColors.note_open,
                maskImage: "url(/sprites/guitar/guitarNote_Open_Body1.png)",
                WebkitMaskImage:
                  "url(/sprites/guitar/guitarNote_Open_Body1.png)",
                maskRepeat: "no-repeat",
                maskSize: "contain",
                maskPosition: "center",
              }}
            />
            <img
              src="/sprites/guitar/highlight_5.png"
              alt=""
              className="absolute inset-0 h-full w-full object-contain"
            />
            <div
              className="absolute inset-0 mix-blend-multiply"
              style={{
                backgroundColor: guitarColors.note_anim_open,
                maskImage: "url(/sprites/guitar/highlight_5.png)",
                WebkitMaskImage: "url(/sprites/guitar/highlight_5.png)",
                maskRepeat: "no-repeat",
                maskSize: "contain",
                maskPosition: "center",
              }}
            />
          </>
        )}
      </div>
      <div
        title="Notes"
        className="absolute right-[25%] bottom-[34%] z-10 h-[2.8cqw] w-[25cqw] -translate-x-1/2 cursor-pointer"
        onClick={cycleNoteState}
      />
    </>
  );
}
