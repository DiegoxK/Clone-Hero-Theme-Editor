"use client";

import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useEffectsStore } from "@/hooks/stores/use-effects-store";
import { useAssetStore } from "@/hooks/stores/use-asset-store";

export default function BottomOptions() {
  const starPower = useEffectsStore((state) => state.starPower);
  const strikerHitFLame = useEffectsStore((state) => state.strikerHitFLame);
  const strikerHoldSpark = useEffectsStore((state) => state.strikerHoldSpark);
  const noteParticles = useEffectsStore((state) => state.noteParticles);
  const toggleStarPower = useEffectsStore((state) => state.toggleStarPower);
  const toggleStrikerHitFlame = useEffectsStore(
    (state) => state.toggleStrikerHitFlame,
  );
  const toggleStrikerHoldSpark = useEffectsStore(
    (state) => state.toggleStrikerHoldSpark,
  );
  const toggleNoteParticles = useEffectsStore(
    (state) => state.toggleNoteParticles,
  );

  const strikerState = useAssetStore((state) => state.strikerState);

  return (
    <div className="flex gap-4">
      <div className="flex items-center gap-2">
        <Switch
          id="star-power-switch"
          checked={starPower}
          onCheckedChange={toggleStarPower}
        />
        <Label className="cursor-pointer" htmlFor="star-power-switch">
          Star Power
        </Label>
      </div>

      <div className="flex items-center gap-2">
        <Switch
          id="hit-flame-switch"
          disabled={strikerState !== "open"}
          checked={strikerHitFLame}
          onCheckedChange={toggleStrikerHitFlame}
        />
        <Label className="cursor-pointer" htmlFor="hit-flame-switch">
          Striker Hit Flame
        </Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch
          id="hold-spark-switch"
          disabled={strikerState !== "open"}
          checked={strikerHoldSpark}
          onCheckedChange={toggleStrikerHoldSpark}
        />
        <Label className="cursor-pointer" htmlFor="hold-spark-switch">
          Striker Hold Spark
        </Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch
          id="note-particles-switch"
          disabled={strikerState !== "open"}
          checked={noteParticles}
          onCheckedChange={toggleNoteParticles}
        />
        <Label className="cursor-pointer" htmlFor="note-particles-switch">
          Note Particles
        </Label>
      </div>
    </div>
  );
}
