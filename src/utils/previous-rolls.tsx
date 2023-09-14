import React from "react";

type PrevRollsProps = { prevResults: { roll: number; modifier: number }[] };
const PreviousRolls = ({ prevResults }: PrevRollsProps) => {
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
    </div>
  );
};
const MemPrev = React.memo(PreviousRolls);
export { MemPrev };
