import gsap from "gsap";
import { bubbleSort } from "../algorithms/Sorting/BubbleSort";
import { selectionSort } from "../algorithms/Sorting/SelectionSort";
import { animationGenerator } from "../engine/animationGenerator";

let animations = [];
const masterTl = gsap.timeline({ paused: true });
export const getMasterTl = () => {
  return masterTl;
};
export const resetMasterTl = () => {
  masterTl.clear();
  console.log(masterTl);
};
export const resetAnimations = () => {
  animations = [];
};

// export const resetCurrentStep = (currentStep) => {
//   currentStep = 0;
// };

export const handleSortingAnimationGenerator = (
  array,
  speed,
  currentStep,
  currentAlgorithm
) => {
  if (!masterTl.isActive()) {
    masterTl.clear();
    if (currentAlgorithm === "BubbleSort") {
      bubbleSort(array, animations);
    } else if (currentAlgorithm === "SelectionSort") {
      selectionSort(array, animations);
    }
    animationGenerator(speed, animations, masterTl);
    masterTl.duration(speed);
    masterTl.play();
    currentStep = masterTl.duration() / 2;
  }
  return currentStep;
};



export const handleToFirstStep = (setCurrentStateStep, currentStep) => {
  currentStep = 0
  masterTl.seek(masterTl.tweenTo(`step-${2 * currentStep + 1}`));
  setCurrentStateStep(currentStep);
  masterTl.duration(0);
  return currentStep;
};
export const handleToLastStep = (setCurrentStateStep, currentStep) => {
  currentStep = masterTl.duration()/2
  masterTl.seek(masterTl.tweenTo(`step-${2 * currentStep + 1}`));
  setCurrentStateStep(currentStep);
  masterTl.duration(0);
  return currentStep;
};
export const handleStepBack = (setCurrentStateStep, currentStep) => {
  currentStep > 0 ? --currentStep : currentStep;
  masterTl.seek(masterTl.tweenTo(`step-${2 * currentStep + 1}`));
  setCurrentStateStep(currentStep);
  masterTl.duration(0);
  return currentStep;
};

export const handleStepForward = (setCurrentStateStep, currentStep) => {
  currentStep >= 0 && 2 * currentStep + 1 < masterTl.duration()
    ? ++currentStep
    : currentStep;
  masterTl.seek(masterTl.tweenTo(`step-${2 * currentStep + 1}`));
  setCurrentStateStep(currentStep);
  masterTl.duration(0);
  return currentStep;
};
