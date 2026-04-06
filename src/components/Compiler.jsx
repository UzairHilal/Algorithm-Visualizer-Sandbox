const Compiler = ({ className }) => {
  return (
    <div
      className={`hidden sm:block top-0 translate-x-1 h-full sm:relative sm:w-64 lg:w-96 border border-gray-600 bg-gray-950 p-5 overflow-hidden ${className}`}
    >
      <h1>Compiler</h1>
    </div>
  );
};

export default Compiler;
