
const ChartFilter = ({ text, active, onClick }) => {
    return (
        <button onClick={onClick} className={`w-12 m-2 h-8 border-1 rounded-md flex items-center justify-center cursor-pointer ${active ? 'bg-purple-800 border-purple-700 text-purple-200' : 'border-purple-800 text-purple-500'}`}>
            {text}
        </button>
    );
};

export default ChartFilter;