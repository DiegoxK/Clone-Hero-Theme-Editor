import type { Theme } from "@/lib/default-theme";

type DotRowProps = {
  otherColors: Theme["other"];
};

const DotRow = ({ otherColors }: DotRowProps) => {
  return (
    <>
      <img
        src="/sprites/other/dotrow_0.png"
        alt="Star Power Meter"
        className="absolute right-[36.4%] bottom-[35.5%]"
        style={{
          width: "4%",
        }}
      />
      <div className="absolute right-[36.9%] bottom-[36.7%] aspect-[57/84] w-[3cqw] rotate-1">
        <div
          className="absolute inset-0 mix-blend-multiply"
          style={{
            backgroundColor: otherColors.combo_four,
            maskImage: "url(/sprites/other/dotrow_1.png)",
            WebkitMaskImage: "url(/sprites/other/dotrow_1.png)",
            maskRepeat: "no-repeat",
            maskSize: "contain",
            maskPosition: "center",
          }}
        />
      </div>
    </>
  );
};

export default DotRow;
