export const insertionSort = (arr, animations) => {
    const a = [...arr]; // Create a copy to avoid mutating the original until sorted
    const n = a.length;

    for (let i = 1; i < n; i++) {
        let key = a[i];
        let j = i - 1;

        // We compare the current 'key' with the element before it
        while (j >= 0 && a[j] > key) {
            const anim = {};
            anim.comparison = [j, j + 1];
            anim.swap = true; // We treat the shift as a swap for the visualizer
            animations.push(anim);

            // Shifting the element
            a[j + 1] = a[j];
            j = j - 1;
        }

        // Record the final placement of the key
        // Even if no shift happened, we show the comparison
        if (j + 1 !== i) {
            a[j + 1] = key;
        } else {
            const anim = {};
            anim.comparison = [i, i]; // Highlighting the key stays in place
            anim.swap = false;
            animations.push(anim);
        }
    }
    return a;
};