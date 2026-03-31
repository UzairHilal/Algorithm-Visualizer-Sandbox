import { useEffect, useState } from "react";
import { generateRandomArray } from "../constants";
import { bubbleSort } from "../algorithms/Sorting/BubbleSort";
import { selectionSort } from "../algorithms/Sorting/SelectionSort";
import { animationGenerator } from "../engine/animationGenerator";
import { bars } from "../engine/animationGenerator";
import gsap from "gsap";

let currentStep = 0;
let animations = [];

const masterTl = gsap.timeline({ paused: true });

const ControlPanel = ({ array, setArray, arraySize, setArraySize, speed }) => {
  useEffect(() => {
    setArray(generateRandomArray(arraySize, bars, masterTl));
  }, [arraySize, setArray]);
  const [currentStateStep, setCurrentStateStep] = useState(currentStep);

  const handleBubbleSort = () => {
    if (!masterTl.isActive()) {
      bubbleSort(array, animations);
      animationGenerator(speed, animations, masterTl);
      masterTl.duration(speed);
      masterTl.play();
      currentStep = masterTl.duration() / 2;
      setCurrentStateStep(masterTl.duration() / 2);
    }
  };

  const handleSelectionSort = () => {
    if (!masterTl.isActive()) {
      selectionSort(array, animations);
      animationGenerator(speed, animations, masterTl);
      masterTl.duration(speed);
      masterTl.play();
      currentStep = masterTl.duration() / 2;
      setCurrentStateStep(masterTl.duration() / 2);
    }
  };

  return (
    <div className="z-10 w-full py-3 flex bg-gray-800 overflow-hidden">
      <div className="w-full px-6 flex justify-between text-sm font-bold">
        <button
          onClick={() => {
            animations = [];
            setArray(generateRandomArray(arraySize, bars, masterTl));
            currentStep = 0;
            setCurrentStateStep(0);
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
              setArray(generateRandomArray(e.target.value, bars, masterTl));
              animations = [];
              currentStep = 0;
              setCurrentStateStep(0);
            }}
            className="accent-indigo- 300 w-20 size-1 mx-2"
          />
          <span className="text-right w-2">{arraySize}</span>
        </div>
        <button>Algorithm</button>
        <button
          className="bg-indigo-300 rounded-md p-1 text-black "
          onClick={() => {
            handleSelectionSort();
          }}
        >
          Selection Sort
        </button>
        <button
          className="bg-indigo-300 rounded-md p-1 text-black "
          onClick={() => {
            handleBubbleSort();
          }}
        >
          Bubble Sort
        </button>
        {/* playback contorl buttons */}

        {/* TODO: Fix Bug / When + is pressed the 2nd step is displayed not the first */}
        <button
          className="bg-indigo-300 rounded-md p-1 text-black "
          onClick={() => {
            currentStep > 0 ? --currentStep : currentStep;
            masterTl.seek(masterTl.tweenTo(`step-${2 * currentStep + 1}`));
            setCurrentStateStep(currentStep);
            masterTl.duration(0);
          }}
        >
          {"<"}
        </button>
        <button
          className="bg-indigo-300 rounded-md p-1 text-black "
          onClick={() => {
            currentStep >= 0 && 2 * currentStep + 1 < masterTl.duration()
              ? ++currentStep
              : currentStep;
            masterTl.seek(masterTl.tweenTo(`step-${2 * currentStep + 1}`));
            setCurrentStateStep(currentStep);
            masterTl.duration(0);
          }}
        >
          {">"}
        </button>
        <button
          className="bg-indigo-300 rounded-md p-1 text-black "
          onClick={() => {
            console.log(currentStep)
            masterTl.duration(speed)
            masterTl.tweenFromTo(`step-${2 * currentStep + 1}`).play();
            currentStep = masterTl.duration()/2
            
            setCurrentStateStep(masterTl.duration()/2);
          }}
        >
          ||
        </button>
        <div>{currentStateStep}</div>
      </div>
    </div>
  );
};

export default ControlPanel;
