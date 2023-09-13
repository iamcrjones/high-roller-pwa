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
    prevResults: [],
    diceType: "d6",
    modifier: 0,
  };

  const [state, dispatch] = useReducer<Reducer<State, Action>>(
    reducer,
    initialState
  );

  const handleRoll = () => {
    const rollNum = state.diceType.split("d")[1];
    const roll = rollDice(1, +rollNum!);
    dispatch({ type: "setResult", payload: roll });
    const prev = [...state.prevResults];
    if (!state.prevResults.length) {
      prev.push({
        roll: roll,
        modifier: state.modifier,
      });
      dispatch({
        type: "setPrevResults",
        payload: prev,
      });
    }
    if (state.prevResults.length && state.prevResults.length < 5) {
      prev.unshift({ roll: roll, modifier: state.modifier });
      dispatch({ type: "setPrevResults", payload: prev });
    }
    if (state.prevResults.length && state.prevResults.length === 5) {
      prev.splice(-1, 1);
      prev.unshift({ roll: roll, modifier: state.modifier });
      dispatch({ type: "setPrevResults", payload: prev });
    }
  };
  return (
    <div>
      <div className="flex h-screen w-screen flex-col items-center justify-center border-2 border-pink-400">
        <p className=" absolute inset-x-0 top-2 flex justify-center text-4xl">
          High Roller
        </p>
        <div className="flex items-center space-x-8">
          <Modifier dispatch={dispatch} modifier={state.modifier} />
          <button
            onClick={() => {
              handleRoll();
            }}
            className="h-12 w-20 rounded bg-red-700 text-white "
          >
            ROLL
          </button>
        </div>
        <div className="flex h-1/2 w-full flex-col items-center border-2 border-blue-500">
          <p className="mt-3 text-4xl">You Rolled...</p>
          {!!state.prevResults.length && (
            <div>
              {state.prevResults[0]?.modifier &&
              state.prevResults[0]?.modifier !== 0 ? (
                <div className="flex space-x-4">
                  <p className="text-2xl">
                    {state.prevResults[0]?.roll +
                      state.prevResults[0]?.modifier}
                  </p>
                  <p className="text-2xl text-gray-400">
                    {state.prevResults[0].roll}{" "}
                    {state.prevResults[0].modifier < 0 ? "-" : "+"}{" "}
                    {Math.abs(state.prevResults[0].modifier)}
                  </p>
                </div>
              ) : (
                <p className="text-2xl">{state.result}</p>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="absolute inset-y-0 left-0 ">
        <DiceList dispatch={dispatch} currentDice={state.diceType} />
      </div>
    </div>
  );
};
export default RollPage;
