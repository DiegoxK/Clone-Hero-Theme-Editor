import Notes from "./_components/editor/notes";
import Highway from "./_components/editor/highway";
import GuitarStrings from "./_components/editor/guitar-strings";
import BeatLines from "./_components/editor/beatlines";
import Sidebars from "./_components/editor/sidebars";
import Strikers from "./_components/editor/strikers";
import PowerMetter from "./_components/editor/power-metter";
import BgImage from "./_components/editor/bg-image";
import OpenNote from "./_components/editor/open-note";
import OpenSustain from "./_components/editor/open-sustain";
import NoteSustains from "./_components/editor/note-sustains";
import Multiplier from "./_components/editor/multiplier";
import LoadColorsButton from "./_components/load-colors-button";

export default function Editor() {
  return (
    <main className="flex grow flex-col justify-between">
      <div className="flex border-b p-3">
        <LoadColorsButton />
      </div>
      <div className="flex grow items-center justify-center overflow-hidden">
        <div className="[container-type:inline-size] relative w-full">
          <BgImage />
          <Highway />
          <GuitarStrings />
          <BeatLines />
          <Multiplier />
          <Sidebars />
          <PowerMetter />
          <NoteSustains />
          <Notes />
          <Strikers />
          <OpenSustain />
          <OpenNote />
        </div>
      </div>
      <div className="border-t p-4">
        <nav>[ ] Star Power</nav>
      </div>
    </main>
  );
}
