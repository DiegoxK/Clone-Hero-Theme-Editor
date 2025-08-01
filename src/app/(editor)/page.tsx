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
          {/* <Highway /> */}
          {/* <Strings /> */}
          {/* <BeatLines /> */}
          {/* <Sidebars /> */}
          {/* <Notes /> */}
          {/* <Strikers /> */}
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
        className="absolute bottom-0 left-1/2 -translate-x-1/2 mask-t-from-90%"
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
    <>
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
          className="absolute right-[29%] bottom-53 -translate-x-1/2 mask-t-from-10%"
          style={{
            width: "3%",
            height: "250%",
            transform: "rotateX(60deg) translateZ(-200px) ",

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
          src="/sprites/layout/Guitarstring_wor_remake2.png"
          alt=""
          className="absolute right-[38%] bottom-53 -translate-x-1/2 mask-t-from-10%"
          style={{
            width: "3%",
            height: "250%",
            transform: "rotateX(60deg) translateZ(-200px) ",

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
          src="/sprites/layout/Guitarstring_wor_remake2.png"
          alt=""
          className="absolute right-[47%] bottom-53 -translate-x-1/2 mask-t-from-10%"
          style={{
            width: "3%",
            height: "250%",
            transform: "rotateX(60deg) translateZ(-200px) ",

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
          src="/sprites/layout/Guitarstring_wor_remake2.png"
          alt=""
          className="absolute bottom-53 left-[32%] -translate-x-1/2 mask-t-from-10%"
          style={{
            width: "3%",
            height: "250%",
            transform: "rotateX(60deg) translateZ(-200px) ",

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
          src="/sprites/layout/Guitarstring_wor_remake2.png"
          alt=""
          className="absolute bottom-53 left-[41%] -translate-x-1/2 mask-t-from-10%"
          style={{
            width: "3%",
            height: "250%",
            transform: "rotateX(60deg) translateZ(-200px) ",

            transformOrigin: "50% 100%",
          }}
        />
      </div>
    </>
  );
};

const BeatLines = () => {
  return (
    <>
      <img
        src="/sprites/layout/beatline.png"
        alt=""
        className="absolute bottom-38 left-[50%] -translate-x-1/2"
        style={{
          width: "27%",
        }}
      />
      <img
        src="/sprites/layout/beatline.png"
        alt=""
        className="absolute bottom-64 left-[50%] -translate-x-1/2"
        style={{
          width: "18%",
        }}
      />
    </>
  );
};

const Strikers = () => {
  const Striker = ({
    position,
    headColor,
    ringColor,
  }: {
    position: number;
    headColor: string;
    ringColor: string;
  }) => {
    return (
      <div className="relative h-19 w-19">
        <Image
          src={`/sprites/guitar/striker_GuitarUnderlay${position}.png`}
          alt=""
          fill={true}
          className="object-contain"
        />
        <Image
          src={`/sprites/guitar/striker_GuitarHead${position}.png`}
          alt=""
          fill={true}
          className="object-contain"
        />

        <Image
          src={`/sprites/guitar/striker_HeadColor${position}.png`}
          alt=""
          fill={true}
          className="object-contain"
        />

        <div
          className="absolute inset-0 mix-blend-multiply"
          style={{
            backgroundColor: headColor,
            maskImage: `url(/sprites/guitar/striker_HeadColor${position}.png)`,
            WebkitMaskImage: `url(/sprites/guitar/striker_HeadColor${position}.png)`,
            maskRepeat: "no-repeat",
            maskSize: "contain",
            maskPosition: "center",
          }}
        />

        {/* <Image
          src="/sprites/guitar/striker_HeadGlow1.png"
          alt=""
          fill={true}
          className="object-contain"
        /> */}
        <Image
          src={`/sprites/guitar/striker_Ring${position}.png`}
          alt=""
          fill={true}
          className="object-contain"
        />
        <div
          className="absolute inset-0 mix-blend-multiply"
          style={{
            backgroundColor: ringColor,
            maskImage: `url(/sprites/guitar/striker_Ring${position}.png)`,
            WebkitMaskImage: `url(/sprites/guitar/striker_Ring${position}.png)`,
            maskRepeat: "no-repeat",
            maskSize: "contain",
            maskPosition: "center",
          }}
        />
      </div>
    );
  };

  return (
    <div className="absolute bottom-[5%] left-[50%] flex -translate-x-1/2">
      <Striker position={1} headColor="#00FF00" ringColor="#00FF00" />
      <Striker position={2} headColor="#FF0000" ringColor="#FF0000" />
      <Striker position={3} headColor="#FFFF00" ringColor="#FFFF00" />
      <Striker position={4} headColor="#0089FF" ringColor="#0089FF" />
      <Striker position={5} headColor="#FFB300" ringColor="#FFB300" />
    </div>
  );
};
