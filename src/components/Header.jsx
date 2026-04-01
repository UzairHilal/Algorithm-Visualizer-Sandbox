import { algorithmList } from "../constants";

const Header = () => {
  return (
    <header className="z-10 w-full py-2 p x-6 text-sm sm:text-base">
      <nav className="w-full flex justify-between items-center">
        <div>
          <strong>Algorithm Visualizer Sandbox</strong>
        </div>

        <div className="flex flex-row items-center">
          <div className="flex">
            <strong className="mx-2">Algorithm Type:</strong>
          </div>

          <select className="p-1 bg-gray-800 rounded-md" defaultValue={0}>
            {algorithmList.map((algo, index) => (
              <option key={index} value={algo} className="text-green-400">
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
