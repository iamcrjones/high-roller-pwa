import React from "react";

type ModifierProps = { dispatch: (val: number) => void; modifier: number };
const Modifier = ({ dispatch, modifier }: ModifierProps) => {
  return (
    <div className="mb-6 flex flex-col text-gray-900">
      <p className="text-md text-center text-gray-400">Modifier</p>
      <div className="flex">
        <div
          className=" flex h-10 w-12 items-center justify-center rounded-full rounded-r-none bg-gray-500 active:bg-gray-600"
          onClick={() => dispatch(modifier - 1)}
        >
          <span className="select-none text-2xl">-</span>
        </div>
        {/* <div className="h-10 border-2 border-gray-500"></div> */}
        <input
          placeholder="0"
          className="p-x-4 w-8 bg-gray-500 text-center outline-none"
          name="modifier"
          onChange={(e) => dispatch(+e.target.value || 0)}
          value={modifier}
        />
        <div
          className=" flex h-10 w-12 items-center justify-center rounded-full rounded-l-none bg-gray-500 active:bg-gray-600"
          onClick={() => dispatch(modifier + 1)}
        >
          <span className="mr-1 select-none text-2xl">+</span>
        </div>
      </div>
    </div>
  );
};

export default Modifier;
