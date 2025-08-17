"use client";
import { useThemeStore } from "@/hooks/stores/use-theme-store";
import { useAssetStore } from "@/hooks/stores/use-asset-store";
import { type Theme } from "@/lib/default-theme";
import { useEffectsStore } from "@/hooks/stores/use-effects-store";

const NOTE_MAPPING = [
  { name: "green", position: 1 },
  { name: "red", position: 2 },
  { name: "yellow", position: 3 },
  { name: "blue", position: 4 },
  { name: "orange", position: 5 },
];

const Notes = () => {
  const guitarColors = useThemeStore((state) => state.theme.guitar);
  const starPower = useEffectsStore((state) => state.starPower);

  const noteState = useAssetStore((state) => state.noteState);
  const cycleNoteState = useAssetStore((state) => state.cycleNoteState);

  const noteData = NOTE_MAPPING.map((note) => {
    const colorName = note.name;

    const noteColorKey = `note_${colorName}` as keyof Theme["guitar"];
    const animColorKey = `note_anim_${colorName}` as keyof Theme["guitar"];

    return {
      key: note.position,
      noteColor: guitarColors[noteColorKey],
      animColor: guitarColors[animColorKey],
    };
  });

  return (
    <>
      {noteState === "sp" ? (
        <div className="absolute bottom-[18%] left-[50%] flex -translate-x-1/2 justify-center">
          {noteData.map((data) => (
            <SPNote
              key={data.key}
              noteColor={
                starPower ? guitarColors.note_sp_active : data.noteColor
              }
              baseColor={
                starPower
                  ? guitarColors.note_anim_sp_phrase_active
                  : guitarColors.note_anim_sp_phrase
              }
            />
          ))}
        </div>
      ) : (
        <div className="absolute bottom-[14%] left-[50%] flex -translate-x-1/2 justify-center">
          {noteData.map((data) => (
            <Note
              key={data.key}
              noteColor={
                starPower ? guitarColors.note_sp_active : data.noteColor
              }
              animColor={
                starPower ? guitarColors.note_anim_sp_active : data.animColor
              }
            />
          ))}
        </div>
      )}
      <div
        title="Notes"
        className="absolute right-[34%] bottom-[18%] z-10 h-[2.8cqw] w-[32cqw] cursor-pointer"
        onClick={cycleNoteState}
      />
    </>
  );
};

interface NoteProps {
  noteColor: string;
  animColor: string;
}

const Note = ({ noteColor, animColor }: NoteProps) => {
  return (
    <div className="relative -mx-[0.55cqw] aspect-square w-[7.8cqw]">
      <img
        src="/sprites/guitar/guitarNote_Base_Strum.png"
        alt=""
        className="absolute inset-0 h-full w-full object-contain"
      />
      <img
        src="/sprites/guitar/guitarNote_Body_Strum.png"
        alt=""
        className="absolute inset-0 h-full w-full object-contain"
      />
      <div
        className="absolute inset-0 mix-blend-multiply"
        style={{
          backgroundColor: noteColor,
          maskImage: "url(/sprites/guitar/guitarNote_Body_Strum.png)",
          WebkitMaskImage: "url(/sprites/guitar/guitarNote_Body_Strum.png)",
          maskRepeat: "no-repeat",
          maskSize: "contain",
          maskPosition: "center",
        }}
      />
      <img
        src="/sprites/guitar/guitarNote_Strum_Shine12.png"
        alt=""
        className="absolute inset-0 h-full w-full object-contain"
        style={{ top: "-19%" }}
      />
      <div
        className="absolute inset-0 mix-blend-multiply"
        style={{
          top: "-37%",
          backgroundColor: animColor,
          maskImage: "url(/sprites/guitar/guitarNote_Strum_Shine12.png)",
          WebkitMaskImage: "url(/sprites/guitar/guitarNote_Strum_Shine12.png)",
          maskRepeat: "no-repeat",
          maskSize: "contain",
          maskPosition: "center",
        }}
      />
    </div>
  );
};

interface SPNoteProps {
  noteColor: string;
  baseColor: string;
}

const SPNote = ({ noteColor, baseColor }: SPNoteProps) => {
  return (
    <div className="relative -mx-[0.6cqw] aspect-[128/64] w-[7.8cqw]">
      <img
        src="/sprites/guitar/guitarNote_SP_StrumCap.png"
        alt=""
        className="absolute inset-0 h-full w-full object-contain"
      />
      <img
        src="/sprites/guitar/guitarNote_SP_Body12.png"
        alt=""
        className="absolute inset-0 h-full w-full object-contain"
      />
      <div
        className="absolute inset-0 mix-blend-multiply"
        style={{
          backgroundColor: noteColor,
          maskImage: "url(/sprites/guitar/guitarNote_SP_Body12.png)",
          WebkitMaskImage: "url(/sprites/guitar/guitarNote_SP_Body12.png)",
          maskRepeat: "no-repeat",
          maskSize: "contain",
          maskPosition: "center",
        }}
      />
      <img
        src="/sprites/guitar/guitarNote_SP_Base12.png"
        alt=""
        className="absolute inset-0 h-full w-full object-contain"
      />
      <div
        className="absolute inset-0 mix-blend-multiply"
        style={{
          backgroundColor: baseColor,
          maskImage: "url(/sprites/guitar/guitarNote_SP_Base12.png)",
          WebkitMaskImage: "url(/sprites/guitar/guitarNote_SP_Base12.png)",
          maskRepeat: "no-repeat",
          maskSize: "contain",
          maskPosition: "center",
        }}
      />
    </div>
  );
};

export default Notes;
