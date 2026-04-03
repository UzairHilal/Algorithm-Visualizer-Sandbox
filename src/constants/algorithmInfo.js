export const algorithmInfo = {
    insertionSort: {
        name: "Insertion Sort",
        description: "Builds the sorted list one item at a time by comparing each new element to the ones before it and inserting it into the correct position.",
        complexity: {
            time: "Best: O(n), Average: O(n²)",
            space: "O(1)"
        }
    },
    mergeSort: {
        name: "Merge Sort",
        description: "A Divide and Conquer algorithm that recursively splits the array in half, sorts the halves, and then merges them back together.",
        complexity: {
            time: "O(n log n)",
            space: "O(n)"
        }
    },
    quickSort: {
        name: "Quick Sort",
        description: "Picks an element as a 'pivot' and partitions the array so that elements smaller than the pivot are on the left and larger are on the right.",
        complexity: {
            time: "Average: O(n log n), Worst: O(n²)",
            space: "O(log n)"
        }
    }
};