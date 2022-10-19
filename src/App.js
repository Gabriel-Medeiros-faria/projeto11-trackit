import Home from "./Home/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Cadastro from "./Cadastro/Cadastro";
import GlobalStyled from "../src/Globalstyle/globalstyled"
import ToDayPage from "./InitialPage/ToDayPage"


function App() {
  return (
    <>
      <BrowserRouter>
      <GlobalStyled/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/cadastro" element={<Cadastro />}/>
          <Route path="/hoje" element={<ToDayPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
