"use client";

import { useEffectsStore } from "@/hooks/stores/use-effects-store";
import { useThemeStore } from "@/hooks/stores/use-theme-store";

const LINE_DATA = [
  { key: "line-left", positionStyle: { left: "20.6%" } },
  { key: "line-right", positionStyle: { right: "20.2%" } },
];

const BLUR_DATA = ["0.5", "1", "1.5", "1.5", "1.5"];

export default function HighwayGlow() {
  const starPower = useEffectsStore((state) => state.starPower);
  const otherColors = useThemeStore((state) => state.theme.other);

  if (starPower) {
    return (
      <>
        {/* Middle glow */}
        <div
          className="absolute bottom-[-20%] left-0 h-full w-full opacity-60"
          style={{
            backgroundColor: otherColors.sp_act_animation,
            maskImage: `
              linear-gradient(
                to bottom,        
                transparent,      
                white 40%,        
                transparent      
              ), 
              url(/sprites/other/highway_SP_Glow2.png)
            `,
            maskComposite: "intersect",
            WebkitMaskImage: `
              linear-gradient(
                to bottom,
                transparent,
                white 40%,
                transparent
              ),
              url(/sprites/other/highway_SP_Glow2.png)
            `,
            WebkitMaskComposite: "source-in",
            maskRepeat: "no-repeat",
            maskSize: "contain",
            maskPosition: "center",
          }}
        />

        {/* Side Lines */}
        <div
          className="absolute inset-0 mask-t-from-90% blur-[0.1cqw] brightness-130"
          style={{
            perspective: "76.3cqw",
            perspectiveOrigin: "50% 100%",
          }}
        >
          {LINE_DATA.map((line) => (
            <div
              key={line.key}
              className="absolute bottom-0 -translate-x-1/2"
              style={{
                ...line.positionStyle,
                backgroundColor: "white",
                maskImage: "url(/sprites/other/line.png)",
                WebkitMaskImage: "url(/sprites/other/line.png)",
                maskRepeat: "no-repeat",
                maskSize: "100% 100%",
                width: "0.5%",
                height: "570%",
                transformOrigin: "50% 100%",
                transform: "rotateX(60deg) translateZ(-14.71cqw)",
              }}
            />
          ))}
        </div>

        {/* Side Lines Glow */}
        {BLUR_DATA.map((blurAmount, index) => (
          <div
            key={index}
            className="absolute inset-0 z-[9]"
            style={{
              filter: `blur(${blurAmount}cqw)`,
              perspective: "76.5cqw",
              perspectiveOrigin: "50% 100%",
            }}
          >
            {LINE_DATA.map((line) => (
              <div
                key={line.key}
                className="absolute bottom-0 -translate-x-1/2"
                style={{
                  ...line.positionStyle,
                  backgroundColor: otherColors.sp_act_animation,
                  maskImage: "url(/sprites/other/line.png)",
                  WebkitMaskImage: "url(/sprites/other/line.png)",
                  maskRepeat: "no-repeat",
                  maskSize: "100% 100%",
                  width: "0.5%",
                  height: "570%",
                  transformOrigin: "50% 100%",
                  transform: "rotateX(60deg) translateZ(-14.71cqw)",
                }}
              />
            ))}
          </div>
        ))}
      </>
    );
  }
}
