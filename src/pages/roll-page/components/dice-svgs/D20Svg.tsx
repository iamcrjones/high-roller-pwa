const D20Svg = ({ currentDice }: { currentDice: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 82 80"
      className={`transition-all ${"d20" === currentDice ? "scale-125" : ""} ${
        "d20" === currentDice ? "fill-red-700" : "fill-gray-300"
      }`}
    >
      <path d="M14 7.5L57 1.5L80.5 35L66.5 72.5L23 78.5L1.5 44.5L14 7.5Z" />
      <path
        d="M57 1.5L14 7.5M57 1.5L80.5 35M57 1.5L45.5 18M14 7.5L1.5 44.5M14 7.5L45.5 18M14 7.5L9.5 44.5M1.5 44.5L23 78.5M1.5 44.5H9.5M23 78.5L66.5 72.5M23 78.5L9.5 44.5M23 78.5L51.5 63M66.5 72.5L80.5 35M66.5 72.5L51.5 63M80.5 35L45.5 18M80.5 35L51.5 63M45.5 18L51.5 63M45.5 18L9.5 44.5M51.5 63L9.5 44.5"
        stroke="black"
        strokeWidth="2"
      />
    </svg>
  );
};
export default D20Svg;
