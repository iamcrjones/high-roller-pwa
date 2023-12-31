import React, { useReducer } from "react";
import type { Reducer } from "react";
import type { Action, State } from "../../utils/reducer";
import reducer from "../../utils/reducer";
import DiceList from "../../components/roll-page/components/dice-list";
import Modifier from "../../components/roll-page/components/modifier";
import CurrentRoll from "@/utils/current-roll";
import { handleRoll } from "@/utils/handle-roll";
import PreviousRolls from "@/components/roll-page/components/previous-rolls";

const initialState = {
  result: null,
  prevResults: [],
  removedPrevResult: null,
  diceType: "d6",
  modifier: 0,
  diceDrawerOpen: false,
};
const RollPage = () => {
  const [state, dispatch] = useReducer<Reducer<State, Action>>(
    reducer,
    initialState
  );

  function handleDiceChange(val: string) {
    dispatch({ type: "setDiceType", payload: val });
  }
  function handleModChange(val: number) {
    dispatch({ type: "setModifier", payload: val });
  }
  function handleDrawerOpen(val: boolean) {
    dispatch({ type: "setDiceDrawerOpen", payload: val });
  }
  return (
    <>
      <p className=" absolute inset-x-0 top-8 flex justify-center text-4xl font-bold">
        High Roller
      </p>
      <div className="absolute inset-0 flex flex-col items-center justify-center ">
        <div className="flex items-center space-x-6">
          <Modifier dispatch={handleModChange} modifier={state.modifier} />
          <button
            onClick={() => {
              handleRoll(state, dispatch);
              window?.navigator?.vibrate(200);
            }}
            className="h-12 w-20 rounded bg-red-700 active:bg-red-800"
          >
            ROLL
          </button>
        </div>
        <div className="flex h-1/2 w-full flex-col items-center ">
          <div className="flex h-full w-full flex-col items-center justify-between">
            {!!state.prevResults.length && (
              <div>
                <p className="mt-3 text-3xl">You Rolled...</p>
                <CurrentRoll prevResults={state.prevResults} />
              </div>
            )}
            <div className="h-1/2 w-full ">
              {!!state.prevResults.length ? (
                <PreviousRolls
                  prevResults={state.prevResults}
                  removedRoll={state.removedPrevResult}
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <DiceList
        handleDiceChange={handleDiceChange}
        handleDrawerOpen={handleDrawerOpen}
        currentDice={state.diceType}
        open={state.diceDrawerOpen}
      />
    </>
  );
};
export default RollPage;
