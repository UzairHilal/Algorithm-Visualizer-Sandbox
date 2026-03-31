export const insertionSort = (arr, animations) => {
    const n = arr.length;
    // We start from the second element (index 1)
    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;

        // Record the 'selection' of the current key
        animations.push({ type: 'comparison', indices: [i, j] });

        while (j >= 0 && arr[j] > key) {
            // Record that we are comparing and then shifting
            animations.push({ type: 'comparison', indices: [j, j + 1] });

            arr[j + 1] = arr[j];

            // Record the shift for the visualizer
            animations.push({
                type: 'shift',
                index: j + 1,
                value: arr[j]
            });

            j = j - 1;
        }
        arr[j + 1] = key;

        // Record the final placement of the key
        animations.push({
            type: 'place',
            index: j + 1,
            value: key
        });
    }
    return arr;
};