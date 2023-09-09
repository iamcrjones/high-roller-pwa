import { rollDice } from "@/utils/rollDice";
import React, { useState } from "react";

const RollPage = () => {
  const [result, setResult] = useState<number | number[]>();
  const [diceAmount, setDiceAmount] = useState(1);
  const [diceType, setDiceType] = useState("d6");

  const handleRoll = (amount: number) => {
    const rollNum = diceType.split("d")[1];
    if (amount === 1) {
      const roll = rollDice(1, +rollNum!);
      setResult(roll);
    } else {
      const results: number[] = [];
      for (let i = 0; i < amount; i++) {
        const roll = rollDice(1, +rollNum!);
        results.push(roll);
      }
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
      <select
        defaultValue={diceType}
        onChange={(e) => setDiceType(e.target.value)}
        className="bg-black text-red-400"
      >
        <option value={"d6"}>d6</option>
        <option value={"d8"}>d8</option>
        <option value={"d10"}>d10</option>
        <option value={"d12"}>d12</option>
        <option value={"d20"}>d20</option>
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
