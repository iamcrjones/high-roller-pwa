import { rollDice } from "@/utils/rollDice";
import React, { useReducer } from "react";
import type { Reducer } from "react";
import type { Action, State } from "../../utils/reducer";
import reducer from "../../utils/reducer";
import DiceList from "./components/dice-list";
import Modifier from "./components/modifier";
import { MemPrev } from "../../utils/previous-rolls";

const initialState = {
  result: null,
  prevResults: [],
  removedPrevResult: null,
  diceType: "d6",
  modifier: 0,
};
const RollPage = () => {
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
      const prevLast = prev[prev.length - 1];
      if (prevLast === undefined) {
        throw new TypeError(
          "PrevResults is not length of 5. This should never throw"
        );
      }
      dispatch({ type: "setRemovedPrev", payload: prevLast });
      prev.splice(-1, 1);
      prev.unshift({ roll: roll, modifier: state.modifier });
      dispatch({ type: "setPrevResults", payload: prev });
    }
  };
  function handleDiceChange(val: string) {
    dispatch({ type: "setDiceType", payload: val });
  }
  function handleModChange(val: number) {
    dispatch({ type: "setModifier", payload: val });
  }
  return (
    // <div className="h-full border-2 border-green-800">
    <>
      <div className="absolute inset-0 flex flex-col items-center justify-center ">
        <p className=" absolute inset-x-0 top-2 flex justify-center text-4xl">
          High Roller
        </p>
        <div className="flex items-center space-x-6">
          <Modifier dispatch={handleModChange} modifier={state.modifier} />
          <button
            onClick={handleRoll}
            className="h-12 w-20 rounded bg-red-900 active:bg-red-800"
          >
            ROLL
          </button>
        </div>
        <div className="flex h-1/2 w-full flex-col items-center ">
          <div className="flex h-full w-full flex-col items-center justify-between">
            {!!state.prevResults.length && (
              <div>
                <p className="mt-3 text-3xl">You Rolled...</p>
                {state.prevResults[0]?.modifier &&
                state.prevResults[0]?.modifier !== 0 ? (
                  <div className="mt-16 flex animate-slide-down-0 flex-col items-center space-y-4">
                    <p className="text-5xl">
                      {state.prevResults[0]?.roll +
                        state.prevResults[0]?.modifier}
                    </p>
                    <p className="text-4xl text-gray-400">
                      {state.prevResults[0].roll}{" "}
                      {state.prevResults[0].modifier < 0 ? "-" : "+"}{" "}
                      {Math.abs(state.prevResults[0].modifier)}
                    </p>
                  </div>
                ) : (
                  <p className="mt-16 flex animate-slide-down-0 justify-center text-5xl">
                    {state.result}
                  </p>
                )}
              </div>
            )}
            <div className="h-1/2 w-full ">
              {!!state.prevResults.length ? (
                <MemPrev
                  prevResults={state.prevResults}
                  removedRoll={state.removedPrevResult}
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <DiceList dispatch={handleDiceChange} currentDice={state.diceType} />
      {/* </div> */}
    </>
  );
};
export default RollPage;
