import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HeaderDesafio from './components/router/desafio/header/HeaderDesafio'
import HomeDesafio from './components/router/desafio/home/HomeDesafio'
import ProdutoDesafio from './components/router/desafio/produto/ProdutoDesafio'
import ContatoDesafio from './components/router/desafio/contato/ContatoDesafio'
import './App.css';

// Utilize a API abaixo para puxar a lista de produto
// https://ranekapi.origamid.dev/json/api/produto
// Cada produto possui o id, o mesmo pode ser passado na api para retornar os dados desse produto específico
// https://ranekapi.origamid.dev/json/api/produto/notebook


const App = () => {
  return (
    <BrowserRouter>
      <HeaderDesafio/>
      <Routes>
        <Route path="/" element={<HomeDesafio/>}/>
        <Route path="produto/:id" element={<ProdutoDesafio/>}/>
        <Route path="contato" element={<ContatoDesafio/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;