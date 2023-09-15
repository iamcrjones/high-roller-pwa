import React from "react";
import type { PrevRes } from "./reducer";

type CurrentRollProps = { prevResults: PrevRes };

const CurrentRoll = React.memo(function Roll({
  prevResults,
}: CurrentRollProps) {
  return (
    <>
      {prevResults[0]?.modifier && prevResults[0]?.modifier !== 0 ? (
        <div
          className="mt-16 flex flex-col items-center space-y-4"
          key={`${prevResults[0]?.roll}${Date.now()}`}
        >
          <p
            className="animate-fade-in text-7xl"
            // key={`${state.prevResults[0]?.roll}${Date.now()}`}
          >
            {prevResults[0]?.roll + prevResults[0]?.modifier}
          </p>
          <p className=" animate-fade-in-slide  text-xl text-gray-400 transition delay-1000">
            {prevResults[0].roll} {prevResults[0].modifier < 0 ? "-" : "+"}{" "}
            {Math.abs(prevResults[0].modifier)}
          </p>
        </div>
      ) : (
        <div className=" flex flex-col items-center space-y-4">
          <p className="animate-fade-in mt-16 flex justify-center text-7xl">
            {prevResults[0]?.roll}
          </p>
          <p></p>
        </div>
      )}
    </>
  );
});
export default CurrentRoll;
