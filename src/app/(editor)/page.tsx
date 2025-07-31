import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

export default function Editor() {
  return (
    <main className="flex grow flex-col">
      <div className="border-b p-4">
        <nav>Navigation</nav>
      </div>

      <div className="relative h-full w-full">
        <div className="overflow-hidden">
          <AspectRatio ratio={16 / 9}>
            <Image
              src="/defaults/background.jpg"
              width={1920}
              height={1080}
              alt="background"
              className="w-full object-cover"
            />
          </AspectRatio>
        </div>
        <div
          className="absolute inset-0"
          style={{
            perspective: "80vh",
            perspectiveOrigin: "50% 100%",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
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
    </main>
  );
}
