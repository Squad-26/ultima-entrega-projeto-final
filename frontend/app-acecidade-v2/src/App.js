import React from "react";
import {Routes, Route} from "react-router-dom"
import Contatos from "./page/contatos/Contatos";
import Home from "./page/home/Home";
import Locais from "./page/locais/Locais";
import Menu from "./page/components/menu/menu";
import Acessibilidade from "./page/acessibilidade/Acessibilidade";
import './index.css'
import Footer from "./page/components/footer/Footer";
import VLibras from "@djpfs/react-vlibras";
import { AuthProvider } from "./providers/auth";
import QuemSomos from "./page/quemSomos/QuemSomos"

function App() {
  return (
    <>
    <AuthProvider>
      <Menu />
      
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contatos" element={<Contatos />} />
          <Route path="/locais" element={<Locais />} />
          <Route path="/acessibilidade" element={<Acessibilidade />} />
          <Route path="quemSomos" element={<QuemSomos />} />

        <Route path="*" element={<h1>Pagina não Encontrada</h1>}/>
        
      </Routes>
      <Footer />
       <VLibras />
    </AuthProvider>
    </>
  );
}

export default App;
