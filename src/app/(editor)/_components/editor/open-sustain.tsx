import type { Theme } from "@/lib/default-theme";

type OpenSustainProps = {
  guitarColors: Theme["guitar"];
};

const OpenSustain = ({ guitarColors }: OpenSustainProps) => {
  return (
    <div
      className="absolute inset-0"
      style={{
        perspective: "76.5cqw",
        perspectiveOrigin: "50% 100%",
      }}
    >
      <div
        className="absolute bottom-[18%] left-1/2 w-[56%] -translate-x-1/2"
        style={{
          height: "100%",
          width: "37%",
          transformOrigin: "50% 100%",
          transform: "rotateX(60deg) translateZ(-13cqw) translateY(-60cqw)",
        }}
      >
        <SustainVisual color={guitarColors.sustain_open} />
      </div>
    </div>
  );
};

const SustainVisual = ({ color }: { color: string }) => {
  return (
    <div className="flex h-full w-full flex-col items-center">
      <div
        className="w-full flex-shrink-0"
        style={{
          backgroundColor: color,
          maskImage: "url(/sprites/guitar/open_sustain_nocap.png)",
          WebkitMaskImage: "url(/sprites/guitar/open_sustain_nocap.png)",
          maskSize: "contain",
          maskRepeat: "no-repeat",
          maskPosition: "center",

          aspectRatio: "296 / 86",
        }}
      />

      <div
        className="w-full grow"
        style={{
          backgroundColor: color,
          maskImage: "url(/sprites/guitar/open_sustain_body.png)",
          WebkitMaskImage: "url(/sprites/guitar/open_sustain_body.png)",
          maskSize: "100% 100%",
          maskRepeat: "no-repeat",
          maskPosition: "center",
        }}
      />
    </div>
  );
};

export default OpenSustain;
