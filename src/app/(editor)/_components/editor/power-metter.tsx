const PowerMetter = () => {
  return (
    <>
      <img
        src="/sprites/other/spr_starpower_meter_strip5_0.png"
        alt=""
        className="absolute right-[31.6%] bottom-[12%]"
        style={{
          width: "1.9%",
          transform: "translateX(-50%) rotate(-26deg) scaleX(-1)",
        }}
      />

      <div className="absolute right-[31.46%] bottom-[14.5%] aspect-[36/119] w-[1.8cqw] -scale-x-[1] rotate-[-26deg]">
        <img
          src="/sprites/other/spr_starpower_meter_strip5_fragment.png"
          alt=""
          className="absolute inset-0 h-full w-full object-contain"
        />
        <div
          className="absolute inset-0 mix-blend-plus-lighter"
          style={{
            backgroundColor: "#004848",
            maskImage:
              "url(/sprites/other/spr_starpower_meter_strip5_fragment.png)",
            WebkitMaskImage:
              "url(/sprites/other/spr_starpower_meter_strip5_fragment.png)",
            maskRepeat: "no-repeat",
            maskSize: "contain",
            maskPosition: "center",
          }}
        />
      </div>
      <div className="absolute right-[29%] bottom-[12.2%] aspect-square w-[4.2cqw] -scale-x-[1] rotate-[-18deg]">
        <img
          src="/sprites/other/spr_rockmeter_needle_strip3_0.png"
          alt=""
          className="absolute inset-0 h-full w-full object-contain opacity-60"
        />
        <div
          className="absolute inset-0 mix-blend-overlay"
          style={{
            backgroundColor: "#7FFFFF",
            maskImage: "url(/sprites/other/spr_rockmeter_needle_strip3_0.png)",
            WebkitMaskImage:
              "url(/sprites/other/spr_rockmeter_needle_strip3_0.png)",
            maskRepeat: "no-repeat",
            maskSize: "contain",
            maskPosition: "center",
          }}
        />
      </div>
      <img
        src="/sprites/other/spr_starpower_meter_strip5_4.png"
        alt=""
        className="absolute right-[32.7%] bottom-[24%]"
        style={{
          width: "1.2%",
          transform: "translateX(-50%) rotate(-26deg) scaleX(-1)",
        }}
      />
      <div className="absolute right-[32.1%] bottom-[21.3%] aspect-square w-[3.1cqw] -scale-x-[1] rotate-[-30deg]">
        <img
          src="/sprites/other/spr_rockmeter_needle_strip3_0.png"
          alt=""
          className="absolute inset-0 h-full w-full object-contain opacity-60"
        />
        <div
          className="absolute inset-0 mix-blend-overlay"
          style={{
            backgroundColor: "#7FFFFF",
            maskImage: "url(/sprites/other/spr_rockmeter_needle_strip3_0.png)",
            WebkitMaskImage:
              "url(/sprites/other/spr_rockmeter_needle_strip3_0.png)",
            maskRepeat: "no-repeat",
            maskSize: "contain",
            maskPosition: "center",
          }}
        />
      </div>
    </>
  );
};

export default PowerMetter;
