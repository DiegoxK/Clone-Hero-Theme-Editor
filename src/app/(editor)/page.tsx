import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

export default function Editor() {
  return (
    <main className="flex grow flex-col justify-between">
      <div className="border-b p-4">
        <nav>Navigation</nav>
      </div>
      <div className="flex grow items-center justify-center overflow-hidden">
        <div className="relative w-full">
          <AspectRatio ratio={16 / 9}>
            <img
              src="/defaults/background.jpg"
              alt="background"
              className="w-full object-fill"
            />
          </AspectRatio>
          <div
            className="absolute inset-0"
            style={{
              perspective: "80vh",
              perspectiveOrigin: "50% 100%",
            }}
          >
            <img
              src="/defaults/highway.png"
              alt="highway"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 mask-t-from-80%"
              style={{
                width: "80%",
                height: "600%",
                transform: "rotateX(60deg) translateZ(-200px)",
                transformOrigin: "50% 100%",
              }}
            />
          </div>
        </div>
      </div>
      <div className="border-t p-4">
        <nav>Navigation</nav>
      </div>
    </main>
  );
}
