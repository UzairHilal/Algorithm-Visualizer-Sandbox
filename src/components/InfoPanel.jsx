import { useState } from "react";
import { algorithmInfo } from "../constants/algorithmInfo";
const InfoPanel = ({ className, currentAlgorithm }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div
      className={`w-full h-full sm:w-full border border-gray-600 bg-gray-950 px-6 py-3 ${className}`}
    >
      <div className="-mb-px border-b border-gray-200">
        <div role="tablist" className="flex gap-1">
          <button
            role="tab"
            className={`border-blue-600 px-4 py-2 text-sm font-medium text-blue-600 transition-colors hover:text-blue-700 ${
              activeTab === 0 ? `border-b-2` : `border-b-0`
            }`}
            aria-selected={activeTab === 0}
            onClick={() => {
              setActiveTab(0);
            }}
          >
            Description
          </button>

          <button
            role="tab"
            className={`border-blue-600 px-4 py-2 text-sm font-medium text-blue-600 transition-colors hover:text-blue-700 ${
              activeTab === 1 ? `border-b-2` : `border-b-0`
            }`}
            aria-selected={activeTab === 1}
            onClick={() => {
              setActiveTab(1);
            }}
          >
            Working
          </button>

          <button
            role="tab"
            className={`border-blue-600 px-4 py-2 text-sm font-medium text-blue-600 transition-colors hover:text-blue-700 ${
              activeTab === 2 ? `border-b-2` : `border-b-0`
            }`}
            aria-selected={activeTab === 2}
            onClick={() => {
              setActiveTab(2);
            }}
          >
            Complexity
          </button>
          <div className="w-full text-sm flex flex-col justify-center items-end font-mono">
            <p>{currentAlgorithm}</p>
          </div>
        </div>
      </div>

      <div role="tabpanel" className="mt-4 overflow-hidden">
        <div className="">
          <div
            className={`description ${activeTab === 0 ? `block` : `hidden`}`}
          >
            <p className="w-full text-white ">
              {algorithmInfo.insertionSort.description}
            </p>
          </div>
          <div className={`working ${activeTab === 1 ? `block` : `hidden`}`}>
            <p className="text-white">{algorithmInfo.insertionSort.working}</p>
          </div>
          <div
            className={`complexity ${
              activeTab === 2 ? `block` : `hidden`
            } flex justify-center items-center gap-6 sm:justify-start`}
          >
            <p className="text-white">
              {algorithmInfo.insertionSort.complexity.time.worst}
            </p>
            <img
              src={algorithmInfo.insertionSort.complexity.image}
              alt="insertion sort complexity graph"
              className="w-56 h-56 invert"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPanel;
