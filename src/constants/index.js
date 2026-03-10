
export const algorithmList = ["Sorting", "Searching", "Pathfinding", "..."]

// Generate random array
export const generateRandomArray = (arraySize) => {
    const arr = Array.from({ length: arraySize }, () =>
      Math.floor(Math.random() * (500 - 5 + 1) + 5)
    );
    return (arr)
  };