"use client";

import { useAssetStore } from "@/hooks/stores/use-asset-store";

export default function BgImage() {
  const backgroundUrl = useAssetStore((state) => state.backgroundUrl);

  return (
    <img src={backgroundUrl} alt="background" className="w-full object-fill" />
  );
}
