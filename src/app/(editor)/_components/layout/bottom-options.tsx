"use client";

import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useEffectsStore } from "@/hooks/stores/use-effects-store";

export default function BottomOptions() {
  const starPower = useEffectsStore((state) => state.starPower);
  const toggleStarPower = useEffectsStore((state) => state.toggleStarPower);
  const strikerHitFLame = useEffectsStore((state) => state.strikerHitFLame);
  const toggleStrikerHitFlame = useEffectsStore(
    (state) => state.toggleStrikerHitFlame,
  );

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
          checked={strikerHitFLame}
          onCheckedChange={toggleStrikerHitFlame}
        />
        <Label className="cursor-pointer" htmlFor="hit-flame-switch">
          Striker Hit Flame
        </Label>
      </div>
    </div>
  );
}
