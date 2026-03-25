# Algorithm Visualizer

An interactive sandbox for visualizing sorting algorithms step by step — with full playback controls and adjustable speed.

---

## Supported Algorithms

**Bubble Sort** | Repeatedly swaps adjacent elements if they're in the wrong order. Very intuitive, very slow.
**Selection Sort** Finds the smallest element, moves it to the front, and repeats.
**Insertion Sort** Builds the sorted list one element at a time — like sorting playing cards in hand.
**Merge Sort** Divides the array in half, sorts each half recursively, then merges. Classic divide-and-conquer.
**Quick Sort** Picks a pivot, partitions the array around it, then recurses. Fast in practice but trickier to implement.

---

## Features

- Generate a random array
- Choose an algorithm from a dropdown
- Adjust animation speed with a slider
- Start, reset, and seek through steps (previous / next)

---

## Architecture

The project separates three concerns:

1. **Algorithm Logic** — pure functions that yield steps, with no knowledge of the UI
2. **Visualization Engine** — consumes steps from the algorithm and drives animation state
3. **UI Rendering** — React components that reflect the current animation state

---

## Project Structure

```
src/
├── algorithms/
│   └── sorting/
│       ├── bubbleSort.js
│       ├── mergeSort.js
│       └── quickSort.js
├── engine/
│   └── animationEngine.js
├── components/
│   ├── ArrayBar.jsx
│   ├── Controls.jsx
│   └── Visualizer.jsx
├── customHooks/
└── App.tsx
```

---

## Getting Started

```bash
# Install dependencies
npm install
# Start the development server
npm run dev
```

---

## Tech Stack

- React + JavaScript + tailwind
- GSAP
- Vite