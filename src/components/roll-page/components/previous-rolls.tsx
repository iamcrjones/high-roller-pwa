import React from "react";
import type { PrevRoll } from "../../../utils/reducer";

type PrevRollsProps = {
  prevResults: { roll: number; modifier: number }[];
  removedRoll: PrevRoll | null;
};
const PreviousRolls = React.memo(function Rolls({
  prevResults,
  removedRoll,
}: PrevRollsProps) {
  return (
    <div className="mt-24">
      <p className="mb-2 text-center text-xl">Previous Rolls</p>
      <div className="flex flex-col items-center justify-center">
        {prevResults.map((result, ix) => {
          return (
            <div
              key={`${result.roll}${result.modifier}${ix}${Date.now()}`}
              className={`${
                ix === 0 ? "animate-fade-in-slide" : "animate-slidey-boy"
              }`}
            >
              {result.modifier && result.modifier !== 0 ? (
                <div className="animate-slide-down flex space-x-4">
                  <p className="text-xl">{result.roll + result.modifier}</p>
                  <p className="text-xl text-gray-400">
                    {result.roll} {result.modifier < 0 ? "-" : "+"}{" "}
                    {Math.abs(result.modifier)}
                  </p>
                </div>
              ) : (
                <p className="text-xl">{result.roll}</p>
              )}
            </div>
          );
        })}
      </div>
      {removedRoll ? (
        <div
          className="flex animate-slide-out items-center justify-center"
          key={`${removedRoll.roll}${Date.now()}`}
        >
          {removedRoll.modifier && removedRoll.modifier !== 0 ? (
            <div className="flex space-x-4">
              <p className="text-xl">
                {removedRoll.roll + removedRoll.modifier}
              </p>
              <p className="text-xl text-gray-400">
                {removedRoll.roll} {removedRoll.modifier < 0 ? "-" : "+"}{" "}
                {Math.abs(removedRoll.modifier)}
              </p>
            </div>
          ) : (
            <p className="text-xl">{removedRoll.roll}</p>
          )}
        </div>
      ) : null}
    </div>
  );
});
export default PreviousRolls;
