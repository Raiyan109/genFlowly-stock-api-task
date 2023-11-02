
const Card = ({ children }) => {
    return (
        <div className="w-full h-full rounded-md relative p-8 border-2 bg-purple-300 text-purple-800 border-purple-700 font-normal">
            {children}
        </div>
    );
};

export default Card;