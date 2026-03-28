import { useEffect, useState } from "react";
import { generateRandomArray } from "../constants";
import { bubbleSort } from "../algorithmsTest/Sorting/BubbleSort";
import { selectionSort } from "../algorithmsTest/Sorting/SelectionSort";
import { comparisonAnimation } from "../engine/animations";
import gsap from "gsap";

let swapped = false;
let animations = [];
let bars = [];

const masterTl = gsap.timeline({ paused: true });
const sorting = (speed) => {
  bars = Array.from(document.getElementsByClassName("bars"));
  const tempBars = [...bars];
  for (let i = 0; i <= animations.length - 1; i++) {
    const [bar1Index, bar2Index] = animations[i].comparison;
    console.log(animations);

    const barA = tempBars[bar1Index];
    const barB = tempBars[bar2Index];

    masterTl.add(comparisonAnimation(barA, barB, speed, "comparison",masterTl, i));

    
    // if (masterTl.currentLabel(`step-${i}`)) {
    //   masterTl.addLabel(`step-${i}`, i);
    // }

    if (animations[i].swap) {
      masterTl.add(comparisonAnimation(barA, barB, speed, "swap",masterTl, i));
      [tempBars[bar1Index], tempBars[bar2Index]] = [
        tempBars[bar2Index],
        tempBars[bar1Index],
      ];
    }
    swapped = true;
  }

  return masterTl;
};

const ControlPanel = ({ array, setArray, arraySize, setArraySize, speed }) => {
  useEffect(() => {
    setArray(generateRandomArray(arraySize, bars));
  }, []);
  const [currentStep, setCurrentStep] = useState(0);

  const handleBubbleSort = () => {
    if (!swapped) {
      bubbleSort(array, animations);
      const masterTl = sorting(speed);
      masterTl.duration(5);
      masterTl.play();
    }
  };
  const handleSelectionSort = () => {
    if (!swapped) {
      selectionSort(array, animations);
      const masterTl = sorting(speed);
      masterTl.play();
    }
  };

  return (
    <div className="z-10 w-full py-3 flex bg-gray-800 ">
      <div className="w-full px-6 flex justify-between text-sm font-bold">
        <button
          onClick={() => {
            swapped = false;
            animations = [];
            setArray(generateRandomArray(arraySize, bars));
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
            onChange={(e) => {
              setArraySize(e.target.value);
              setArray(generateRandomArray(e.target.value, bars));
              swapped = false;
              animations = [];
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
        <input
          className=" bg-indigo-300 rounded-md p-1 text-black "
          type="range"
          defaultValue={0}
          step={1}
          min={0}
          max={430}
          onChange={(e) => {
            setCurrentStep(e.target.value);
              masterTl.seek(masterTl.tweenTo(`step-${e.target.value}`)).pause()
            masterTl.duration(0);
          }}
        />
        +
        {/* <button
          className="bg-indigo-300 rounded-md p-1 text-black "
          onClick={() => {
            setCurrentStep(currentStep-0.5);
            masterTl.progress(`${currentStep}`);
            masterTl.pause();
          }}
        >
          -{currentStep}
        </button> */}
      </div>
    </div>
  );
};

export default ControlPanel;
