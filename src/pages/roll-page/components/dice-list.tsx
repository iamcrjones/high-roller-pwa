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
            {/* <div
              className={`h-10 w-10 transition-colors ${
                d === currentDice ? "bg-red-700" : "bg-black"
              }`}
            ></div> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 235 264"
              // fill={d === currentDice ? "#b91c1c" : "none"}
              className={`transition-all ${
                d === currentDice ? "scale-125" : ""
              } ${d === currentDice ? "fill-red-700" : "fill-gray-400"}`}
            >
              <path
                d="M49 263L1 140L93.8504 1.22363L234 167L49 263Z"
                fill="#858585"
              />
              <path
                d="M94 1L93.8504 1.22363M49 263L1 140L93.8504 1.22363M49 263L234 167L93.8504 1.22363M49 263L93.8504 1.22363"
                stroke="#1C1C1C"
              />
            </svg>
            <h3>{d}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default DiceList;
