import Button from "./ui/Button";

const Controls = () => {
  return (
    <div className="flex justify-center opacity-100 bg-gray-700">
      <div className="w- py-7 flex flex-row gap-3  justify-between text-xs bottom-10 opacity-100 transition-all px-9">
         
        <Button title={"Step Back"} className="" onClick={()=>alert("hello")}/>
        <Button title={"Play"}/>
        <Button title={"Pause"}/>
        <Button title={"Step Forward"}/>

      </div>
    </div>
  );
};

export default Controls;
