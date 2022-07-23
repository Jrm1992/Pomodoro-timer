import { Route, Routes } from "react-router-dom";
import Pausa from "./Components/pausa";
import Trabalho from "./Components/trabalho";
import WorkDone from "./Components/workdone";
import  Home  from "./Pages/Home";



export function Router() {

  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trabalho" element={<Trabalho />} />
        <Route path="/pausa" element={<Pausa />} />
        <Route path="/workdone" element={<WorkDone />} />
      </Routes>
  )
}

export default Router