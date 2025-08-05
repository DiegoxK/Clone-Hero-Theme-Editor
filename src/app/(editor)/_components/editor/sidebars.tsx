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
            className="absolute bottom-0 -translate-x-1/2 mask-t-from-70%"
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
export default Sidebars;
