import { useEffect } from "react";
import { generateRandomArray } from "../constants/index";
import { bars } from "../engine/animationGenerator";
import { resetCurrentStep } from "../engine/animations";

const ControlPanel = ({
  setArray,
  arraySize,
  setArraySize,
  speed,
  setSpeed,
}) => {
  useEffect(() => {
    setArray(generateRandomArray(arraySize, bars));
  }, [arraySize, setArray]);

  return (
    <div className="z-10 w-full py-3 bg-gray-800">
      <div className="w-full px-4 flex gap-3 items-center justify-between text-sm font-bold">
        {/* Generate Array */}
        <button
          onClick={() => {
            setArray(generateRandomArray(arraySize, bars));
            resetCurrentStep();
            // setCurrentStateStep(0);
          }}
          className="text-xs sm:text-base bg-indigo-300 rounded-md p-1 text-black "
        >
          Generate Array
        </button>

        {/* Array Size */}
        <div className="text-xs sm:text-base flex items-center gap-2">
          <label htmlFor="range">Array Size</label>

          <input
            type="range"
            min={5}
            max={30}
            value={arraySize}
            onChange={(e) => {
              const value = Number(e.target.value);
              setArraySize(value);
            }}
            className="accent-indigo-300 w-24 h-1"
          />

          <span className="w-6 text-center">{arraySize}</span>
        </div>

        {/* manage speed  */}
        <div className="flex flex-row justify-center items-center gap-3 text-xs sm:text-base">
          <label htmlFor="speed">Speed</label>
          <input
            type="range"
            className="accent-indigo-300 w-24 h-1"
            value={speed}
            step={1}
            min={100}
            max={500}
            onChange={(e) => {
              setSpeed(Number(e.target.value));
            }}
          />
          <span>{(speed / 100).toFixed(1)}x</span>
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;
