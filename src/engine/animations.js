import gsap from "gsap";

export const comparisonAnimation = (firstTarget, secondTarget, speed, type) => {
  const tl = gsap.timeline({
    // defaults: { ease: "back" },
  });
  tl.timeScale(speed);

  // const bar1 = firstTarget.getBoundingClientRect();
  // const bar2 = secondTarget.getBoundingClientRect();

  // const distance = bar2.width - bar1.width;

  if (type === "comparison") {
    tl.to(firstTarget, {
      backgroundColor: "red",
    });
    tl.to(
      secondTarget,
      {
        backgroundColor: "red",
      },
      "<"
    );
    tl.to(firstTarget, {
      backgroundColor: "#0092b8",
    });
    tl.to(
      secondTarget,
      {
        backgroundColor: "#0092b8",
      },
      "<"
    );
  }

  if (type === "swap") {
    tl.to(firstTarget, {
      x: () => {
        const bar1 = firstTarget.getBoundingClientRect();
        const bar2 = secondTarget.getBoundingClientRect();
        return `+=${bar2.left - bar1.left}`;
      },
      duration: 0.2,
    }).to(
      secondTarget,
      {
        x: () => {
          const bar1 = firstTarget.getBoundingClientRect();
          const bar2 = secondTarget.getBoundingClientRect();
          return `-=${bar2.left - bar1.left}`;
        },
        duration: 0.2,
      },
      "<"
    );
  }
  return tl;
};

export const swapBars = async (firstTarget, secondTarget, speed) => {
  const bar1 = firstTarget.getBoundingClientRect();
  const bar2 = secondTarget.getBoundingClientRect();

  const distance = bar2.left - bar1.left;

  const tl = gsap.timeline();
  tl.timeScale(speed);
  await tl
    .to(firstTarget, { x: `+=${distance}`, duration: 0.2 })
    .to(secondTarget, { x: `-=${distance}`, duration: 0.2 }, "<");
};

// export const createTimeline = (animations) => {
//   const tl = gsap.timeline();
//   tl.timeScale(1);

//   switch (animations.type) {
//     case "comparison":
//       tl.to(firstTarget, {
//         backgroundColor: "red",
//       });
//       tl.to(
//         secondTarget,
//         {
//           backgroundColor: "red",
//         },
//         "<"
//       );
//       tl.to(firstTarget, {
//         backgroundColor: "#0092b8",
//       });
//       tl.to(
//         secondTarget,
//         {
//           backgroundColor: "#0092b8",
//         },
//         "<"
//       );

//   }
// };
