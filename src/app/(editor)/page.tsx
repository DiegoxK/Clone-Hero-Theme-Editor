import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import Notes from "./_components/editor/notes";

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
          <img
            src="/example.png"
            alt=""
            className="absolute inset-0 opacity-100"
          />
          {/* <Highway />
          <Sidebars /> */}
          <Strings />
          {/* <Notes /> */}
        </div>
      </div>
      <div className="border-t p-4">
        <nav>Heads | Notes</nav>
      </div>
    </main>
  );
}

const Highway = () => {
  return (
    <div
      className="absolute inset-0"
      style={{
        perspective: "110vh",
        perspectiveOrigin: "50% 100%",
      }}
    >
      <img
        src="/defaults/highway.png"
        alt=""
        className="absolute bottom-0 left-1/2 -translate-x-1/2 mask-t-from-80%"
        style={{
          width: "66%",
          height: "600%",
          transform: "rotateX(60deg) translateZ(-200px)",
          transformOrigin: "50% 100%",
        }}
      />
    </div>
  );
};
const Sidebars = () => {
  return (
    <>
      <div
        className="absolute inset-0"
        style={{
          perspective: "110vh",
          perspectiveOrigin: "50% 100%",
        }}
      >
        <img
          src="/sprites/layout/sidebar.png"
          alt=""
          className="absolute bottom-0 left-[14.3%] -translate-x-1/2 mask-t-from-80%"
          style={{
            width: "7%",
            height: "600%",
            transform: "rotateX(60deg) translateZ(-200px)",

            transformOrigin: "50% 100%",
          }}
        />
      </div>
      <div
        className="absolute inset-0"
        style={{
          perspective: "110vh",
          perspectiveOrigin: "50% 100%",
        }}
      >
        <img
          src="/sprites/layout/sidebar.png"
          alt=""
          className="absolute right-[7.3%] bottom-0 -translate-x-1/2 mask-t-from-80%"
          style={{
            width: "7%",
            height: "600%",
            transform: "rotateX(60deg) translateZ(-200px) scaleX(-1)",

            transformOrigin: "50% 100%",
          }}
        />
      </div>
    </>
  );
};

const Strings = () => {
  return (
    <div
      className="absolute inset-0"
      style={{
        perspective: "110vh",
        perspectiveOrigin: "50% 100%",
      }}
    >
      <img
        src="/sprites/layout/Guitarstring_wor_remake2.png"
        alt=""
        className="absolute right-[38%] bottom-53 -translate-x-1/2 mask-t-from-10%"
        style={{
          width: "3%",
          height: "280%",
          transform: "rotateX(60deg) translateZ(-200px) ",

          transformOrigin: "50% 100%",
        }}
      />
    </div>
  );
};

const BeatLine = () => {
  return (
    <img
      src="/sprites/layout/beatline.png"
      alt=""
      className="absolute right-[38%] bottom-53 -translate-x-1/2"
      style={{
        width: "3%",
        height: "280%",
        transformOrigin: "50% 100%",
      }}
    />
  );
};
