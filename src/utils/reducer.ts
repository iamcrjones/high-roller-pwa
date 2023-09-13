export type State = {
  result: number | number[] | null;
  diceAmount: number;
  diceType: string;
  modifier: number;
};

export type Action =
  | {
      type: "setResult";
      payload: number | number[] | null;
    }
  | { type: "setDiceAmount"; payload: number }
  | { type: "setDiceType"; payload: string }
  | { type: "setModifier"; payload: number };

function reducer(state: State, action: Action) {
  const { type, payload } = action;
  switch (type) {
    case "setResult":
      return { ...state, result: payload };
    case "setDiceAmount":
      return { ...state, diceAmount: payload };
    case "setDiceType":
      return { ...state, diceType: payload };
    case "setModifier":
      return { ...state, modifier: payload };
    default:
      return state;
  }
}

export default reducer;
