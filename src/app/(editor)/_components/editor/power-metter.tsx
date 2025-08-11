const PowerMetter = () => {
  return (
    <>
      <img
        src="/sprites/other/spr_starpower_meter_strip5_0.png"
        alt="Star Power Meter"
        className="absolute right-[31.6%] bottom-[12%]"
        style={{
          width: "1.9%",
          transform: "translateX(-50%) rotate(-26deg) scaleX(-1)",
        }}
      />
      <div className="absolute right-[31.6%] bottom-[14.2%] aspect-[31/124] w-[1.63cqw] -scale-x-[1] rotate-[-27deg]">
        <img
          src="/sprites/other/spr_starpower_meter_strip5_1.png"
          alt="Star Power Meter"
          className="absolute inset-0 h-full w-full object-contain opacity-50"
        />
        <div
          className="absolute inset-0 mix-blend-overlay"
          style={{
            backgroundColor: "#004848",
            maskImage: "url(/sprites/other/spr_starpower_meter_strip5_1.png)",
            WebkitMaskImage:
              "url(/sprites/other/spr_starpower_meter_strip5_1.png)",
            maskRepeat: "no-repeat",
            maskSize: "contain",
            maskPosition: "center",
          }}
        />
      </div>
      <img
        src="/sprites/other/spr_starpower_meter_strip5_4.png"
        alt="Star Power Meter"
        className="absolute right-[32.7%] bottom-[24%]"
        style={{
          width: "1.2%",
          transform: "translateX(-50%) rotate(-26deg) scaleX(-1)",
        }}
      />
    </>
  );
};

export default PowerMetter;
