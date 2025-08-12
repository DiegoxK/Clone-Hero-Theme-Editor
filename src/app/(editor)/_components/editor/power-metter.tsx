import type { Theme } from "@/lib/default-theme";

type PowerMetterProps = {
  otherColors: Theme["other"];
};

const PowerMetter = ({ otherColors }: PowerMetterProps) => {
  return (
    <>
      <MeterFrame />
      <MeterFullIndicator />
      <MeterFill color={otherColors.sp_bar_color} />
      {NEEDLE_DATA.map((needle) => (
        <MeterNeedle
          key={needle.key}
          className={needle.className}
          color={otherColors.sp_bar_arrow}
        />
      ))}
      <MeterLightning color={otherColors.sp_bar_elec} />
    </>
  );
};

export default PowerMetter;

const MeterFrame = () => (
  <img
    src="/sprites/other/spr_starpower_meter_strip5_0.png"
    alt="Power Meter Frame"
    className="absolute right-[31.6%] bottom-[12%]"
    style={{
      width: "1.9%",
      transform: "translateX(-50%) rotate(-26deg) scaleX(-1)",
    }}
  />
);

const MeterFullIndicator = () => (
  <img
    src="/sprites/other/spr_starpower_meter_strip5_4.png"
    alt="Power Meter Full Indicator"
    className="absolute right-[32.7%] bottom-[24%]"
    style={{
      width: "1.2%",
      transform: "translateX(-50%) rotate(-26deg) scaleX(-1)",
    }}
  />
);

const MeterFill = ({ color }: { color: string }) => (
  <div className="absolute right-[31.46%] bottom-[14.5%] aspect-[36/119] w-[1.8cqw] -scale-x-[1] rotate-[-26deg]">
    <img
      src="/sprites/other/spr_starpower_meter_strip5_fragment.png"
      alt=""
      className="absolute inset-0 h-full w-full object-contain"
    />
    <div
      className="absolute inset-0 mix-blend-plus-lighter"
      style={{
        backgroundColor: color,
        maskImage:
          "url(/sprites/other/spr_starpower_meter_strip5_fragment.png)",
        WebkitMaskImage:
          "url(/sprites/other/spr_starpower_meter_strip5_fragment.png)",
        maskRepeat: "no-repeat",
        maskSize: "contain",
        maskPosition: "center",
      }}
    />
  </div>
);

const MeterLightning = ({ color }: { color: string }) => (
  <div
    className="absolute inset-0"
    style={{ perspective: "76.5cqw", perspectiveOrigin: "50% 100%" }}
  >
    <div
      className="absolute right-[29.35%] bottom-[15.8%] aspect-[128/512] w-[3.3cqw]"
      style={{
        transformOrigin: "50% 100%",
        filter: "blur(0.15cqw) brightness(1.3)",
        transform: "rotateX(60deg) rotateZ(-0.6deg) scaleX(-1) scaleX(0.4)",
      }}
    >
      <img
        src="/sprites/other/WoR_lightning_remake_tansparent_0.png"
        alt=""
        className="absolute inset-0 h-full w-full object-contain"
      />
      <div
        className="absolute inset-0 mix-blend-plus-lighter"
        style={{
          backgroundColor: color,
          maskImage:
            "url(/sprites/other/WoR_lightning_remake_tansparent_0.png)",
          WebkitMaskImage:
            "url(/sprites/other/WoR_lightning_remake_tansparent_0.png)",
          maskRepeat: "no-repeat",
          maskSize: "contain",
          maskPosition: "center",
        }}
      />
    </div>
  </div>
);

const NEEDLE_DATA = [
  {
    key: "needle-1",
    className:
      "absolute right-[29%] bottom-[12.2%] aspect-square w-[4.2cqw] -scale-x-[1] rotate-[-18deg]",
  },
  {
    key: "needle-2",
    className:
      "absolute right-[32.1%] bottom-[21.3%] aspect-square w-[3.1cqw] -scale-x-[1] rotate-[-30deg]",
  },
];

interface NeedleProps {
  className: string;
  color: string;
}

const MeterNeedle = ({ className, color }: NeedleProps) => (
  <div className={className}>
    <img
      src="/sprites/other/spr_rockmeter_needle_strip3_0.png"
      alt=""
      className="absolute inset-0 h-full w-full object-contain opacity-60"
    />
    <div
      className="absolute inset-0 mix-blend-overlay"
      style={{
        backgroundColor: color,
        maskImage: "url(/sprites/other/spr_rockmeter_needle_strip3_0.png)",
        WebkitMaskImage:
          "url(/sprites/other/spr_rockmeter_needle_strip3_0.png)",
        maskRepeat: "no-repeat",
        maskSize: "contain",
        maskPosition: "center",
      }}
    />
  </div>
);
