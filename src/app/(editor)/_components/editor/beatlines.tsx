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

export default BeatLines;
