import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useState } from 'react';
import Header from './components/Dashboard/header';
import Holiday from './components/Dashboard/NavComponents/Holiday';
import Addemployee from './components/Dashboard/NavComponents/Addemployee';
import Leaves from './components/Dashboard/NavComponents/Leaves';
import Policy from './components/Dashboard/NavComponents/Policy';
import Leaveapply from './components/Dashboard/NavComponents/Leaveapply';
// import axios from 'axios'
// import config from './config'



function App() {


  

  const user = localStorage.getItem("token")
  const role = localStorage.getItem("role");

  


  return (
    <div className="App">
      <BrowserRouter>

        {
          (() => {

            if (user && true) {
              // After Login
              return <div>
                <Header />
              </div>
            }
            else {
              // Before Login
              return <div>
                <Login />
              </div>
            }

          })()
        }


        <Routes>

          {/* <Route path='/login' exact element={<Login />} />  */}


          {user && <Route path="/" exact element={<Dashboard />} />}

          {user && <Route path='/holiday' exact element={<Holiday />} />}

          {user && <Route path='/add_employee' exact element={<Addemployee />} />}

          {user && <Route path='/leaves' exact element={<Leaves />} />}

          {user && <Route path='/policy' exact element={<Policy />} />}

          {user && <Route path='/leave_apply' exact element={<Leaveapply />} />}


          {/* <Route path='/' exact element={<Navigate replace to="/login" />} /> */}







        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
