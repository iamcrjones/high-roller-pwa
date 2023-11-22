const D12Svg = ({ currentDice }: { currentDice: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 81 78"
      className={`transition-all ${"d12" === currentDice ? "scale-125" : ""} ${
        "d12" === currentDice ? "fill-red-700" : "fill-gray-300"
      }`}
    >
      <path d="M17 11L31.5 2L58 4.5L72.5 25L79.5 43L66 67L51.5 76.5L23.5 75L9.5 55L2 34L17 11Z" />
      <path
        d="M17 11L31.5 2L58 4.5M17 11L33 19M17 11L2 34L9.5 55M33 19L60.5 14.5L58 4.5M33 19L29.5 47M58 4.5L72.5 25L79.5 43M79.5 43L66 67L51.5 76.5M79.5 43L72.5 39.5M51.5 76.5L23.5 75L9.5 55M51.5 76.5L55 60M9.5 55L29.5 47M29.5 47L55 60M55 60L72.5 39.5M72.5 39.5L61 15.5"
        stroke="black"
        strokeWidth="2"
      />
    </svg>
  );
};
export default D12Svg;
