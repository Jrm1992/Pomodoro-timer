import { BrowserRouter } from "react-router-dom"
import Header from "./Components/header"
import { CounterProvider } from "./Context"
import Home from "./Pages/Home"
import Router from "./Router"

function App() {

  return (
    <CounterProvider>
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
    </CounterProvider>
  )
}

export default App
