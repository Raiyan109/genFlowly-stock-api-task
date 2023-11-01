
const Card = ({ children }) => {
    return (
        <div className="w-full h-full rounded-md relative p-8 border-2 bg-purple-950 text-purple-300 font-normal">
            {children}
        </div>
    );
};

export default Card;