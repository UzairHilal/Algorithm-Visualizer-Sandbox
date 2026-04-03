import { algorithmList } from "../constants";

const Header = () => {
  return (
    <header className="z-10 w-full py-2 px-6 text-sm sm:text-base font-mono">
      <nav className="w-full flex flex-col md:flex-row justify-between items-center gap-3">
        <div>
          <strong className="text-[#91D06C] text-center text-sm md:text-xl underline md:no-underline">Algorithm Visualizer Sandbox</strong>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
          <div >
            <strong className="mx-2 text-xs md:text-sm lg:text-xl">Algorithm Type:</strong>
          </div>

          <select
            className="p-1 bg-gray-800 rounded-md text-xs  md:text-sm lg:text-xl"
            defaultValue={0}
          >
            {algorithmList.map((algo, index) => (
              <option key={index} value={algo} className="text-green-400 ">
                {algo}
              </option>
            ))}
          </select>
        </div>
      </nav>
    </header>
  );
};

export default Header;
