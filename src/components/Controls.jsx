const Controls = () => {
  return (
    <div className="bg-gray-800 flex justify-center opacity-0">
      <div className="w-1/2 py-4 flex justify-between text-xs absolute bottom-10 opacity-30 hover:opacity-100 sm:text-base sm:relative sm:bottom-0 sm:opacity-100 transition-all border px-9 sm:px-0 sm:border-none">
        <button className="bg-purple-300 text-black font-bold rounded-l-lg px-2 py-1 hover:bg-purple-400">Step Back</button>
        <button className="bg-purple-300 text-black font-bold rounded-sm px-2 py-1 hover:bg-purple-400">Play</button>
        <button className="bg-purple-300 text-black font-bold rounded-sm px-2 py-1 hover:bg-purple-400">Pause</button>
        <button className="bg-purple-300 text-black font-bold rounded-r-lg px-2 py-1 hover:bg-purple-400">Step Forward</button>
      </div>
    </div>
  );
};

export default Controls;
