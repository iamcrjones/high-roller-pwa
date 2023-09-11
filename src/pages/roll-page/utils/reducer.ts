export type State = {
  result: number | number[] | undefined;
  diceAmount: number;
  diceType: string;
  showModal: boolean;
};

export type Action =
  | {
      type: "setResult";
      payload: number | number[] | undefined;
    }
  | { type: "setDiceAmount"; payload: number }
  | { type: "setDiceType"; payload: string }
  | { type: "setShowModal"; payload: boolean };

export function reducer(state: State, action: Action) {
  const { type, payload } = action;
  switch (type) {
    case "setResult":
      return { ...state, result: payload };
    case "setDiceAmount":
      return { ...state, diceAmount: payload };
    case "setDiceType":
      return { ...state, diceType: payload };
    case "setShowModal":
      return { ...state, showModal: payload };
    default:
      return state;
  }
}
