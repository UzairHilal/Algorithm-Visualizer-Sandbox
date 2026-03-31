
function Button({title, onClick , className}) {
    return (
        <button className= {`bg-purple-300 text-black font-bold rounded-l-lg px-2 py-2 hover:bg-purple-400 transition-colors duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:hover:bg-gray-400 ${className}`} 
        onClick={onClick}
        >
            {title}
        </button>
    )
}

export default Button