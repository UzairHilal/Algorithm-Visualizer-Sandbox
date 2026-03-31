const ArrayBars = ({ randomArray, maxValueInArray, barsRef, arraySize }) => {
  return (
    <div className="w-full h-[60vh] flex items-end justify-center bg-gray-700">
      {randomArray.map((elem, i) => (
        <div
          data-height={`${elem / ((0.2 / 100) * maxValueInArray)}`}
          ref={(el) => (barsRef.current[i] = el)}
          className={`bars max-w-20 border border-black rounded-t-sm bg-cyan-600 flex items-end justify-center relative `}
          key={i}
          style={{
            width: `${700 / randomArray.length}px`,
          }}
        >
          <p
            className={`w-9 h-9 opacity-100 absolute -bottom-[50px] flex justify-center items-center transition-all ${
              arraySize >= 11
                ? `-rotate-45 text-[12px] border-none`
                : `rotate-0`
            } border-2 p-2 border-gray-700  text-gray-200`}
          >
            {elem}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ArrayBars;
