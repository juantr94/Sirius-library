import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../views/home.js';
import Header from '../components/Header.js';
import {Footer} from "../components/Footer";
import Catalogo from '../views/Catalogo.js';
import Sirius from '../views/Sirius.js';
import NotFound from '../views/NotFound';
import Eventos from "../views/Eventos";

function GlobalRouter() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={ <Home />} />
                <Route path="/catalogo/" element={<Catalogo />} />
                <Route path="/sirius" element={<Sirius />} />
                <Route path="/eventos" element={<Eventos/>} />
                <Route path="*" element={<NotFound />} /> 
            </Routes>
            <Footer /> 
        </BrowserRouter>
    );
}


export default GlobalRouter;