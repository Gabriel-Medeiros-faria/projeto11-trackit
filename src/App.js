import Home from "./Home/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Cadastro from "./Cadastro/Cadastro";
import GlobalStyled from "../src/Globalstyle/globalstyled"
import ToDayPage from "./InitialPage/ToDayPage"
import AuthProvider from "./contexts/Auth";
import Habitos from "./InitialPage/Hábitos";
import styled from "styled-components";
import Histórico from "./InitialPage/Histórico";


function App() {
  return (
    <>
    
      <BrowserRouter>
      <GlobalStyled/>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/cadastro" element={<Cadastro />}/>
          <Route path="/hoje" element={<ToDayPage/>}/>
          <Route path="/habitos" element={<Habitos/>}/>
          <Route path="/histórico" element={<Histórico/>}/>
        </Routes>
        </AuthProvider>
      </BrowserRouter>
      
    </>
  )
}


export default App;
