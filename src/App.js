import React from 'react';
import { useEffect, useState } from 'react';
//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Navigation from './components/NavigationBar';

import {Home} from './screens/home';
import {ToDo_Complete} from './screens/ToDo'
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return(
    <div class="">
    <header>
      <Header />
    </header>
      <main>
        <Router>
          <div>
          <Navigation/>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/todo' element={<ToDo_Complete />} />
          </Routes>
          </div>
        </Router> 
      </main>
    
    </div>
  
  )
}

export default App;
