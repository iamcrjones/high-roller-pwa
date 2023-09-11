import { rollDice } from "@/utils/rollDice";
// import { Canvas } from "@react-three/fiber";
import React, { useState } from "react";
// import {
//   BoxProps,
//   Physics,
//   PlaneProps,
//   useBox,
//   usePlane,
// } from "@react-three/cannon";
// import { BufferGeometry, Mesh } from "three";

const RollPage = () => {
  //   function Cube(props: BoxProps) {
  //     const [ref] = useBox(() => ({ mass: 1, position: [0, 5, 0], ...props }));
  //     return (
  //       <mesh
  //         ref={ref as React.RefObject<Mesh<BufferGeometry>>}
  //         receiveShadow
  //         castShadow
  //       >
  //         <boxGeometry />
  //         <meshLambertMaterial color="green" />
  //       </mesh>
  //     );
  //   }

  //   function Plane(props: PlaneProps) {
  //     const [ref, api] = usePlane(() => ({
  //       rotation: [-Math.PI / 2, 0, 0],
  //       ...props,
  //     }));
  //     console.log({ api });
  //     return (
  //       <mesh ref={ref as React.RefObject<Mesh<BufferGeometry>>} receiveShadow>
  //         {/* <planeGeometry args={[1000, 1000]} /> */}
  //         <shadowMaterial color="#ffffff" transparent opacity={0.4} />
  //       </mesh>
  //     );
  //   }
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
      <button
        onClick={() => handleRoll(diceAmount)}
        className="bg-red-700 text-white"
      >
        ROLL
      </button>
      <select
        defaultValue={diceAmount}
        onChange={(e) => setDiceAmount(+e.target.value)}
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
{
  /* <div
        id="canvas-container"
        className="-z-10 h-screen w-screen bg-transparent"
      >
        <Canvas
          shadows="soft"
          dpr={[1, 2]}
          gl={{ alpha: true, autoClearColor: true }}
          camera={{ position: [-1, 5, 5], fov: 45 }}
        >
          <color attach="background" args={["undefined"]} />
          <ambientLight />
          <directionalLight
            position={[10, 10, 10]}
            castShadow
            shadow-mapSize={[2048, 2048]}
          />
          <Physics>
            <Cube position={[0.1, 5, 0]} />
            <Plane position={[0, -2.5, 0]} />
          </Physics>
        </Canvas>
      </div>
    </div> */
}
