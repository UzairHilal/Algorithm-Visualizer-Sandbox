import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import ArrayBars from "./ArrayBars";

const VisualizerCanvas = ({ array, arraySize }) => {
  const randomArray = array;
  const maxValueInArray = Math.max(...randomArray);

  const barsRef = useRef([]);

  useGSAP(() => {
    gsap.fromTo(
      ".bars", {
      height: 5,
      background: "white"
    }
      ,
      {
        height: (i, el) => el.dataset.height + "px",
        background: "cyan",
        duration: 0.3,
        stagger: 0.1
      }
    );
  }, [randomArray]);
  return (
    <div className="w-full flex flex-col justify-center">
      {/* bar display */}
      <ArrayBars
        randomArray={randomArray}
        maxValueInArray={maxValueInArray}
        barsRef={barsRef}
        arraySize={arraySize}
      />

      <div className="w-full py-8 flex justify-center bg-gray-900 border-2 border-gray-800"></div>
    </div>
  );
};

export default VisualizerCanvas;
