import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App/App.jsx'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Lab1} from "./Lab1.jsx";
import {Lab2} from "./Lab2.jsx";
import {Lab3} from "./Lab3.jsx";
import {Lab4} from "./Lab4.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path={'/'} element={<App />}>
                  <Route path={'/1'} element={<Lab1/>} />
                  <Route path={'/2'} element={<Lab2/>} />
                  <Route path={'/3'} element={<Lab3/>} />
                  <Route path={'/4'} element={<Lab4/>} />
              </Route>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>,
)
