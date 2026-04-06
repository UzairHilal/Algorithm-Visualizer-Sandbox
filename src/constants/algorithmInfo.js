export const algorithmInfo = {
    insertionSort: {
        name: "Insertion Sort",
        description: "Builds the sorted list one item at a time by comparing each new element to the ones before it and inserting it into the correct position.",
        working: [
            "Start from the second element (index 1), treat the first element as sorted.",
            "Pick the current element as the 'key'.",
            "Compare the key with each element to its left, shifting them right if they are greater.",
            "Insert the key into its correct position.",
            "Repeat for all remaining elements until the entire array is sorted."
        ],
        complexity: {
            time: {
                best: "O(n)",       // Already sorted
                average: "O(n²)",
                worst: "O(n²)"      // Reverse sorted
            },
            space: "O(1)" ,
            image: "src/assets/images/time-complexity-insertion-sort.png" 
            
                     // In-place sorting
        },
        stable: true,
        inPlace: true,
        useCases: [
            "Small datasets",
            "Nearly sorted arrays",
            "Real-time / online sorting (data arriving one by one)"
        ]
    },

    mergeSort: {
        name: "Merge Sort",
        description: "A Divide and Conquer algorithm that recursively splits the array in half, sorts each half, and merges them back in sorted order.",
        working: [
            "Divide the array into two halves by finding the midpoint.",
            "Recursively apply merge sort to the left half.",
            "Recursively apply merge sort to the right half.",
            "Merge the two sorted halves: compare elements one by one and place the smaller one first.",
            "Continue merging until the entire array is reconstructed in sorted order."
        ],
        complexity: {
            time: {
                best: "O(n log n)",
                average: "O(n log n)",
                worst: "O(n log n)"  // Consistent performance
            },
            space: "O(n)"            // Needs auxiliary array for merging
        },
        stable: true,
        inPlace: false,
        useCases: [
            "Large datasets",
            "Linked lists (preferred over Quick Sort)",
            "External sorting (data too large for memory)",
            "When stable sort is required"
        ]
    },

    quickSort: {
        name: "Quick Sort",
        description: "A Divide and Conquer algorithm that picks a 'pivot' element and partitions the array so smaller elements go left and larger ones go right, then recursively sorts each side.",
        working: [
            "Choose a pivot element (commonly last, first, or median element).",
            "Partition the array: move all elements smaller than the pivot to its left, and all greater elements to its right.",
            "The pivot is now in its final sorted position.",
            "Recursively apply quick sort to the left sub-array (elements < pivot).",
            "Recursively apply quick sort to the right sub-array (elements > pivot).",
            "Base case: sub-arrays of size 0 or 1 are already sorted."
        ],
        complexity: {
            time: {
                best: "O(n log n)",
                average: "O(n log n)",
                worst: "O(n²)"       // When pivot is always the smallest or largest
            },
            space: "O(log n)"        // Recursive call stack
        },
        stable: false,
        inPlace: true,
        useCases: [
            "General-purpose sorting (fastest in practice for most inputs)",
            "Large datasets that fit in memory",
            "When average-case performance matters more than worst-case"
        ]
    }
};