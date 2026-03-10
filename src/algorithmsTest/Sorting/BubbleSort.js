export const animations = [];
export const bubbleSort = (arr) => {
  const a = [...arr];

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length - i - 1; j++) {
      if (a[j] < a[j + 1]) {
        const anim = {};
        // console.log(a[j], j + " is less than " + a[j + 1]);
        anim.comparison = [j, j + 1];
        // console.log("here is the anim.comparison value:" ,anim.comparison, j, j+1)
        // anim.swap = [0, 0];
        animations.push(anim);
        // console.log("anim: ", anim, j)
        // console.log(animations, j)
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
        // console.log(anim, j)
        // console.log(animations, j)
        anim.comparison = [j, j + 1];
        anim.swap = [j, j + 1];
        animations.push(anim);
        // console.log(animations)
        const temp = a[j];
        a[j] = a[j + 1];
        a[j + 1] = temp;
        // console.log(a);
      }
    }
  }
  // console.log(animations);
  return a;
};
