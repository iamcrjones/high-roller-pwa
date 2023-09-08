import { rollDice } from "@/utils/rollDice";
import React, { useState } from "react";

const RollPage = () => {
  const [result, setResult] = useState<number>();
  const handleRoll = () => {
    const roll = rollDice(1, 6);
    setResult(roll);
  };
  console.log({ result });
  return (
    <>
      <h1>why hello there</h1>
      <button onClick={handleRoll} className="bg-pink-400">
        CLICK ME
      </button>
    </>
  );
};
export default RollPage;
