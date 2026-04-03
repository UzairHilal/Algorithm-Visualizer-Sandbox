import gsap from "gsap";
import { resetCurrentStep } from "../engine/animations";
import { resetAnimations, resetMasterTl } from "../utils/playback";
export const algorithmList = ["Sorting", "Searching", "PathFinding", "..."];

// Generate random array
export const generateRandomArray = (arraySize, bars) => {
  const arr = Array.from({ length: arraySize }, () =>
    Math.floor(Math.random() * (500 - 5 + 1) + 5)
  );
  bars.length && gsap.set(bars, { x: 0, backgroundColor: "" });
  resetCurrentStep();
  resetMasterTl();
  resetAnimations();

  return arr;
};
