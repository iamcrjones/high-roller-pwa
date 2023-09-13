import type { Action } from "@/utils/reducer";
import React from "react";

type ModifierProps = { dispatch: React.Dispatch<Action>; modifier: number };
const Modifier = ({ dispatch, modifier }: ModifierProps) => {
  return (
    <div className="flex space-x-2">
      <div className="flex w-8 flex-col">
        <button
          className="rounded-full rounded-b-none bg-gray-300 active:bg-pink-600"
          onClick={() =>
            dispatch({ type: "setModifier", payload: modifier + 1 })
          }
        >
          u
        </button>
        <button
          className="rounded-full rounded-t-none bg-gray-300"
          onClick={() =>
            dispatch({ type: "setModifier", payload: modifier - 1 })
          }
        >
          d
        </button>
      </div>
      <input
        placeholder="0"
        className="w-16 border-2 border-gray-400"
        onChange={(e) =>
          dispatch({ type: "setModifier", payload: +e.target.value })
        }
        value={modifier}
      />
    </div>
  );
};

export default Modifier;
