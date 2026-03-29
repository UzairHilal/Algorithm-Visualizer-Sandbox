// export const animations = [];
export const bubbleSort = (arr, animations) => {
  const a = [...arr];

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length - i - 1; j++) {
      if (a[j] < a[j + 1]) {
        const anim = {};
        anim.comparison = [j, j + 1];
        anim.swap = false; //new swap
        animations.push(anim);
      }
      if (a[j] > a[j + 1]) {
        const anim = {};
        // console.log(
        //   a[j] +
        //   " is greater than " +
        //   a[j + 1] +
        //   ", Swaping " +
        //   a[j] +
        //   "<->" +
        //   a[j + 1]
        // );

        anim.comparison = [j, j + 1];
        // anim.swap = [j, j + 1]; //previous swap
        anim.swap = true; //new swap
        animations.push(anim);
        const temp = a[j];
        a[j] = a[j + 1];
        a[j + 1] = temp;
      }
    }
  }
  return a;
};
