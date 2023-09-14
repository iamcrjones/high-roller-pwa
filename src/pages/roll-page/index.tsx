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
      <div className="flex h-screen w-screen flex-col items-center justify-center ">
        <p className=" absolute inset-x-0 top-2 flex justify-center text-4xl">
          High Roller
        </p>
        <div className="flex items-center space-x-6">
          <Modifier dispatch={dispatch} modifier={state.modifier} />
          <button
            onClick={() => {
              handleRoll();
            }}
            className="h-12 w-20 rounded bg-red-700 text-white active:bg-red-800"
          >
            ROLL
          </button>
        </div>
        <div className="flex h-1/2 w-full flex-col items-center border-2 border-blue-500">
          <div className="flex h-full flex-col items-center justify-between">
            {!!state.prevResults.length && (
              <div>
                <p className="mt-3 text-4xl">You Rolled...</p>
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
            <div className="h-1/2 w-full border-2 border-pink-200">
              {!!state.prevResults.length && (
                <div>
                  <p className="text-2xl">Rolls</p>
                  {state.prevResults.map((result, ix) => {
                    console.log({ result, ix });
                    return (
                      <div
                        key={`${result.roll}${
                          result.modifier
                        }${ix}${Date.now()}`}
                        className={`${
                          // "animate-slide-down-0"
                          ix === 0
                            ? "animate-slide-down-0"
                            : "animate-slide-down-1"
                        }`}
                      >
                        {result.modifier && result.modifier !== 0 ? (
                          <div className="animate-slide-down flex space-x-4">
                            <p className="text-2xl">
                              {result.roll + result.modifier}
                            </p>
                            <p className="text-2xl text-gray-400">
                              {result.roll} {result.modifier < 0 ? "-" : "+"}{" "}
                              {Math.abs(result.modifier)}
                            </p>
                          </div>
                        ) : (
                          <p className="text-2xl">{result.roll}</p>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-y-0 left-0 ">
        <DiceList dispatch={dispatch} currentDice={state.diceType} />
      </div>
    </div>
  );
};
export default RollPage;
