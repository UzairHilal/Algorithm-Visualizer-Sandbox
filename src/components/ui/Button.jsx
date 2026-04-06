function Button({ title, onClick, className }) {
  return (
    <button
      className={`bg-gray-800 rounded-md text-white font-bold px-2 py-2 hover:bg-[#363636] transition-colors duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:hover:bg-gray-400 ${className}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default Button;
