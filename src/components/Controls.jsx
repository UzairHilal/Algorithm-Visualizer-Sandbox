import Button from "./ui/Button";
import { useState } from "react";
import {
  handleSortingAnimationGenerator,
  handleStepBack,
  handleStepForward,
} from "../utils/playback";
import { getMasterTl } from "../utils/playback";

let currentStep = 0;

const Controls = ({ currentAlgorithm, setCurrentAlgorithm, array, speed }) => {
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
