const D6Svg = ({ currentDice }: { currentDice: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 74 79"
      className={`transition-all ${"d6" === currentDice ? "scale-125" : ""} ${
        "d6" === currentDice ? "fill-red-700" : "fill-gray-300"
      }`}
    >
      <path d="M1 12L43 1.5L72.5 17.5V66L28.5 77.5L1 60.5V12Z" />
      <path
        d="M1 12L43 1.5L72.5 17.5M1 12V60.5L28.5 77.5M1 12L28.5 29M28.5 77.5L72.5 66V17.5M28.5 77.5V29M72.5 17.5L28.5 29"
        stroke="#1C1C1C"
        strokeWidth="2"
      />
    </svg>
  );
};
export default D6Svg;
