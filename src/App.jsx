import Header from "./components/Header";
import ControlPanel from "./components/ControlPanel";
import VisualizationCanvas from "./components/VisualizerCanvas";
import Footer from "./components/Footer";
import Controls from "./components/Controls";
import Compiler from "./components/Compiler";
import { useState } from "react";
import InfoPanel from "./components/InfoPanel";
const App = () => {
  const [array, setArray] = useState([5]);
  const [currentAlgorithm, setCurrentAlgorithm] = useState("BubbleSort");
  const [arraySize, setArraySize] = useState(5);
  const [speed, setSpeed] = useState(5);  // 100 = 1x , 200 =2x , 300 = 3x etc

  return (
    <main className=" bg-gray-900 h-[100vh] overflow-hidden">
      <Header />
      {/* TODO: Organize the props below*/}
      <ControlPanel
        array={array}
        setArray={setArray}
        arraySize={arraySize}
        setArraySize={setArraySize}
        speed={speed}
        setSpeed={setSpeed}
      />
      <div className="flex">
        <div className="relative flex-1 w-full">
          <div className=" border border-gray-500 rounded-md my-1 m-1 overflow-hidden">
            <VisualizationCanvas array={array} arraySize={arraySize} />
            <Controls
              currentAlgorithm={currentAlgorithm}
              setCurrentAlgorithm={setCurrentAlgorithm}
              array={array}
              setArray={setArray}
              arraySize={arraySize}
              setArraySize={setArraySize}
              speed={speed}
              setSpeed={setSpeed}
            />
          </div>
          <div className="h-[19.6rem] ml-1">
            <InfoPanel currentAlgorithm={currentAlgorithm} className="infopanel border border-gray-500 rounded-md" />
          </div>
        </div>
        <div className="mt-1 mr-1">
          <Compiler className="border mr-1 border-gray-500 rounded-md" />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default App;
