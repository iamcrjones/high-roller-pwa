import type { Action } from "@/utils/reducer";
import React from "react";

type Propper = { dispatch: React.Dispatch<Action>; currentDice: string };
const DiceList = ({ dispatch, currentDice }: Propper) => {
  const dice = ["d6", "d8", "d10", "d12", "d20"];
  return (
    <div className="absolute inset-y-0 left-4 flex flex-col justify-center space-y-4">
      <h2>Dice</h2>
      {dice.map((d) => {
        return (
          <div
            key={d}
            className="flex flex-col items-center space-y-2"
            onClick={() => dispatch({ type: "setDiceType", payload: d })}
          >
            <div
              className={`h-10 w-10 transition-colors ${
                d === currentDice ? "bg-red-700" : "bg-black"
              }`}
            ></div>
            <h3>{d}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default DiceList;
