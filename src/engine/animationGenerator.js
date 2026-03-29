import { comparisonAnimation } from "../engine/animations";

export let bars = [];

export const animationGenerator = (speed, animations, masterTl) => {
  bars = Array.from(document.getElementsByClassName("bars"));
  const tempBars = [...bars];
  for (let i = 0; i <= animations.length - 1; i++) {
    const [bar1Index, bar2Index] = animations[i].comparison;
    console.log(animations);

    const barA = tempBars[bar1Index];
    const barB = tempBars[bar2Index];

    masterTl.add(
      comparisonAnimation(barA, barB, "comparison", masterTl, i)
    );
    if (animations[i].swap) {
      masterTl.add(comparisonAnimation(barA, barB, "swap", masterTl, i));
      [tempBars[bar1Index], tempBars[bar2Index]] = [
        tempBars[bar2Index],
        tempBars[bar1Index],
      ];
    }
  }
  console.log(masterTl.isActive());
  return masterTl;
};
