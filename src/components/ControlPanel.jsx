import { useEffect } from "react";
import { generateRandomArray } from "../constants";
import { bubbleSort } from "../algorithmsTest/Sorting/BubbleSort";

// import { animations } from "../algorithmsTest/Sorting/BubbleSort";

let swapped = false;
let animations = [];

const sorting = (speed) => {
  const bars = document.getElementsByClassName("bars");

  for (let i = 0; i <= animations.length - 1; i++) {
    setTimeout(() => {
      bars[animations[i].comparison[0]].style.backgroundColor = "red";
      bars[animations[i].comparison[1]].style.backgroundColor = "red";

      if (animations[i].swap) {
        setTimeout(() => {
          const tempHeight = bars[animations[i].comparison[0]].style.height;
          bars[animations[i].comparison[0]].style.height =
            bars[animations[i].comparison[1]].style.height;

          bars[animations[i].comparison[1]].style.height = tempHeight;
        }, i * speed);
      }
      setTimeout(() => {
        bars[animations[i].comparison[0]].style.backgroundColor = "#0092b8";
        bars[animations[i].comparison[1]].style.backgroundColor = "#0092b8";
      }, i * speed);
    }, i * speed);
  }
  swapped = true;
};

const ControlPanel = ({ array, setArray, arraySize, setArraySize, speed }) => {
  useEffect(() => {
    setArray(generateRandomArray(arraySize));
  }, []);

  const handleSort = () => {
    if (!swapped) {
      bubbleSort(array, animations);
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
            setArray(generateRandomArray(arraySize));
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
              setArray(generateRandomArray(arraySize));
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
            handleSort();
          }}
        >
          Sort
        </button>
      </div>
    </div>
  );
};

export default ControlPanel;
