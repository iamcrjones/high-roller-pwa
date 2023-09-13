import { rollDice } from "@/utils/rollDice";
import React, { useReducer } from "react";
import type { Reducer } from "react";
import type { Action, State } from "../../utils/reducer";
import reducer from "../../utils/reducer";
import DiceList from "./components/dice-list";
import Modifier from "./components/modifier";

const RollPage = () => {
  const initialState = {
    result: null,
    diceAmount: 1,
    diceType: "d6",
    modifier: 0,
  };

  const [state, dispatch] = useReducer<Reducer<State, Action>>(
    reducer,
    initialState
  );

  const handleRoll = (amount: number) => {
    const rollNum = state.diceType.split("d")[1];
    if (amount === 1) {
      const roll = rollDice(1, +rollNum!);
      dispatch({ type: "setResult", payload: roll });
    } else {
      const results: number[] = [];
      for (let i = 0; i < amount; i++) {
        const roll = rollDice(1, +rollNum!);
        results.push(roll);
      }
      dispatch({ type: "setResult", payload: results });
    }
  };
  console.log({ state });
  return (
    <div>
      <div className="flex h-screen w-screen flex-col items-center justify-center border-2 border-pink-400">
        <p className=" absolute inset-x-0 top-2 flex justify-center text-4xl">
          High Roller
        </p>
        <div className="flex space-x-8">
          <Modifier />
          <button
            onClick={() => {
              handleRoll(state.diceAmount);
            }}
            className="h-12 w-20 rounded bg-red-700 text-white "
          >
            ROLL
          </button>
        </div>
        <div className="h-1/2 w-full border-2 border-blue-500"></div>
      </div>
      <div className="absolute inset-y-0 left-0 ">
        <DiceList dispatch={dispatch} currentDice={state.diceType} />
      </div>
    </div>
  );
};
export default RollPage;
