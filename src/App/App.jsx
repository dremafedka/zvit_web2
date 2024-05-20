import styles from './App.module.css';
import {NavLink, Outlet} from "react-router-dom";
import {Header} from "../Header/index.jsx";

function App() {

  return (
    <>
      <Header/>
      <main>
        <div className={styles.lab_container}>
          <div>
            <NavLink to={'/1'} style={{ textDecoration: 'none' }}>
            Лабораторна робота №1
            </NavLink>
          </div>
          <div>
            <NavLink to={'/2'} style={{ textDecoration: 'none' }}>
              Лабораторна робота №2
            </NavLink>
          </div>
          <div>
            <NavLink to={'/3'} style={{ textDecoration: 'none' }}>
              Лабораторна робота №3
            </NavLink>
          </div>
          <div>
            <NavLink to={'/4'} style={{ textDecoration: 'none' }}>
              Лабораторна робота №4
            </NavLink>
          </div>
          <div>
            <NavLink to={'/5'} style={{ textDecoration: 'none' }}>
              Лабораторна робота №5
            </NavLink>
          </div>
          <div>
            <NavLink to={'/6'} style={{ textDecoration: 'none' }}>
              Лабораторна робота №6
            </NavLink>
          </div>
          <div>
            <NavLink to={'/7'} style={{ textDecoration: 'none' }}>
              Лабораторна робота №7
            </NavLink>
          </div>
          <div>
            Лабораторна робота №8
          </div>
          <div>
            Лабораторна робота №9
          </div>

        </div>
      </main>
      <Outlet />
    </>
  )
}

export default App
