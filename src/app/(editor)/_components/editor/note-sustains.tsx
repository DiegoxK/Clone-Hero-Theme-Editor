import type { Theme } from "@/lib/default-theme";

type NoteSustainsProps = {
  guitarColors: Theme["guitar"];
};

const SUSTAIN_MAPPING = [
  { name: "green" },
  { name: "red" },
  { name: "yellow" },
  { name: "blue" },
  { name: "orange" },
];

const SustainVisual = ({ color }: { color: string }) => {
  return (
    <div className="flex h-full w-[9.4%] shrink-0 flex-col items-center">
      <div
        className="relative w-full shrink-0"
        style={{ aspectRatio: "47 / 19" }}
      >
        <img
          src="/sprites/guitar/note_sustain_nocap.png"
          alt="Sustain Cap"
          className="absolute inset-0 h-full w-full object-contain"
        />
        <div
          className="absolute inset-0 mix-blend-multiply"
          style={{
            backgroundColor: color,
            maskImage: "url(/sprites/guitar/note_sustain_nocap.png)",
            WebkitMaskImage: "url(/sprites/guitar/note_sustain_nocap.png)",
            maskRepeat: "no-repeat",
            maskSize: "contain",
            maskPosition: "center",
          }}
        />
      </div>

      <div className="relative w-full grow">
        <img
          src="/sprites/guitar/note_sustain_body.png"
          alt="Sustain Body"
          className="absolute inset-0 h-full w-full object-fill"
        />
        <div
          className="absolute inset-0 mix-blend-multiply"
          style={{
            backgroundColor: color,
            maskImage: "url(/sprites/guitar/note_sustain_body.png)",
            WebkitMaskImage: "url(/sprites/guitar/note_sustain_body.png)",
            maskRepeat: "no-repeat",
            maskSize: "100% 100%",
            maskPosition: "center",
          }}
        />
      </div>
    </div>
  );
};

const NoteSustains = ({ guitarColors }: NoteSustainsProps) => {
  const sustainData = SUSTAIN_MAPPING.map((sustain, index) => {
    const colorKey = `sustain_${sustain.name}` as keyof Theme["guitar"];
    return {
      key: index,
      color: guitarColors[colorKey],
    };
  });

  return (
    <div
      className="absolute inset-0"
      style={{
        perspective: "76.5cqw",
        perspectiveOrigin: "50% 100%",
      }}
    >
      <div
        className="absolute bottom-[16%] left-1/2 w-[39%] -translate-x-1/2"
        style={{
          height: "75%",
          transformOrigin: "50% 100%",
          transform: "rotateX(60deg) translateZ(-13.5cqw) translateY(-37cqw)",
        }}
      >
        <div className="flex h-full w-full justify-center gap-x-[6.5cqw]">
          {sustainData.map((data) => (
            <SustainVisual key={data.key} color={data.color} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default NoteSustains;
