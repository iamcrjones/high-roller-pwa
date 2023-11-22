const D4Svg = ({ currentDice }: { currentDice: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 81 91"
      className={`transition-all ${"d4" === currentDice ? "scale-125" : ""} ${
        "d4" === currentDice ? "fill-red-700" : "fill-gray-300"
      }`}
    >
      <path d="M1.5 49L32 2.5L78.5 56.5L19 89.5L1.5 49Z" />
      <path
        d="M32 2.5L1.5 49L19 89.5M32 2.5L78.5 56.5L19 89.5M32 2.5L19 89.5"
        stroke="black"
        strokeWidth="2"
      />
    </svg>
  );
};
export default D4Svg;
