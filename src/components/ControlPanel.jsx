import { useEffect } from "react";
import { generateRandomArray } from "../constants/index";
import { bars } from "../engine/animationGenerator";
import { resetCurrentStep } from "../engine/animations";

const ControlPanel = ({ setArray, arraySize, setArraySize }) => {
  useEffect(() => {
    setArray(generateRandomArray(arraySize, bars));
  }, [arraySize, setArray]);

  return (
    <div className="z-10 w-full py-3 flex bg-gray-800 overflow-hidden">
      <div className="w-full px-6 flex justify-between text-sm font-bold">
        <button
          onClick={() => {
            setArray(generateRandomArray(arraySize, bars));
            resetCurrentStep();
            // setCurrentStateStep(0);
          }}
          className="bg-indigo-300 rounded-md p-1 text-black "
        >
          Generate Array
        </button>
        {/* SEt the size/length of array */}
        <div className="flex  justify-center items-center ">
          <label htmlFor="range">Array Size</label>
          <input
            type="range"
            min={5}
            max={30}
            defaultValue={5}
            onChange={(e) => {
              setArraySize(e.target.value);
              setArray(generateRandomArray(e.target.value, bars));
              resetCurrentStep();
              // setCurrentStateStep(0);
            }}
            className="accent-indigo- 300 w-20 size-1 mx-2"
          />
          <span className="text-right w-2">{arraySize}</span>
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;
