import React from "react";

type DiceListProps = { dispatch: (val: string) => void; currentDice: string };
const DiceList = ({ dispatch, currentDice }: DiceListProps) => {
  return (
    <div className=" absolute left-0 flex flex-col justify-center space-y-4 rounded-xl rounded-l-none bg-gray-800 px-2 py-4 text-gray-300">
      <div
        className="flex h-16 w-10 flex-col items-center space-y-2"
        onClick={() => {
          dispatch("d4");
          window?.navigator?.vibrate(50);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 81 91"
          className={`transition-all ${
            "d4" === currentDice ? "scale-125" : ""
          } ${"d4" === currentDice ? "fill-red-700" : "fill-gray-300"}`}
        >
          <path d="M1.5 49L32 2.5L78.5 56.5L19 89.5L1.5 49Z" />
          <path
            d="M32 2.5L1.5 49L19 89.5M32 2.5L78.5 56.5L19 89.5M32 2.5L19 89.5"
            stroke="black"
            strokeWidth="2"
          />
        </svg>
        <h3>d4</h3>
      </div>
      <div
        className="flex h-16 w-10 flex-col items-center space-y-2"
        onClick={() => {
          dispatch("d6");
          window?.navigator?.vibrate(50);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 74 79"
          className={`transition-all ${
            "d6" === currentDice ? "scale-125" : ""
          } ${"d6" === currentDice ? "fill-red-700" : "fill-gray-300"}`}
        >
          <path d="M1 12L43 1.5L72.5 17.5V66L28.5 77.5L1 60.5V12Z" />
          <path
            d="M1 12L43 1.5L72.5 17.5M1 12V60.5L28.5 77.5M1 12L28.5 29M28.5 77.5L72.5 66V17.5M28.5 77.5V29M72.5 17.5L28.5 29"
            stroke="#1C1C1C"
            strokeWidth="2"
          />
        </svg>
        <h3>d6</h3>
      </div>
      <div
        className="flex h-16 w-10 flex-col items-center space-y-2"
        onClick={() => {
          dispatch("d8");
          window?.navigator?.vibrate(50);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 68 77"
          className={`transition-all ${
            "d8" === currentDice ? "scale-125" : ""
          } ${"d8" === currentDice ? "fill-red-700" : "fill-gray-300"}`}
        >
          {/* <path d="M1.5 22.5L47 1.5L66.5 53L21 75.5L1.5 22.5Z" />
          <path
            d="M47 1.5L1.5 22.5M47 1.5L66.5 53L21 75.5M47 1.5L54.5 37.5M1.5 22.5L21 75.5M1.5 22.5L54.5 37.5M21 75.5L54.5 37.5"
            stroke="black"
            strokeWidth="2"
          /> */}
          <path d="M2 23L47.5 2L67 53.5L21.5 76L2 23Z" />
          <path
            d="M47.5 2L2 23M47.5 2L67 53.5M47.5 2L55 38M2 23L21.5 76M2 23L55 38M21.5 76L67 53.5M21.5 76L55 38M67 53.5L55 38"
            stroke="black"
            strokeWidth="2"
          />
        </svg>
        <h3>d8</h3>
      </div>
      <div
        className="flex h-16 w-10 flex-col items-center space-y-2"
        onClick={() => {
          dispatch("d10");
          window?.navigator?.vibrate(50);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 67 74"
          className={`transition-all ${
            "d10" === currentDice ? "scale-125" : ""
          } ${"d10" === currentDice ? "fill-red-700" : "fill-gray-300"}`}
        >
          <path d="M18 1.5L65.5 11.5L63.5 61L50 72L2 61L5.5 9L18 1.5Z" />
          <path
            d="M65.5 11.5L18 1.5L5.5 9M65.5 11.5L63.5 61L50 72M65.5 11.5L45 57.5M65.5 11.5L15 19M5.5 9L2 61M5.5 9L15 19M2 61L50 72M2 61L22 44.5M50 72L45 57.5M45 57.5L22 44.5M22 44.5L15 19"
            stroke="black"
            strokeWidth="2"
          />
        </svg>
        <h3>d10</h3>
      </div>
      <div
        className="flex h-16 w-10 flex-col items-center space-y-2"
        onClick={() => {
          dispatch("d12");
          window?.navigator?.vibrate(50);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 81 78"
          className={`transition-all ${
            "d12" === currentDice ? "scale-125" : ""
          } ${"d12" === currentDice ? "fill-red-700" : "fill-gray-300"}`}
        >
          <path d="M17 11L31.5 2L58 4.5L72.5 25L79.5 43L66 67L51.5 76.5L23.5 75L9.5 55L2 34L17 11Z" />
          <path
            d="M17 11L31.5 2L58 4.5M17 11L33 19M17 11L2 34L9.5 55M33 19L60.5 14.5L58 4.5M33 19L29.5 47M58 4.5L72.5 25L79.5 43M79.5 43L66 67L51.5 76.5M79.5 43L72.5 39.5M51.5 76.5L23.5 75L9.5 55M51.5 76.5L55 60M9.5 55L29.5 47M29.5 47L55 60M55 60L72.5 39.5M72.5 39.5L61 15.5"
            stroke="black"
            strokeWidth="2"
          />
        </svg>
        <h3>d12</h3>
      </div>
      <div
        className="flex h-16 w-10 flex-col items-center space-y-2"
        onClick={() => {
          dispatch("d20");
          window?.navigator?.vibrate(50);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 82 80"
          className={`transition-all ${
            "d20" === currentDice ? "scale-125" : ""
          } ${"d20" === currentDice ? "fill-red-700" : "fill-gray-300"}`}
        >
          <path d="M14 7.5L57 1.5L80.5 35L66.5 72.5L23 78.5L1.5 44.5L14 7.5Z" />
          <path
            d="M57 1.5L14 7.5M57 1.5L80.5 35M57 1.5L45.5 18M14 7.5L1.5 44.5M14 7.5L45.5 18M14 7.5L9.5 44.5M1.5 44.5L23 78.5M1.5 44.5H9.5M23 78.5L66.5 72.5M23 78.5L9.5 44.5M23 78.5L51.5 63M66.5 72.5L80.5 35M66.5 72.5L51.5 63M80.5 35L45.5 18M80.5 35L51.5 63M45.5 18L51.5 63M45.5 18L9.5 44.5M51.5 63L9.5 44.5"
            stroke="black"
            strokeWidth="2"
          />
        </svg>
        <h3>d20</h3>
      </div>
    </div>
  );
};

export default DiceList;
