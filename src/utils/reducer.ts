export type State = {
  result: number | null;
  prevResults: PrevRes;
  diceType: string;
  modifier: number;
};

type PrevRes = { roll: number; modifier: number }[];

export type Action =
  | {
      type: "setResult";
      payload: number | null;
    }
  | { type: "setDiceType"; payload: string }
  | { type: "setModifier"; payload: number }
  | { type: "setPrevResults"; payload: PrevRes };

function reducer(state: State, action: Action) {
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
    default:
      return state;
  }
}

export default reducer;
