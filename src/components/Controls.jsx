import Button from "./ui/Button";
import { useState } from "react";
import {
  handleSortingAnimationGenerator,
  handleStepBack,
  handleStepForward,
} from "../utils/playback";
import { getMasterTl } from "../utils/playback";
import { generateRandomArray } from "../constants";
import { bars } from "../engine/animationGenerator";

let currentStep = 0;

const Controls = ({
  currentAlgorithm,
  setCurrentAlgorithm,
  array,
  arraySize,
  setArray,
  speed,
}) => {
  const [currentStateStep, setCurrentStateStep] = useState(currentStep);

  return (
    <div className="flex justify-center items-center opacity-100 bg-gray-700">
      <div className="py-7 flex flex-row justify-between text-xs bottom-10 opacity-100 transition-all items-center px-9">
        <div className="w-10 h-10 px-2 flex justify-center items-center">{`${currentStateStep}/${
          getMasterTl().duration() / 2
        }`}</div>
        <Button
          title={"<"}
          className=""
          onClick={() => {
            currentStep = handleStepBack(setCurrentStateStep, currentStep);
          }}
        />
        <Button
          title={
            getMasterTl().duration() == 0 && !getMasterTl().isActive()
              ? "Play"
              : "Pause"
          }
          onClick={() => {
            const tempMasterTl = getMasterTl();
            if (tempMasterTl.duration() == 0 && !tempMasterTl.isActive()) {
              currentStep = handleSortingAnimationGenerator(
                array,
                speed,
                currentStep,
                currentAlgorithm
              );
            } else if (tempMasterTl.duration() > 0 && tempMasterTl.isActive()) {
              tempMasterTl.pause();
            } else {
              console.log(tempMasterTl.duration());
              tempMasterTl.duration(speed);
              tempMasterTl.tweenFromTo(`step-${2 * currentStep + 1}`).play();
              currentStep = tempMasterTl.duration() / 2;

              setCurrentStateStep(tempMasterTl.duration() / 2);
            }
            setCurrentStateStep(currentStep);
          }}
        />
        <Button
          title={">"}
          onClick={() => {
            currentStep = handleStepForward(setCurrentStateStep, currentStep);
            setCurrentStateStep(currentStep);
          }}
        />
      </div>

      <div className="w-1 h-14 sm:h-10 bg-gray-600 rounded"></div>

      <div className="hidden lg:flex justify-between items-center text-xs opacity-100 transition-all px-9">
        {/* <p className="mx-2 text-xs md:text-sm">Algorithm </p> */}
        <div
          name=""
          id=""
          className="p-1 bg-gray-800 rounded-md text-xs md:text-sm"
          defaultValue={0}
          onChange={(e) => {
            setCurrentAlgorithm(e.target.value);
            setArray(generateRandomArray(arraySize, bars));
          }}
          onClick={() => {}}
        >
          <button className=" text-white font-bold rounded-lg px-2 py-1 hover:bg-gray-500">
            BubbleSort
          </button>
          <button className=" text-white font-bold rounded-lg px-2 py-1 hover:bg-gray-500">
            SelectionSort
          </button>
          <button className=" text-white font-bold rounded-lg px-2 py-1 hover:bg-gray-500">
            InsertionSort
          </button>

          <button className=" text-white font-bold rounded-lg px-2 py-1 hover:bg-gray-500">
            QuickSort
          </button>
          <button className=" text-white font-bold rounded-lg px-2 py-1 hover:bg-gray-500">
            MergeSort
          </button>
        </div>
      </div>

      <div className="lg:hidden flex justify-between items-center text-xs opacity-100 transition-all px-9">
        <p className="mx-2 text-xs md:text-sm">Algorithm </p>
        <select
          name=""
          id=""
          className="p-1 bg-gray-800 rounded-md text-xs  md:text-sm"
          defaultValue={0}
          onChange={(e) => {
            setCurrentAlgorithm(e.target.value);
            setArray(generateRandomArray(arraySize, bars));
          }}
          onClick={() => {}}
        >
          <option className=" text-white font-bold rounded-lg px-2 py-1 hover:bg-gray-500">
            BubbleSort
          </option>
          <option className=" text-white font-bold rounded-lg px-2 py-1 hover:bg-gray-500">
            SelectionSort
          </option>
          <option className=" text-white font-bold rounded-lg px-2 py-1 hover:bg-gray-500">
            InsertionSort
          </option>

          <option className=" text-white font-bold rounded-lg px-2 py-1 hover:bg-gray-500">
            QuickSort
          </option>
          <option className=" text-white font-bold rounded-lg px-2 py-1 hover:bg-gray-500">
            MergeSort
          </option>
        </select>
      </div>
    </div>
  );
};

export default Controls;
