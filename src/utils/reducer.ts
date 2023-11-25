export type State = {
  result: number | null;
  prevResults: PrevRes;
  removedPrevResult: PrevRoll | null;
  diceType: string;
  modifier: number;
  diceDrawerOpen: boolean;
};

export type PrevRoll = { roll: number; modifier: number };
export type PrevRes = PrevRoll[];

export type Action =
  | {
      type: "setResult";
      payload: number | null;
    }
  | { type: "setDiceType"; payload: string }
  | { type: "setModifier"; payload: number }
  | { type: "setPrevResults"; payload: PrevRes }
  | { type: "setRemovedPrev"; payload: PrevRoll }
  | { type: "setDiceDrawerOpen"; payload: boolean };

function reducer(state: State, action: Action): State {
  const { type, payload } = action;
  switch (type) {
    case "setResult":
      return { ...state, result: payload };
    case "setDiceType":
      return { ...state, diceType: payload };
    case "setModifier":
      return { ...state, modifier: payload };
    case "setPrevResults":
      return { ...state, prevResults: payload };
    case "setRemovedPrev":
      return { ...state, removedPrevResult: payload };
    case "setDiceDrawerOpen":
      return { ...state, diceDrawerOpen: payload };
    default:
      return state;
  }
}

export default reducer;
