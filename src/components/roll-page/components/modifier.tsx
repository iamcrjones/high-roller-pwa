import React from "react";

type ModifierProps = { dispatch: (val: number) => void; modifier: number };
const Modifier = ({ dispatch, modifier }: ModifierProps) => {
  return (
    <div className="mb-6 flex flex-col ">
      <p className="text-md text-center ">Modifier</p>
      <div className="flex">
        <div
          className=" flex h-10 w-12 items-center justify-center rounded-full rounded-r-none bg-gray-300 active:bg-gray-400"
          onClick={() => dispatch(modifier - 1)}
        >
          <span className="select-none text-2xl text-gray-900">-</span>
        </div>
        {/* <div className="h-10 border-2 border-gray-500"></div> */}
        <input
          placeholder="0"
          className="p-x-4 w-8 bg-gray-300 text-center text-gray-900 outline-none"
          name="modifier"
          onChange={(e) => dispatch(+e.target.value || 0)}
          value={modifier}
        />
        <div
          className=" flex h-10 w-12 items-center justify-center rounded-full rounded-l-none bg-gray-300 active:bg-gray-400"
          onClick={() => dispatch(modifier + 1)}
        >
          <span className="mr-1 select-none text-2xl text-gray-900">+</span>
        </div>
      </div>
    </div>
  );
};

export default Modifier;
