"use client";

import { type Theme } from "@/lib/default-theme";
import { cn } from "@/lib/utils";

type NotesProps = {
  guitarColors: Theme["guitar"];
};

const NOTE_MAPPING = [
  { name: "green", position: 1 },
  { name: "red", position: 2 },
  { name: "yellow", position: 3 },
  { name: "blue", position: 4 },
  { name: "orange", position: 5 },
];

const Notes = ({ guitarColors }: NotesProps) => {
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
    <div className="absolute bottom-[14%] left-[50%] flex -translate-x-1/2 justify-center">
      {noteData.map((data) => (
        <Note
          key={data.key}
          noteColor={data.noteColor}
          animColor={data.animColor}
          className="-mx-[0.55cqw]"
        />
      ))}
    </div>
  );
};

interface NoteProps {
  className: string;
  noteColor: string;
  animColor: string;
}

const Note = ({ noteColor, animColor, className }: NoteProps) => {
  return (
    <div className={cn("relative aspect-square w-[7.8cqw]", className)}>
      <img
        src="/sprites/guitar/guitarNote_Base_Strum.png"
        alt="Note Base"
        className="absolute inset-0 h-full w-full object-contain"
      />
      <img
        src="/sprites/guitar/guitarNote_Body_Strum.png"
        alt="Note Body"
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
        alt="Note Shine"
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

export default Notes;
