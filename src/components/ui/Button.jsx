
function Button({title, onClick , className}) {
    return (
        <button className= {`bg-indigo-300 text-black font-bold px-2 py-2 hover:bg-[#363636] transition-colors duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:hover:bg-gray-400 ${className}`} 
        onClick={onClick}
        >
            {title}
        </button>
    )
}

export default Button