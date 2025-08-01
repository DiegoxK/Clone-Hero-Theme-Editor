"use client";

import Image from "next/image";
import { useState } from "react";

type NoteColors = {
  note_green: string;
  note_anim_green: string;
};

export default function Notes() {
  const [colors, setColors] = useState<NoteColors>({
    note_green: "#00FF00",
    note_anim_green: "#00FF00",
  });

  const handleColorChange = (colorName: keyof NoteColors, newColor: string) => {
    setColors((prevColors) => ({
      ...prevColors,
      [colorName]: newColor,
    }));
  };

  return (
    <>
      <div className="absolute bottom-[9%] left-[38.8%] -translate-x-1/2">
        <div className="relative h-20 w-20">
          {/* Layer 1: Base Strum Image */}
          <Image
            src="/sprites/guitar/guitarNote_Base_Strum.png"
            alt="Note Base"
            fill={true}
            className="object-contain"
          />

          {/* Layer 2: The visible grayscale note body */}
          <Image
            src="/sprites/guitar/guitarNote_Body_Strum.png"
            alt="Note Body"
            fill={true}
            className="object-contain"
          />

          {/* Layer 3: The MASKED and BLENDED color overlay for the body */}
          <div
            className="absolute inset-0 mix-blend-multiply"
            style={{
              backgroundColor: colors.note_green,
              maskImage: "url(/sprites/guitar/guitarNote_Body_Strum.png)",
              WebkitMaskImage: "url(/sprites/guitar/guitarNote_Body_Strum.png)",
              maskRepeat: "no-repeat",
              maskSize: "contain",
              maskPosition: "center",
            }}
          ></div>

          <Image
            src="/sprites/guitar/guitarNote_Strum_Shine12.png"
            alt="Note Shine"
            fill={true}
            className="object-contain"
            style={{ top: "-19%" }}
          />

          <div
            className="absolute inset-0 mix-blend-multiply"
            style={{
              top: "-38%",
              backgroundColor: colors.note_anim_green,
              maskImage: "url(/sprites/guitar/guitarNote_Strum_Shine12.png)",
              WebkitMaskImage:
                "url(/sprites/guitar/guitarNote_Strum_Shine12.png)",
              maskRepeat: "no-repeat",
              maskSize: "contain",
              maskPosition: "center",
            }}
          ></div>
        </div>
      </div>
      <div className="absolute bottom-[9%] left-[46.8%] -translate-x-1/2">
        <div className="relative h-20 w-20">
          {/* Layer 1: Base Strum Image */}
          <Image
            src="/sprites/guitar/guitarNote_Base_Strum.png"
            alt="Note Base"
            fill={true}
            className="object-contain"
          />

          {/* Layer 2: The visible grayscale note body */}
          <Image
            src="/sprites/guitar/guitarNote_Body_Strum.png"
            alt="Note Body"
            fill={true}
            className="object-contain"
          />

          {/* Layer 3: The MASKED and BLENDED color overlay for the body */}
          <div
            className="absolute inset-0 mix-blend-multiply"
            style={{
              backgroundColor: colors.note_green,
              maskImage: "url(/sprites/guitar/guitarNote_Body_Strum.png)",
              WebkitMaskImage: "url(/sprites/guitar/guitarNote_Body_Strum.png)",
              maskRepeat: "no-repeat",
              maskSize: "contain",
              maskPosition: "center",
            }}
          ></div>

          <Image
            src="/sprites/guitar/guitarNote_Strum_Shine12.png"
            alt="Note Shine"
            fill={true}
            className="object-contain"
            style={{ top: "-19%" }}
          />

          <div
            className="absolute inset-0 mix-blend-multiply"
            style={{
              top: "-38%",
              backgroundColor: colors.note_anim_green,
              maskImage: "url(/sprites/guitar/guitarNote_Strum_Shine12.png)",
              WebkitMaskImage:
                "url(/sprites/guitar/guitarNote_Strum_Shine12.png)",
              maskRepeat: "no-repeat",
              maskSize: "contain",
              maskPosition: "center",
            }}
          ></div>
        </div>
      </div>
    </>
  );
}
