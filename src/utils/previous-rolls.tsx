import React from "react";
import type { PrevRoll } from "./reducer";

type PrevRollsProps = {
  prevResults: { roll: number; modifier: number }[];
  removedRoll: PrevRoll | null;
};
const PreviousRolls = ({ prevResults, removedRoll }: PrevRollsProps) => {
  console.log("in prev");
  return (
    <div>
      <p className="text-2xl">Rolls</p>
      {prevResults.map((result, ix) => {
        return (
          <div
            key={`${result.roll}${result.modifier}${ix}${Date.now()}`}
            className={`${
              ix === 0 ? "animate-slide-down-0" : "animate-slide-down-1"
            }`}
          >
            {result.modifier && result.modifier !== 0 ? (
              <div className="animate-slide-down flex space-x-4">
                <p className="text-2xl">{result.roll + result.modifier}</p>
                <p className="text-2xl text-gray-400">
                  {result.roll} {result.modifier < 0 ? "-" : "+"}{" "}
                  {Math.abs(result.modifier)}
                </p>
              </div>
            ) : (
              <p className="text-2xl">{result.roll}</p>
            )}
          </div>
        );
      })}
      {removedRoll ? (
        <div
          className="animate-slide-out"
          key={`${removedRoll.roll}${Date.now()}`}
        >
          {removedRoll.modifier && removedRoll.modifier !== 0 ? (
            <div className="animate-slide-down flex space-x-4">
              <p className="text-2xl">
                {removedRoll.roll + removedRoll.modifier}
              </p>
              <p className="text-2xl text-gray-400">
                {removedRoll.roll} {removedRoll.modifier < 0 ? "-" : "+"}{" "}
                {Math.abs(removedRoll.modifier)}
              </p>
            </div>
          ) : (
            <p className="text-2xl">{removedRoll.roll}</p>
          )}
        </div>
      ) : null}
    </div>
  );
};
const MemPrev = React.memo(PreviousRolls);
export { MemPrev };
