const D10Svg = ({ currentDice }: { currentDice: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 67 74"
      className={`transition-all ${"d10" === currentDice ? "scale-125" : ""} ${
        "d10" === currentDice ? "fill-red-700" : "fill-gray-300"
      }`}
    >
      <path d="M18 1.5L65.5 11.5L63.5 61L50 72L2 61L5.5 9L18 1.5Z" />
      <path
        d="M65.5 11.5L18 1.5L5.5 9M65.5 11.5L63.5 61L50 72M65.5 11.5L45 57.5M65.5 11.5L15 19M5.5 9L2 61M5.5 9L15 19M2 61L50 72M2 61L22 44.5M50 72L45 57.5M45 57.5L22 44.5M22 44.5L15 19"
        stroke="black"
        strokeWidth="2"
      />
    </svg>
  );
};
export default D10Svg;
