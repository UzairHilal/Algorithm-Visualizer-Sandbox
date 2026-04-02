import Button from "./ui/Button";

const Controls = () => {
  return (
    <div className="flex justify-center items-center opacity-100 bg-gray-700">
      <div className="py-7 flex flex-row  justify-between text-xs bottom-10 opacity-100 transition-all px-9">
        <Button title={"<"} className="" onClick={() => alert("hello")} />
        <Button title={"Play"} />
        <Button title={"Pause"} />
        <Button title={">"} />
      </div>

      <div className="w-1 h-14 sm:h-10 bg-gray-600 border border-gray-500 rounded"></div>

      <div className="flex flex-col justify-between text-xs opacity-100 transition-all px-9">
        <div>
          <button className=" text-white font-bold rounded-lg px-2 py-1 hover:bg-gray-500">
            Bubble Sort
          </button>
          <button className=" text-white font-bold rounded-lg px-2 py-1 hover:bg-gray-500">
            Selection Sort
          </button>
          <button className=" text-white font-bold rounded-lg px-2 py-1 hover:bg-gray-500">
            Insertion Sort
          </button>
        </div>

        <div>
          <button className=" text-white font-bold rounded-lg px-2 py-1 hover:bg-gray-500">
            Quick Sort
          </button>
          <button className=" text-white font-bold rounded-lg px-2 py-1 hover:bg-gray-500">
            Merge Sort
          </button>
        </div>
      </div>
    </div>
  );
};

export default Controls;
