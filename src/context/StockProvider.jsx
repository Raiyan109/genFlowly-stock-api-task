import { createContext, useContext, useState } from "react";

export const StockContext = createContext()

const StockProvider = ({ children }) => {
    const [stockSymbol, setStockSymbol] = useState('FB')
    const value = {
        stockSymbol, setStockSymbol
    }
    console.log(value);
    return (
        <StockContext.Provider value={value}>
            {children}
        </StockContext.Provider>
    )
}

export default StockProvider

export const useStock = () => {
    return useContext(StockContext)
}