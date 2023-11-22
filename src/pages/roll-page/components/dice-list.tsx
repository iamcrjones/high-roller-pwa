import React from "react";
import D4Svg from "./dice-svgs/D4Svg";
import D6Svg from "./dice-svgs/D6Svg";
import D8Svg from "./dice-svgs/D8Svg";
import D10Svg from "./dice-svgs/D10Svg";
import D12Svg from "./dice-svgs/D12Svg";
import D20Svg from "./dice-svgs/D20Svg";

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
        <D4Svg currentDice={currentDice} />
        <h3>d4</h3>
      </div>
      <div
        className="flex h-16 w-10 flex-col items-center space-y-2"
        onClick={() => {
          dispatch("d6");
          window?.navigator?.vibrate(50);
        }}
      >
        <D6Svg currentDice={currentDice} />
        <h3>d6</h3>
      </div>
      <div
        className="flex h-16 w-10 flex-col items-center space-y-2"
        onClick={() => {
          dispatch("d8");
          window?.navigator?.vibrate(50);
        }}
      >
        <D8Svg currentDice={currentDice} />
        <h3>d8</h3>
      </div>
      <div
        className="flex h-16 w-10 flex-col items-center space-y-2"
        onClick={() => {
          dispatch("d10");
          window?.navigator?.vibrate(50);
        }}
      >
        <D10Svg currentDice={currentDice} />
        <h3>d10</h3>
      </div>
      <div
        className="flex h-16 w-10 flex-col items-center space-y-2"
        onClick={() => {
          dispatch("d12");
          window?.navigator?.vibrate(50);
        }}
      >
        <D12Svg currentDice={currentDice} />
        <h3>d12</h3>
      </div>
      <div
        className="flex h-16 w-10 flex-col items-center space-y-2"
        onClick={() => {
          dispatch("d20");
          window?.navigator?.vibrate(50);
        }}
      >
        <D20Svg currentDice={currentDice} />
        <h3>d20</h3>
      </div>
    </div>
  );
};

export default DiceList;
