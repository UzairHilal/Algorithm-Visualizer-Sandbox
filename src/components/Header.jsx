import { algorithmList } from "../constants";

const Header = () => {
  return (
    <header className="z-10 w-full py-5 px-6 text-sm sm:text-base">
      <nav className="w-full flex justify-between">
        <div>
          <strong>Algorithm Visulaizer Sandbox</strong>
        </div>
        <div className="flex cursor-pointer">
          <div className="flex px-0 cursor-pointer">
            <strong className="px-1">Algorithm type: </strong> Sorting
          </div>
          {/* <div className="px-2 bg-gray-800 absolute right-2 opacity-0">
            {algorithmList.map((algo,i) => (
              <p key={i}>{algo}</p>
            ))}
          </div> */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
