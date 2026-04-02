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
  const [algorithm, setAlgorithm] = useState();
  const [arraySize, setArraySize] = useState(5);
  const [speed, setSpeed] = useState(5);

  return (
    <main className=" bg-gray-900 h-[100vh]">
      <Header />
      {/* TODO: Organize the props below*/}
      <ControlPanel
        array={array}
        setArray={setArray}
        algorithm={algorithm}
        arraySize={arraySize}
        setArraySize={setArraySize}
        setAlgorithm={setAlgorithm}
        speed={speed}
        setSpeed={setSpeed}
      />
      <div className="flex ">
        <div className="flex-1 ">
          <div className="border border-gray-500 rounded-md my-1 ml-1">
            <VisualizationCanvas array={array} arraySize={arraySize} />
            <Controls />
          </div>
          <div className="h-[19.6rem] ml-1">
            <InfoPanel className="infopanel border border-gray-500 rounded-md" />
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
