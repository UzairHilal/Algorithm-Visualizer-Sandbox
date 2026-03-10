import Header from "./components/Header"
import ControlPanel from "./components/ControlPanel"
import VisualizationCanvas from "./components/VisualizerCanvas"
import Footer from "./components/Footer"
import Controls from "./components/Controls"
import { useState } from "react";
const App = () => {
    const [array, setArray] = useState([5]);
    const [algorithm, setAlgorithm] = useState();
    const [arraySize, setArraySize] = useState(5);

  return (
    <main className="bg-gray-900 overflow-hidden">
      <Header />
      <ControlPanel array={array} setArray={setArray} algorithm={algorithm} arraySize={arraySize} setArraySize={setArraySize} setAlgorithm={setAlgorithm}/>
      <VisualizationCanvas array={array}/>
      <Controls />
      <Footer />
    </main>
  )
}

export default App
