import { useEffect } from "react";
import { generateRandomArray } from "../constants";
import { bubbleSort } from "../algorithmsTest/Sorting/BubbleSort";
import { selectionSort } from "../algorithmsTest/Sorting/SelectionSort";
import { comparisonAnimation } from "../engine/animations";
import { swapBars } from "../engine/animations";
import gsap from "gsap";
// import { animations } from "../algorithmsTest/Sorting/BubbleSort";

let swapped = false;
let animations = [];
let bars = [];

// const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const masterTl = gsap.timeline({ paused: true });
const sorting = (speed) => {
  bars = Array.from(document.getElementsByClassName("bars"));
  const tempBars = [...bars];
  for (let i = 0; i <= animations.length - 1; i++) {
    const [bar1Index, bar2Index] = animations[i].comparison;

    const barA = tempBars[bar1Index];
    const barB = tempBars[bar2Index];

    masterTl.add(comparisonAnimation(barA, barB, speed, "comparison"));
    if (animations[i].swap) {
      masterTl.add(comparisonAnimation(barA, barB, speed, "swap"));
      [tempBars[bar1Index], tempBars[bar2Index]] = [
        tempBars[bar2Index],
        tempBars[bar1Index],
      ];
    }
    // swapped = true;
  }

  return masterTl;
};

const ControlPanel = ({ array, setArray, arraySize, setArraySize, speed }) => {
  useEffect(() => {
    setArray(generateRandomArray(arraySize, bars));
  }, []);

  const handleBubbleSort = () => {
    if (!swapped) {
      bubbleSort(array, animations);
      const masterTl = sorting(speed);
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
            className="accent-indigo-300 w-20 size-1 mx-2"
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
        <button
          className="bg-indigo-300 rounded-md p-1 text-black "
          onClick={() => {
            masterTl.seek(masterTl.time() + 1);
            masterTl.pause()
          }}
          >
          +
        </button>
        <button
          className="bg-indigo-300 rounded-md p-1 text-black "
          onClick={() => {
            masterTl.pause()
            masterTl.seek(masterTl.time() - 1);
          }}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default ControlPanel;
