export type State = {
  result: number | null;
  prevResults: PrevRes;
  removedPrevResult: PrevRoll | null;
  diceType: string;
  modifier: number;
};

type PrevRoll = { roll: number; modifier: number };
type PrevRes = PrevRoll[];

export type Action =
  | {
      type: "setResult";
      payload: number | null;
    }
  | { type: "setDiceType"; payload: string }
  | { type: "setModifier"; payload: number }
  | { type: "setPrevResults"; payload: PrevRes }
  | { type: "setRemovedPrev"; payload: PrevRoll };

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
    default:
      return state;
  }
}

export default reducer;
