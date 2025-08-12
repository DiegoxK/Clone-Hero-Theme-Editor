import type { Theme } from "@/lib/default-theme";

type OpenNoteProps = {
  guitarColors: Theme["guitar"];
};

export default function OpenNote({ guitarColors }: OpenNoteProps) {
  return (
    <div className="absolute bottom-[33.5%] left-[50%] aspect-[334/64] w-[24cqw] -translate-x-1/2">
      <img
        src="/sprites/guitar/guitarNote_Open_Base.png"
        alt=""
        className="absolute inset-0 h-full w-full object-contain"
      />
      <img
        src="/sprites/guitar/guitarNote_Open_Body1.png"
        alt=""
        className="absolute inset-0 h-full w-full object-contain"
      />
      <div
        className="absolute inset-0 mix-blend-overlay"
        style={{
          backgroundColor: guitarColors.note_open,
          maskImage: "url(/sprites/guitar/guitarNote_Open_Body1.png)",
          WebkitMaskImage: "url(/sprites/guitar/guitarNote_Open_Body1.png)",
          maskRepeat: "no-repeat",
          maskSize: "contain",
          maskPosition: "center",
        }}
      />
      <img
        src="/sprites/guitar/guitarNote_Open_Shine8.png"
        alt=""
        className="absolute inset-0 h-full w-full object-contain"
      />
      <div
        className="absolute inset-0 mix-blend-multiply"
        style={{
          backgroundColor: guitarColors.note_anim_open,
          maskImage: "url(/sprites/guitar/guitarNote_Open_Shine8.png)",
          WebkitMaskImage: "url(/sprites/guitar/guitarNote_Open_Shine8.png)",
          maskRepeat: "no-repeat",
          maskSize: "contain",
          maskPosition: "center",
        }}
      />
    </div>
  );
}
