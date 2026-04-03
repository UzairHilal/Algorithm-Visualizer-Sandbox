import { useEffect } from "react";
import { generateRandomArray } from "../constants/index";
import { bars } from "../engine/animationGenerator";
import { resetCurrentStep } from "../engine/animations";

const ControlPanel = ({ setArray, arraySize, setArraySize }) => {
  useEffect(() => {
    setArray(generateRandomArray(arraySize, bars));
  }, [arraySize, setArray]);

  const generateArray = () => {
    masterTl.clear();
    animations.current = [];
    currentStep.current = 0;
    setCurrentStateStep(0);

    setArray(generateRandomArray(arraySize, bars, masterTl));
  };

  const stepForward = () => {

    if (2 * currentStep.current + 1 < masterTl.duration()) {
      currentStep.current++;
    }

    masterTl.tweenTo(`step-${2 * currentStep.current + 1}`);

    setCurrentStateStep(currentStep.current);
  };

  const stepBackward = () => {

    if (currentStep.current > 0) {
      currentStep.current--;
    }

    masterTl.tweenTo(`step-${2 * currentStep.current + 1}`);

    setCurrentStateStep(currentStep.current);
  };

  return (
    <div className="z-10 w-full py-3 bg-gray-800">

      <div className="w-full px-4 flex flex-wrap gap-3 items-center justify-between text-sm font-bold">

        {/* Generate Array */}
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

        {/* Array Size */}
        <div className="flex items-center gap-2">

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
        <div className="flex flex-row justify-center items-center gap-3">
          <label htmlFor="speed">Speed</label>
          <input
            type="range"
            className="accent-indigo-300 w-24 h-1"
            value={speed}
            min={100}
            max={500}
            onChange={(e) => {
              setSpeed(Number(e.target.value));
              setArraySize(e.target.value);
              setArray(generateRandomArray(e.target.value, bars));
              resetCurrentStep();
              // setCurrentStateStep(0);
            }}
          />
          <span>{(speed / 100).toFixed(1)}x</span>
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;