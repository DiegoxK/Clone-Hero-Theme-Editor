const GuitarStrings = () => {
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
            width: "3.1%",
            height: "250%",
            transformOrigin: "50% 100%",
            transform: "rotateX(60deg) translateZ(-20cqw)",
          }}
        />
      ))}
    </div>
  );
};
export default GuitarStrings;
