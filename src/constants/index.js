import gsap from "gsap"
export const algorithmList = ["Sorting", "Searching", "PathFinding", "..."]



// Generate random array
export const generateRandomArray = (arraySize, bars, masterTl) => {
  const arr = Array.from({ length: arraySize }, () =>
    Math.floor(Math.random() * (500 - 5 + 1) + 5)
  );
  masterTl.clear()
  gsap.set(bars, {x:0, backgroundColor: ""})
  return (arr)
};