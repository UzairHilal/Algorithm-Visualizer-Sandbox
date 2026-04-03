import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import ArrayBars from "./ArrayBars";
import InfoPanel from "./InfoPanel";

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
    <div className="w-full h-96 sm:h-96 flex flex-col justify-center overflow-hidden rounded-md">
      {/* bar display */}
      <ArrayBars
        randomArray={randomArray}
        maxValueInArray={maxValueInArray}
        barsRef={barsRef}
        arraySize={arraySize}
      />

      <div className="w-full py-8 flex justify-center bg-gray-700 "></div>
    </div>
  );
};

export default VisualizerCanvas;
