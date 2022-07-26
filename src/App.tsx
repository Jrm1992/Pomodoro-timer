import { BrowserRouter } from "react-router-dom"
import Footer from "./Components/footer"
import Header from "./Components/header"
import { CounterProvider } from "./Context"
import Router from "./Router"

function App() {

  return (
    <CounterProvider>
      <BrowserRouter>
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>
    </CounterProvider>
  )
}

export default App
