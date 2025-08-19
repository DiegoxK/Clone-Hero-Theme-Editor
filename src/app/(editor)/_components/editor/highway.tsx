"use client";

import { useAssetStore } from "@/hooks/stores/use-asset-store";

const Highway = () => {
  const highwayUrl = useAssetStore((state) => state.highwayUrl);

  return (
    <div
      className="absolute inset-0"
      style={{
        perspective: "76.5cqw",
        perspectiveOrigin: "50% 100%",
      }}
    >
      <img
        src={highwayUrl}
        alt="Highway"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 mask-t-from-90%"
        style={{
          width: "60%",
          height: "570%",
          transform: "rotateX(60deg) translateZ(-14.71cqw)",
          transformOrigin: "50% 100%",
        }}
      />
    </div>
  );
};

export default Highway;
