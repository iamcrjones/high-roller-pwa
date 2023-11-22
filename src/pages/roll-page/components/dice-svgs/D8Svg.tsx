const D8Svg = ({ currentDice }: { currentDice: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 68 77"
      className={`transition-all ${"d8" === currentDice ? "scale-125" : ""} ${
        "d8" === currentDice ? "fill-red-700" : "fill-gray-300"
      }`}
    >
      <path d="M2 23L47.5 2L67 53.5L21.5 76L2 23Z" />
      <path
        d="M47.5 2L2 23M47.5 2L67 53.5M47.5 2L55 38M2 23L21.5 76M2 23L55 38M21.5 76L67 53.5M21.5 76L55 38M67 53.5L55 38"
        stroke="black"
        strokeWidth="2"
      />
    </svg>
  );
};
export default D8Svg;
