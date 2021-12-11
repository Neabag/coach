import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import './styles/App.scss';
import axios from 'axios';

import endPoints from './endpoints';
import Header from './jsx/Header';
import Footer from './jsx/Footer';
import PLP from './jsx/PLP';
import PDP from './jsx/PDP';

function App() {
  
  const [categories, setCategories] =  useState([]);
  useEffect(() => {
    axios.get(endPoints.category).then(function(res){
      console.log("printing data", res.data);
      setCategories(res.data);
    });
  }, [])
  return (
    <div className="App">
      <BrowserRouter>
        <Header categories={categories}/>
        <main className="">
        <Routes>
          <Route path="PDP" element={<PDP/>}>
            <Route path =":pid/:price" element={<PDP/>}/>
          </Route>
          <Route path="PLP" element={<PLP />}>
            <Route path=":categoryId" element={<PLP/>}></Route>
          </Route>
          <Route path="*" element={<Navigate to="plp/new"/>}></Route>
        </Routes>
        </main>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
