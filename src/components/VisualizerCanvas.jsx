import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";


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
      <div className="w-full h-[60vh] flex items-end justify-center bg-gray-700">
        {randomArray.map((elem, i) => (
          <div
            id="bars"
            data-height={`${elem / ((0.2 / 100) * maxValueInArray)}`}
            ref={(el) => (barsRef.current[i] = el)}
            className={`bars max-w-20 border border-black rounded-t-sm bg-cyan-600 flex items-end justify-center relative `}
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
            <p  className={`w-9 h-9 opacity-100 absolute -bottom-[80px] flex justify-center items-center transition-all ${arraySize >= 11 ? `-rotate-45 text-[10px] border-none` : `rotate-0`} border-2 p-2 border-gray-700  text-gray-200`}>
              {elem}
            </p>
          </div>
        ))}
      </div>

      <div className="w-full h-40 py-10 flex justify-center"></div>
    </div>
  );
};

export default VisualizerCanvas;
