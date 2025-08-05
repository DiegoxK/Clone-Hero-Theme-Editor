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
        <div className="[container-type:inline-size] relative w-full">
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
            className="absolute inset-0 w-full opacity-100"
          />
          <Highway />
          <Strings />
          <BeatLines />
          <Sidebars />
          <Strikers />
          {/* <Notes /> */}
          <PowerMetter />
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
        perspective: "76.5cqw",
        perspectiveOrigin: "50% 100%",
      }}
    >
      <img
        src="/defaults/highway.png"
        alt=""
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

const Sidebars = () => {
  const sidebarData = [
    {
      key: "sidebar-left",
      positionStyle: { left: "17.2%" },
      transform: "rotateX(60deg) translateZ(-14.71cqw)",
    },
    {
      key: "sidebar-right",
      positionStyle: { right: "10.2%" },
      transform: "rotateX(60deg) translateZ(-14.71cqw) scaleX(-1)",
    },
  ];

  return (
    <>
      <div
        className="absolute inset-0"
        style={{
          perspective: "76.5cqw",
          perspectiveOrigin: "50% 100%",
        }}
      >
        <img
          src="/sprites/other/spr_rockmeter_strip6_5.png"
          alt=""
          className="absolute right-[29%] bottom-[12.5%] -translate-x-1/2 -rotate-26"
          style={{
            width: "1.9%",
            transform: "scaleX(-1)",
          }}
        />
        {sidebarData.map((bar) => (
          <img
            key={bar.key}
            src="/sprites/layout/sidebar.png"
            alt=""
            className="absolute bottom-0 -translate-x-1/2 mask-t-from-80%"
            style={{
              ...bar.positionStyle,
              width: "7%",
              height: "600%",
              transformOrigin: "50% 100%",
              transform: bar.transform,
            }}
          />
        ))}
      </div>
    </>
  );
};

const Strings = () => {
  const stringPositions = [
    { key: "string-1", style: { right: "29%" } },
    { key: "string-2", style: { right: "38%" } },
    { key: "string-3", style: { right: "47%" } },
    { key: "string-4", style: { left: "32%" } },
    { key: "string-5", style: { left: "41%" } },
  ];

  return (
    <div
      className="absolute inset-0"
      style={{
        perspective: "76.5cqw",
        perspectiveOrigin: "50% 100%",
      }}
    >
      {stringPositions.map((pos) => (
        <img
          key={pos.key}
          src="/sprites/layout/Guitarstring_wor_remake2.png"
          alt=""
          className="absolute bottom-[40%] -translate-x-1/2 mask-t-from-10%"
          style={{
            ...pos.style,
            width: "3%",
            height: "250%",
            transformOrigin: "50% 100%",
            transform: "rotateX(60deg) translateZ(-20cqw)",
          }}
        />
      ))}
    </div>
  );
};

const BeatLines = () => {
  const lineData = [
    {
      key: "line-1",
      style: {
        bottom: "27.5%",
        width: "27%",
      },
    },
    {
      key: "line-2",
      style: {
        bottom: "46.5%",
        width: "17%",
      },
    },
  ];

  return (
    <>
      {lineData.map((line) => (
        <img
          key={line.key}
          src="/sprites/layout/beatline.png"
          alt=""
          className="absolute left-[50%] -translate-x-1/2"
          style={line.style}
        />
      ))}
    </>
  );
};

const strikerData = [
  { key: 1, position: 1, headColor: "#00FF00", ringColor: "#00FF00" },
  { key: 2, position: 2, headColor: "#FF0000", ringColor: "#FF0000" },
  { key: 3, position: 3, headColor: "#FFFF00", ringColor: "#FFFF00" },
  { key: 4, position: 4, headColor: "#0089FF", ringColor: "#0089FF" },
  { key: 5, position: 5, headColor: "#FFB300", ringColor: "#FFB300" },
];

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
    <div className="relative aspect-square w-[7.5cqw]">
      <img
        src={`/sprites/guitar/striker_GuitarUnderlay${position}.png`}
        alt=""
        className="absolute inset-0 h-full w-full object-contain"
      />
      <img
        src={`/sprites/guitar/striker_GuitarHead${position}.png`}
        alt=""
        className="absolute inset-0 h-full w-full object-contain"
      />
      <img
        src={`/sprites/guitar/striker_HeadColor${position}.png`}
        alt=""
        className="absolute inset-0 h-full w-full object-contain"
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

      <img
        src={`/sprites/guitar/striker_Ring${position}.png`}
        alt=""
        className="absolute inset-0 h-full w-full object-contain"
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

const Strikers = () => {
  return (
    <div className="absolute bottom-[5%] left-[50%] flex -translate-x-1/2 justify-center gap-x-[0.35cqw]">
      {strikerData.map((striker) => (
        <Striker
          key={striker.key}
          headColor={striker.headColor}
          position={striker.position}
          ringColor={striker.ringColor}
        />
      ))}
    </div>
  );
};

const PowerMetter = () => {
  return (
    <img
      src="/sprites/other/spr_starpower_meter_strip5_0.png"
      alt="Star Power Meter"
      className="absolute right-[31.6%] bottom-[12%]"
      style={{
        width: "1.9%",
        transform: "translateX(-50%) rotate(-26deg) scaleX(-1)",
      }}
    />
  );
};
