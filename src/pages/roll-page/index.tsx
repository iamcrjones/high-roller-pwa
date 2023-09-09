import { rollDice } from "@/utils/rollDice";
import React, { useState } from "react";

const RollPage = () => {
  const [result, setResult] = useState<number | number[]>();
  const [diceAmount, setDiceAmount] = useState(1);
  const handleRoll = (amount: number) => {
    console.log({ amount });
    if (amount === 1) {
      const roll = rollDice(1, 6);
      setResult(roll);
    } else {
      const results: number[] = [];
      for (let i = 0; i < amount; i++) {
        const roll = rollDice(1, 6);
        results.push(roll);
      }
      console.log({ results });
      setResult(results);
    }
  };
  console.log({ result });
  return (
    <div className="flex flex-col space-y-4">
      <h1>why hello there</h1>
      <button onClick={() => handleRoll(diceAmount)} className="bg-pink-400">
        ROLL
      </button>
      <select
        defaultValue={diceAmount}
        onChange={(e) => setDiceAmount(+e.target.value)}
        className="bg-black text-red-400"
      >
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
        <option value={6}>6</option>
      </select>
      {result && typeof result === "object" && result.length > 1 ? (
        <h1>
          You rolled{" "}
          {result.map((r, ix) => {
            return <h1 key={ix}>{r}</h1>;
          })}
        </h1>
      ) : (
        <h1>You rolled {result}</h1>
      )}
    </div>
  );
};
export default RollPage;
