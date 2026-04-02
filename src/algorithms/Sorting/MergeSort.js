export const mergeSort = (arr, animations) => {
    if (arr.length <= 1) return arr;
    const auxiliaryArray = [...arr];
    mergeSortHelper(arr, 0, arr.length - 1, auxiliaryArray, animations);
    return arr;
};

function mergeSortHelper(mainArray, startIdx, endIdx, auxiliaryArray, animations) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);

    // Recursively split the array
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);

    // Merge the sorted halves back together
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;

    while (i <= middleIdx && j <= endIdx) {
        // 1. Record the comparison (we are looking at these two values)
        animations.push({
            comparison: [i, j],
            swap: false
        });

        if (auxiliaryArray[i] <= auxiliaryArray[j]) {
            // 2. Record the "overwrite" (moving a value into the sorted position)
            animations.push({
                comparison: [k, i],
                swap: true
            });
            mainArray[k++] = auxiliaryArray[i++];
        } else {
            animations.push({
                comparison: [k, j],
                swap: true
            });
            mainArray[k++] = auxiliaryArray[j++];
        }
    }

    // Handle remaining elements in the left half
    while (i <= middleIdx) {
        animations.push({ comparison: [k, i], swap: true });
        mainArray[k++] = auxiliaryArray[i++];
    }

    // Handle remaining elements in the right half
    while (j <= endIdx) {
        animations.push({ comparison: [k, j], swap: true });
        mainArray[k++] = auxiliaryArray[j++];
    }
}