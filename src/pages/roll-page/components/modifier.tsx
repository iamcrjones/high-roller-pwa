import type { Action } from "@/utils/reducer";
import React from "react";

type ModifierProps = { dispatch: React.Dispatch<Action>; modifier: number };
const Modifier = ({ dispatch, modifier }: ModifierProps) => {
  return (
    <div className="flex space-x-2">
      <div className="flex">
        <button
          className="h-10 w-12 rounded-full rounded-r-none bg-gray-300 active:bg-gray-400"
          onClick={() =>
            dispatch({ type: "setModifier", payload: modifier - 1 })
          }
        >
          d
        </button>
        <div className="h-10 border-2 border-gray-500"></div>
        <button
          className=" h-10 w-12 rounded-full rounded-l-none bg-gray-300 active:bg-gray-400"
          onClick={() =>
            dispatch({ type: "setModifier", payload: modifier + 1 })
          }
        >
          u
        </button>
      </div>
      <input
        placeholder="0"
        className="w-16 border-2 border-gray-400"
        name="modifier"
        onChange={(e) =>
          dispatch({ type: "setModifier", payload: +e.target.value || 0 })
        }
        value={modifier}
      />
    </div>
  );
};

export default Modifier;
