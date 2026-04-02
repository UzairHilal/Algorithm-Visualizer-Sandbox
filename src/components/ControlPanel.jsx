import { useEffect, useState, useRef } from "react";
import { generateRandomArray } from "../constants";
import { bubbleSort } from "../algorithms/Sorting/BubbleSort";
import { selectionSort } from "../algorithms/Sorting/SelectionSort";
import { animationGenerator, bars } from "../engine/animationGenerator";
import gsap from "gsap";

const masterTl = gsap.timeline({ paused: true });

const ControlPanel = ({ array, setArray, arraySize, setArraySize, speed, setSpeed }) => {

  const animations = useRef([]);
  const currentStep = useRef(0);

  const [currentStateStep, setCurrentStateStep] = useState(0);

  useEffect(() => {
  masterTl.timeScale(speed / 100);
}, [speed]);

  useEffect(() => {
    masterTl.clear();
    animations.current = [];
    currentStep.current = 0;
    setCurrentStateStep(0);

    setArray(generateRandomArray(arraySize, bars, masterTl));
  }, [arraySize, setArray]);

  const handleBubbleSort = () => {
    if (!masterTl.isActive()) {

      animations.current = [];
      masterTl.clear();

      bubbleSort(array, animations.current);
      animationGenerator(speed, animations.current, masterTl);

      masterTl.timeScale(speed / 100); 
      masterTl.play();

      currentStep.current = Math.floor(masterTl.duration() / 2);
      setCurrentStateStep(currentStep.current);
    }
  };

  const handleSelectionSort = () => {
    if (!masterTl.isActive()) {

      animations.current = [];
      masterTl.clear();

      selectionSort(array, animations.current);
      animationGenerator(speed, animations.current, masterTl);

      masterTl.timeScale(speed / 100); 
      masterTl.play();

      currentStep.current = Math.floor(masterTl.duration() / 2);
      setCurrentStateStep(currentStep.current);
    }
  };

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
          onClick={generateArray}
          className="px-4 py-2 bg-[#406093] text-white rounded-md hover:bg-green-700 transition"
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
            }}
          />
          <span>{(speed / 100).toFixed(1)}x</span>
        </div>
        {/* Sorting Buttons */}

        <button
          className="px-3 py-1 bg-indigo-400 rounded-md text-black hover:bg-indigo-500"
          onClick={handleSelectionSort}
        >
          Selection Sort
        </button>

        <button
          className="px-3 py-1 bg-indigo-400 rounded-md text-black hover:bg-indigo-500"
          onClick={handleBubbleSort}
        >
          Bubble Sort
        </button>

        {/* Playback Controls */}

        {/* <button
          className="px-3 py-1 bg-indigo-300 rounded-md text-black hover:bg-indigo-400"
          onClick={stepForward}
        >
          +
        </button>

        <button
          className="px-3 py-1 bg-indigo-300 rounded-md text-black hover:bg-indigo-400"
          onClick={stepBackward}
        >
          -
        </button> */}

        {/* Current Step */}
        <div className="px-2">
          Step: {currentStateStep}
        </div>

      </div>
    </div>
  );
};

export default ControlPanel;