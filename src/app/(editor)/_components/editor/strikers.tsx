const strikerData = [
  {
    key: 1,
    position: 1,
    headColor: "#00FF00",
    headLight: "#00FF00",
    ringColor: "#00FF00",
  },
  {
    key: 2,
    position: 2,
    headColor: "#FF0000",
    headLight: "#FF0000",
    ringColor: "#FF0000",
  },
  {
    key: 3,
    position: 3,
    headColor: "#FFFF00",
    headLight: "#FFFF00",
    ringColor: "#FFFF00",
  },
  {
    key: 4,
    position: 4,
    headColor: "#0089FF",
    headLight: "#0089FF",
    ringColor: "#0089FF",
  },
  {
    key: 5,
    position: 5,
    headColor: "#FFB300",
    headLight: "#FFB300",
    ringColor: "#FFB300",
  },
];

const Striker = ({
  pressed,
  position,
  headColor,
  ringColor,
  headLight,
}: {
  pressed: boolean;
  position: number;
  headColor: string;
  ringColor: string;
  headLight: string;
}) => {
  return (
    <div className="relative aspect-square w-[7.5cqw]">
      {pressed ? (
        <>
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: headLight,
              maskImage: `url(/sprites/guitar/striker_DownGlow_${position}.png)`,
              WebkitMaskImage: `url(/sprites/guitar/striker_DownGlow_${position}.png)`,
              maskRepeat: "no-repeat",
              maskSize: "contain",
              maskPosition: "center",
            }}
          />

          <img
            src={`/sprites/guitar/striker_down_${position}.png`}
            alt=""
            className="absolute inset-0 h-full w-full object-contain mix-blend-screen"
          />
        </>
      ) : (
        <>
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
        </>
      )}
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
          pressed={false}
          headColor={striker.headColor}
          position={striker.position}
          ringColor={striker.ringColor}
          headLight={striker.headLight}
        />
      ))}
    </div>
  );
};

export default Strikers;
