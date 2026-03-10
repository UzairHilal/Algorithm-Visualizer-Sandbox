import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

import { animations } from "../algorithmsTest/Sorting/BubbleSort";

const sorting = () => {
  const bars = document.getElementsByClassName("bars");
  const newAnimations = [];
  for (const animation of animations) {
    if (animation.comparison) {
      newAnimations.push(animation.comparison);
    }
    if (animation.swap) {
      newAnimations.push(animation.swap);
    }
  }
  // console.log(newAnimations)

  for (let i = 0; i <= newAnimations.length-1; i++) {
    const [firstBar, secondBar] = newAnimations[i];
    setTimeout(() => {
      bars[firstBar].style.backgroundColor = "red";
      bars[secondBar].style.backgroundColor = "red";

      setTimeout(() => {
        const tempHeight = bars[firstBar].style.height;
        console.log(tempHeight)
        bars[firstBar].style.height = bars[secondBar].style.height;
  
        bars[secondBar].style.height = tempHeight;
      }, 5);
    }, 100);


    // setTimeout(() => {
    //   // const [firstBar, secondBar] = newAnimations[i];
    //   bars[firstBar].style.backgroundColor = "cyan";
    //   // console.log(bars[animations[i].comparison[0]])
    //   bars[secondBar].style.backgroundColor = "cyan";
    //   // console.log(bars[animations[i].comparison[1]])
    // }, 3000);
  }
};

const VisualizerCanvas = ({ array }) => {
  // const randomArray = [10,20,80,40,30,20,34];
  const randomArray = array;
  const maxValueInArray = Math.max(...randomArray);

  const barsRef = useRef([]);

  useGSAP(() => {
    gsap.fromTo(
      ".bars",
      {
        height: 5,
      },

      {
        height: (i, el) => el.dataset.height + "px",
        duration: (0.05 / randomArray.length) * 100,
        ease: "back.out(1.7)",
        stagger: (0.003 / randomArray.length) * 100,
        // opacity: 1,
      }
    );
  }, [randomArray]);

  return (
    <div className="w-full flex flex-col justify-center">
      {/* bar display */}
      <div className="w-full h-[60vh] flex items-end justify-center bg-gray-700">
        {randomArray.map((elem, i) => (
          <div
            id="bars"
            data-height={`${elem / ((0.2 / 100) * maxValueInArray)}`}
            ref={(el) => (barsRef.current[i] = el)}
            className={`bars max-w-20 sm:px-2 md:px-2 lg:px-3 border border-black rounded-t-sm bg-cyan-600 flex items-end justify-center relative `}
            key={i}
            style={{
              // height: `${elem / ((0.2 / 100) * maxValueInArray)}px`,
              width: `${450 / randomArray.length}px`,
            }}
            // style={{
            //   // height: `0px`,
            //   width: `${450 / randomArray.length}px`,
            // }}
          >
            <p className="lg:opacity-100 opacity-0 absolute lg:-top-6">
              {elem}
            </p>
          </div>
        ))}
      </div>

      {/* array display */}
      <div className="w-full h-56 sm:h-40 py-10 flex justify-center flex-wrap ">
        {randomArray.map((elem, i) => (
          <div
            key={i}
            className={` w-auto h-9 relative px-1 border-2 border-gray-400 text-gray-400 mx-1 my-3`}
          >
            <span className="border absolute -top-5 w-4 h-4 text-xs rounded-md bg-white text-black font-bold flex items-center justify-center">
              {i}
            </span>
            {elem}
          </div>
        ))}
      </div>
      <div>
        <button
          onClick={() => sorting()}
          className="border bg-black rounded-xl"
        >
          sortTest
        </button>
      </div>
    </div>
  );
};

export default VisualizerCanvas;
