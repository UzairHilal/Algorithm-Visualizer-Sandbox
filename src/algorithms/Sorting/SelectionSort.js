export function selectionSort(arr, animations) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      const anim = {};
      anim.comparison = [i, j];
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
      anim.swap = false; //new swap
      animations.push(anim);
    }

    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // swap
      const anim = {};
      anim.comparison = [i, minIndex];
      anim.swap = true; //new swap
      animations.push(anim);
    }
  }

  return arr;
}

/* anim.swapped = [minIndex, true] -> we will add the swapped key to the animtions array which will be used to highlight the bar (yellow) that is in the right position*/