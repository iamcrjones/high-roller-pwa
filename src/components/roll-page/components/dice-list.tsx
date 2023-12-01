import React, { useMemo } from "react";
import D4Svg from "./dice-svgs/D4Svg";
import D6Svg from "./dice-svgs/D6Svg";
import D8Svg from "./dice-svgs/D8Svg";
import D10Svg from "./dice-svgs/D10Svg";
import D12Svg from "./dice-svgs/D12Svg";
import D20Svg from "./dice-svgs/D20Svg";

type DiceListProps = {
  handleDiceChange: (val: string) => void;
  handleDrawerOpen: (val: boolean) => void;
  currentDice: string;
  open: boolean;
};
const DiceList = ({
  handleDiceChange,
  handleDrawerOpen,
  currentDice,
  open,
}: DiceListProps) => {
  const diceMap = useMemo(() => {
    return new Map([
      ["d4", D4Svg],
      ["d6", D6Svg],
      ["d8", D8Svg],
      ["d10", D10Svg],
      ["d12", D12Svg],
      ["d20", D20Svg],
    ]);
  }, []);

  const SelectedDice = useMemo(() => {
    //Force to always contain value as currentDice is provided a value on reducer initial state
    return diceMap.get(currentDice)!;
  }, [diceMap, currentDice]);

  return (
    <div
      className={`absolute bottom-8 left-4 flex min-h-[64px] min-w-[64px] flex-col items-center justify-center overflow-hidden rounded-full bg-gray-800 text-gray-300`}
    >
      {/* <div className="h-full"> */}
      <div
        className={` ease transition-height flex flex-col duration-500 ${
          open ? "max-h-[500px] pt-4" : "pointer-events-none max-h-0 opacity-0"
        } `}
      >
        {[...diceMap].map((entry) => {
          const EntryComponent = entry[1];
          return (
            <div
              key={entry[0]}
              className="flex h-16 w-10 flex-col items-center"
              onClick={() => {
                currentDice !== entry[0] && handleDiceChange(entry[0]);
                window?.navigator?.vibrate(50);
              }}
            >
              <EntryComponent currentDice={currentDice} />
              <h3>{entry[0]}</h3>
            </div>
          );
        })}
      </div>
      {/* </div> */}

      <div
        className="z-10 flex h-full min-h-[64px] w-full flex-col items-center justify-center bg-gray-800 p-4"
        onClick={() => {
          handleDrawerOpen(!open);
        }}
      >
        <SelectedDice currentDice={currentDice} />
      </div>
    </div>
  );
};

export default DiceList;
