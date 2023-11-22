import React, { useMemo } from "react";
import D4Svg from "./dice-svgs/D4Svg";
import D6Svg from "./dice-svgs/D6Svg";
import D8Svg from "./dice-svgs/D8Svg";
import D10Svg from "./dice-svgs/D10Svg";
import D12Svg from "./dice-svgs/D12Svg";
import D20Svg from "./dice-svgs/D20Svg";

type DiceListProps = { dispatch: (val: string) => void; currentDice: string };
const DiceList = ({ dispatch, currentDice }: DiceListProps) => {
  const diceMap = new Map([
    ["d4", D4Svg],
    ["d6", D6Svg],
    ["d8", D8Svg],
    ["d10", D10Svg],
    ["d12", D12Svg],
    ["d20", D20Svg],
  ]);

  const Kek = useMemo(() => {
    //Force to always contain value as currentDice is provided a value on reducer initial state
    return diceMap.get(currentDice)!;
  }, [currentDice]);

  return (
    <>
      <div className=" absolute left-0 flex flex-col justify-center space-y-4 rounded-xl rounded-l-none bg-gray-800 px-2 py-4 text-gray-300">
        {[...diceMap].map((entry) => {
          const EntryComponent = entry[1];
          return (
            <div
              key={entry[0]}
              className="flex h-16 w-10 flex-col items-center space-y-2"
              onClick={() => {
                currentDice !== entry[0] && dispatch(entry[0]);
                window?.navigator?.vibrate(50);
              }}
            >
              <EntryComponent currentDice={currentDice} />
              <h3>{entry[0]}</h3>
            </div>
          );
        })}
      </div>
      <Kek currentDice={currentDice} />
    </>
  );
};

export default DiceList;
