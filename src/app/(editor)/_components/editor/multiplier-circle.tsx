import type { Theme } from "@/lib/default-theme";

type MultiplierCircleProps = {
  otherColors: Theme["other"];
};

const MultiplierCircle = ({ otherColors }: MultiplierCircleProps) => {
  return (
    <>
      <img
        src="/sprites/other/spr_multiplier_circle_strip3_1.png"
        alt=""
        className="absolute right-[28%] bottom-[25.55%]"
        style={{
          width: "13%",
        }}
      />
      <img
        src="/sprites/other/spr_multiplier_circle_strip3_2.png"
        alt=""
        className="absolute right-[28%] bottom-[25.55%]"
        style={{
          width: "13%",
        }}
      />
      <div className="absolute right-[33.1%] bottom-[34.8%] aspect-[48/56] w-[2.2cqw]">
        <img
          src="/sprites/other/highway_Multiplier_NumberGlow4.png"
          alt=""
          className="absolute inset-0 h-full w-full object-contain"
        />
        <div
          className="absolute inset-0 mix-blend-normal"
          style={{
            backgroundColor: otherColors.combo_four_glow,
            maskImage: "url(/sprites/other/highway_Multiplier_NumberGlow4.png)",
            WebkitMaskImage:
              "url(/sprites/other/highway_Multiplier_NumberGlow4.png)",
            maskRepeat: "no-repeat",
            maskSize: "contain",
            maskPosition: "center",
          }}
        />
        <img
          src="/sprites/other/highway_Multiplier_Number4.png"
          alt=""
          className="absolute inset-0 h-full w-full object-contain opacity-45"
        />
        <div
          className="absolute inset-0 mix-blend-overlay"
          style={{
            backgroundColor: otherColors.combo_four,
            maskImage: "url(/sprites/other/highway_Multiplier_Number4.png)",
            WebkitMaskImage:
              "url(/sprites/other/highway_Multiplier_Number4.png)",
            maskRepeat: "no-repeat",
            maskSize: "contain",
            maskPosition: "center",
          }}
        />
      </div>
      <img
        src="/sprites/other/spr_multiplier_circle_strip3_0.png"
        alt=""
        className="absolute right-[28%] bottom-[25.55%]"
        style={{
          width: "13%",
        }}
      />
    </>
  );
};

export default MultiplierCircle;
