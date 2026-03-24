import { useEffect } from "react";
import { generateRandomArray } from "../constants";
import { bubbleSort } from "../algorithmsTest/Sorting/BubbleSort";
import { selectionSort } from "../algorithmsTest/Sorting/SelectionSort";
import { comparisonAnimation } from "../engine/animations";
import { swapBars } from "../engine/animations";
// import { animations } from "../algorithmsTest/Sorting/BubbleSort";

let swapped = false;
let animations = [];
let bars = [];

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const sorting = async (speed) => {
  bars = Array.from(document.getElementsByClassName("bars"));
  for (let i = 0; i <= animations.length - 1; i++) {
    comparisonAnimation(
      bars[animations[i].comparison[0]],
      bars[animations[i].comparison[1]],
      speed
    );
    await sleep((1 / speed) * 1000);
    if (animations[i].swap) {
      await swapBars(
        bars[animations[i].comparison[0]],
        bars[animations[i].comparison[1]],
        speed
      );
      [bars[animations[i].comparison[0]], bars[animations[i].comparison[1]]] = [
        bars[animations[i].comparison[1]],
        bars[animations[i].comparison[0]],
      ];
    }
  }
  swapped = true;
};

const ControlPanel = ({ array, setArray, arraySize, setArraySize, speed }) => {
  useEffect(() => {
    setArray(generateRandomArray(arraySize, bars));
  }, []);

  const handleBubbleSort = () => {
    if (!swapped) {
      bubbleSort(array, animations);
      sorting(speed);
    }
  };
  const handleSelectionSort = () => {
    if (!swapped) {
      selectionSort(array, animations);
      sorting(speed);
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
      </div>
    </div>
  );
};

export default ControlPanel;
