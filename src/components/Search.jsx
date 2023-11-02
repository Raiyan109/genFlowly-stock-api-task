import { useState } from "react";
import { mockSearchResults } from '../constants/Mock'
import { BiSolidSearchAlt2 } from 'react-icons/bi'
import { RxCross2 } from 'react-icons/rx'

const Search = () => {
    const [inputValue, setInputValue] = useState('')
    const [bestMatches, setBestMatches] = useState(mockSearchResults.result)

    const clear = () => {
        setInputValue('')
        setBestMatches([])
    }

    const updateBestMatches = () => {
        setBestMatches(mockSearchResults.result)
    }
    return (
        <div className="flex items-center my-4 border-2 rounded-md relative z-50 w-96 bg-white border-neutral-200">
            <input type="text" className="w-full px-4 py-2 focus:outline-none rounded-md"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        updateBestMatches()
                    }
                }}
            />

            {inputValue && (
                <button
                    className="p-2 text-purple-800"
                    onClick={clear}>
                    <RxCross2 />
                </button>
            )}
        </div>
    );
};

export default Search;