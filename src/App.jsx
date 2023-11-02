import './App.css'
import Dashboard from './components/Dashboard'
import StockProvider from './context/StockProvider'

function App() {

  return (
    <>
      <StockProvider>
        <Dashboard />
      </StockProvider>
    </>
  )
}

export default App
