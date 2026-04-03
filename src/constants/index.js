import gsap from "gsap";
import { resetCurrentStep } from "../engine/animations";
import { bubbleSort } from "../algorithms/Sorting/BubbleSort";
import { selectionSort } from "../algorithms/Sorting/SelectionSort";
import { animationGenerator } from "../engine/animationGenerator";

export const algorithmList = ["Sorting", "Searching", "PathFinding", "..."];

// Generate random array
export const generateRandomArray = (arraySize, bars) => {
  const arr = Array.from({ length: arraySize }, () =>
    Math.floor(Math.random() * (500 - 5 + 1) + 5)
  );
  resetCurrentStep();
  // masterTl.clear();
  bars.length && gsap.set(bars, { x: 0, backgroundColor: "" });

  return arr;
};

export const handleSortingAnimationGenerator = (
  array,
  animations,
  speed,
  masterTl,
  currentStep,
  setCurrentStateStep
) => {
  if (!masterTl.isActive()) {
    bubbleSort(array, animations);
    animationGenerator(speed, animations, masterTl);
    masterTl.duration(speed);
    masterTl.play();
    currentStep = masterTl.duration() / 2;
    setCurrentStateStep(masterTl.duration() / 2);
  }

  return currentStep
};
