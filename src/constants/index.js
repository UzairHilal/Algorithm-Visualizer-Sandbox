import gsap from "gsap";
import { resetCurrentStep } from "../engine/animations";

export const algorithmList = ["Sorting", "Searching", "PathFinding", "..."];

// Generate random array
export const generateRandomArray = (arraySize, bars, masterTl) => {
  const arr = Array.from({ length: arraySize }, () =>
    Math.floor(Math.random() * (500 - 5 + 1) + 5)
  );
  resetCurrentStep();
  masterTl.clear();
  bars.length && gsap.set(bars, { x: 0, backgroundColor: "" });

  return arr;
};
