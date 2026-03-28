const Controls = () => {
  return (
    <div className="flex justify-center opacity-100 bg-gray-700">
      <div className="w- py-7 flex justify-between text-xs bottom-10 opacity-100 transition-all px-9">
        <button className="bg-purple-300 text-black font-bold rounded-l-lg px-2 py-1 hover:bg-purple-400">
          Step Back
        </button>
        <button className="bg-purple-300 text-black font-bold rounded-sm px-2 py-1 hover:bg-purple-400">
          Play
        </button>
        <button className="bg-purple-300 text-black font-bold rounded-sm px-2 py-1 hover:bg-purple-400">
          Pause
        </button>
        <button className="bg-purple-300 text-black font-bold rounded-r-lg px-2 py-1 hover:bg-purple-400">
          Step Forward
        </button>
      </div>
    </div>
  );
};

export default Controls;
