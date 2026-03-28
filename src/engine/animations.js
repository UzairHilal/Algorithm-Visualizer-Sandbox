import gsap from "gsap";

let currentStep = 0;

export const comparisonAnimation = (
  firstTarget,
  secondTarget,
  speed,
  type,
  masterTl,
) => {
  const tl = gsap.timeline();
  tl.timeScale(speed);
  
  if (type === "comparison") {
    masterTl.addLabel(`step-${currentStep}`, currentStep);
    tl.to(firstTarget, {
      backgroundColor: "red",
      ease: "back",
      duration: 1,
    });
    currentStep++
    masterTl.addLabel(`step-${currentStep}`, currentStep);
    tl.to(
      secondTarget,
      {
        backgroundColor: "red",
        ease: "back",
        duration: 1,
      },
      "<"
    );
    currentStep++
    masterTl.addLabel(`step-${currentStep}`, currentStep);
    tl.to(firstTarget, {
      backgroundColor: "#0092b8",
      ease: "back",
      duration: 1,
    });
    currentStep++
    masterTl.addLabel(`step-${currentStep}`, currentStep);
    tl.to(
      secondTarget,
      {
        backgroundColor: "#0092b8",
        ease: "back",
        duration: 1,
      },
      "<"
    );
  }
  
  if (type === "swap") {
    currentStep++
    masterTl.addLabel(`step-${currentStep}`, currentStep);
    tl.to(firstTarget, {
      x: () => {
        const bar1 = firstTarget.getBoundingClientRect();
        const bar2 = secondTarget.getBoundingClientRect();
        return `+=${bar2.left - bar1.left}`;
      },
      duration: 1,
      backgroundColor: "orange",
    });
    currentStep++
    masterTl.addLabel(`step-${currentStep}`, currentStep);
    tl.to(
      secondTarget,
      {
        x: () => {
          const bar1 = firstTarget.getBoundingClientRect();
          const bar2 = secondTarget.getBoundingClientRect();
          return `-=${bar2.left - bar1.left}`;
        },
        duration: 1,
        backgroundColor: "orange",
      },
      "<"
    );
    currentStep++
    masterTl.addLabel(`step-${currentStep}`, currentStep);
    tl.to(firstTarget, {
      duration: 1,
      backgroundColor: "#0092b8",
    });
    currentStep++
    masterTl.addLabel(`step-${currentStep}`, currentStep);
    tl.to(
      secondTarget,
      {
        duration: 1,
        backgroundColor: "#0092b8",
      },
      "<"
    );
  }
  return tl;
};
