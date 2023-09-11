import React from "react";

type ModalProps = {
  results: number | number[] | undefined;
  close: () => void;
};

function ResultsModal({ results, close }: ModalProps) {
  console.log({ results });
  return (
    <div className=" absolute inset-0 z-40 flex flex-col items-center bg-black opacity-75">
      <div className="flex h-full flex-col justify-between">
        <h1 className="py-8 text-4xl text-white">You Rolled</h1>
        <button onClick={close} className="mb-12 bg-red-700 text-white">
          close
        </button>
      </div>
    </div>
  );
}
export default ResultsModal;
