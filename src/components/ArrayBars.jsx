const ArrayBars = ({ randomArray, maxValueInArray, barsRef, arraySize }) => {
  return (
    <div className="w-full h-[60vh] flex items-end justify-center bg-gray-700">
      {randomArray.map((elem, i) => (
        <div
          data-height={`${elem / ((0.39 / 100) * maxValueInArray)}`}
          ref={(el) => (barsRef.current[i] = el)}
          className={`bars max-w-20 border border-black rounded-t-sm bg-cyan-600 flex items-end justify-center relative mx-0.5`}
          key={i}
          style={{
            width: `${200 / randomArray.length}px`,
          }}
        >
          <p
            className={`w-8 h-8 opacity-100 absolute -bottom-[50px] flex items-center transition-all ${
              arraySize < 8 && `justify-center`
            } ${
              arraySize >= 8 &&
              arraySize <= 14 &&
              `-rotate-45 justify-center text-[12px] border-none`
            } ${
              arraySize >= 15 &&
              `-rotate-90 justify-end text-[10px] border-none`
            } 
           text-gray-200`}
          >
            {elem}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ArrayBars;
