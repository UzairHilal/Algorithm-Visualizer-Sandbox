import gsap from "gsap";

export const comparisonAnimation = (firstTarget, secondTarget, speed) => {
  const tl = gsap.timeline({
    defaults: { ease: "back" },
  });
  tl.timeScale(speed);

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
