import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App/App.jsx'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Lab1} from "./Lab1.jsx";
import {Lab2} from "./Lab2.jsx";
import {Lab3} from "./Lab3.jsx";
import {Lab4} from "./Lab4.jsx";
import {Lab5} from "./Lab5.jsx";
import {Lab6} from "./Lab6.jsx";
import {Lab7} from "./Lab7.jsx";
import {Lab8} from "./Lab8.jsx";
import {Lab9} from "./Lab9.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path={'/'} element={<App />}>
                  <Route path={'/1'} element={<Lab1/>} />
                  <Route path={'/2'} element={<Lab2/>} />
                  <Route path={'/3'} element={<Lab3/>} />
                  <Route path={'/4'} element={<Lab4/>} />
                  <Route path={'/5'} element={<Lab5/>} />
                  <Route path={'/6'} element={<Lab6/>} />
                  <Route path={'/7'} element={<Lab7/>} />
                  <Route path={'/8'} element={<Lab8/>} />
                  <Route path={'/9'} element={<Lab9/>} />
              </Route>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>,
)
