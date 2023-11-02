
const SearchResults = ({ results }) => {
    return (
        <ul className="absolute top-12 border-2 w-full rounded-md h-64 overflow-y-scroll bg-white border-neutral-200">
            {results.map((item) => {
                return <li key={item.symbol} className="rounded-md flex items-center justify-between hover:bg-purple-400 p-4 cursor-pointer">
                    <span>{item.symbol}</span>
                    <span>{item.description}</span>
                </li>
            })}
        </ul>
    );
};

export default SearchResults;