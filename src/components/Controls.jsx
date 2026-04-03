import Button from "./ui/Button";
import gsap from "gsap"
import { handleSortingAnimationGenerator } from "../constants";

let animations = [];

const masterTl = gsap.timeline({ paused: true });

const Controls = ({ currentAlgorithm, setCurrentAlgorithm, array, speed, currentStep,setCurrentStateStep }) => {
  return (
    <div className="flex justify-center items-center opacity-100 bg-gray-700">
      <div className="py-7 flex flex-row  justify-between text-xs bottom-10 opacity-100 transition-all px-9">
        <Button title={"<"} className="" onClick={() => alert("hello")} />
        <Button title={"Play"} onClick={() => {
          handleSortingAnimationGenerator(array,animations, speed, currentStep,setCurrentStateStep);
        }}/>
        <Button title={"Pause"} />
        <Button title={">"} />
      </div>

      <div className="w-1 h-14 sm:h-10 bg-gray-600 border border-gray-500 rounded"></div>

      <div className="flex flex-col justify-between text-xs opacity-100 transition-all px-9">
        <div>
          <button
            className=" text-white font-bold rounded-lg px-2 py-1 hover:bg-gray-500"
            onClick={() => setCurrentAlgorithm("BubbleSort")}
          >
            Bubble Sort
          </button>
          <button
            className=" text-white font-bold rounded-lg px-2 py-1 hover:bg-gray-500"
            onClick={() => setCurrentAlgorithm("SelectionSort")}
          >
            Selection Sort
          </button>
          <button
            className=" text-white font-bold rounded-lg px-2 py-1 hover:bg-gray-500"
            onClick={() => setCurrentAlgorithm("InsertionSort")}
          >
            Insertion Sort
          </button>
        </div>
        <div>
          <button
            className=" text-white font-bold rounded-lg px-2 py-1 hover:bg-gray-500"
            onClick={() => setCurrentAlgorithm("QuickSort")}
          >
            Quick Sort
          </button>
          <button
            className=" text-white font-bold rounded-lg px-2 py-1 hover:bg-gray-500"
            onClick={() => setCurrentAlgorithm("MergeSort")}
          >
            Merge Sort
          </button>
        </div>
      </div>
    </div>
  );
};

export default Controls;
