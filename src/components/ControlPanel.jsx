import { useEffect } from "react";
import { generateRandomArray } from "../constants";
import { bubbleSort } from "../algorithmsTest/Sorting/BubbleSort";

const ControlPanel = ({ array, setArray, arraySize, setArraySize }) => {
  useEffect(() => {
    setArray(generateRandomArray(arraySize));
  }, []);

  const sortedArray = bubbleSort(array);

  return (
    <div className="z-10 w-full py-3 flex bg-gray-800 ">
      <div className="w-full px-6 flex justify-between text-sm font-bold">
        <button
          onClick={() => {
            // generateRandomArray;
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
            onChange={(e) => setArraySize(e.target.value)}
            className="accent-indigo-300 w-20 size-1 mx-2"
          />
          <span className="text-right w-2">{arraySize}</span>
        </div>

        <button>Algorithm</button>

        <button
          className="bg-indigo-300 rounded-md p-1 text-black "
          onClick={() => {
            // console.log(sortedArray);
            setArray(sortedArray);
          }}
        >
          Sort
        </button>
      </div>
    </div>
  );
};

export default ControlPanel;
