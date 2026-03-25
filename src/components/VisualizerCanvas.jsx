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
      ".bars",
      {
        height: 5,
      },

      {
        height: (i, el) => el.dataset.height + "px",
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

      <div className="w-full h-40 py-10 flex justify-center"></div>
    </div>
  );
};

export default VisualizerCanvas;
