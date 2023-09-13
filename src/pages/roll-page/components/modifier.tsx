import React, { useState } from "react";

const Modifier = () => {
  const [val, setVal] = useState(0);
  console.log({ val });
  return (
    <div className="flex">
      <input
        placeholder="0"
        className="border-2 border-gray-400"
        onChange={(e) => setVal(+e.target.value)}
        value={val}
      />
    </div>
  );
};

export default Modifier;
