import type { Action, State } from "./reducer";
import { rollDice } from "./rollDice";

export const handleRoll = (state: State, dispatch: React.Dispatch<Action>) => {
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
