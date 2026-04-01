// sm:w-52 lg:w-72
import { algorithmInfo } from "../constants/algorithmInfo";
const InfoPanel = ({ className }) => {
  return (
    <div
      className={`w-full h-full sm:w-full border-2 border-gray-600 bg-gray-950  ${className}`}
    >
      <div className="p-5 w-full h-[100vh] flex flex-col overflow-scroll">
        <h1>Title: {algorithmInfo.insertionSort.name}</h1>
        <h1>Description: {algorithmInfo.insertionSort.description}</h1>
        <h1>Complizity: {algorithmInfo.insertionSort.complexity.time}</h1>
      </div>
    </div>
  );
};

export default InfoPanel;
