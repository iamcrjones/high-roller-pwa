import { rollDice } from "@/utils/rollDice";
import React, { Reducer, useReducer } from "react";
import ResultsModal from "./components/results-modal";
import { Action, State, reducer } from "./utils/reducer";

const RollPage = () => {
  const initialState = {
    result: undefined,
    diceAmount: 1,
    diceType: "d6",
    showModal: false,
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
  const handleClose = () => {
    dispatch({ type: "setShowModal", payload: false });
    dispatch({ type: "setResult", payload: undefined });
  };
  return (
    <div className="flex flex-col space-y-4">
      <h1>why hello there</h1>
      <button
        onClick={() => {
          handleRoll(state.diceAmount);
          dispatch({ type: "setShowModal", payload: true });
        }}
        className="bg-red-700 text-white"
      >
        ROLL
      </button>
      <select
        defaultValue={state.diceAmount}
        onChange={(e) =>
          dispatch({ type: "setDiceAmount", payload: +e.target.value })
        }
      >
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
        <option value={6}>6</option>
      </select>
      <select
        defaultValue={state.diceType}
        onChange={(e) =>
          dispatch({ type: "setDiceType", payload: e.target.value })
        }
      >
        <option value={"d6"}>d6</option>
        <option value={"d8"}>d8</option>
        <option value={"d10"}>d10</option>
        <option value={"d12"}>d12</option>
        <option value={"d20"}>d20</option>
      </select>
      <div className="space-y-0">
        {state.showModal && (
          <ResultsModal results={state.result} close={handleClose} />
        )}
      </div>
    </div>
  );
};
export default RollPage;
