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


  // axios.get(config.baseURL + '/v1/user/login')
  //   .then(res =>{
  //       const response = res.data;
  //       console.log(response.data)
  //   }).catch(err =>{

  //   })

  const user = localStorage.getItem("token")
  const role = localStorage.getItem("role");

  // console.log(user, "------------")
  // if(role === 1) {
  //   user: admin;
  // }else{
  //   user: employees;
  // }


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

              </div>
            }

          })()
        }


        <Routes>




          {user && <Route path="/" exact element={<Dashboard />} /> }
          
          {user && <Route path='/holiday' exact element={<Holiday />} />}

          {user && <Route path='/add_employee' exact element={<Addemployee />} />}

          {user && <Route path='/leaves' exact element={<Leaves />} />}

          {user && <Route path='/policy' exact element={<Policy />} />}

          {user && <Route path='/leave_apply' exact element={<Leaveapply />} />}

          
          <Route path='/login' exact element={<Login />} />



          <Route path='/' exact element={<Navigate replace to="/login" />} />

          {/* <Route
            exact
            path="/"
            element={user && role === 1 ? <Dashboard /> : <Navigate replace to={"/home"} />}
          /> */}

          {/* {
            role === 1 &&
            (<Route path="/" exact element={<Dashboard />} />)

          }

          {
            user && 
            (<Route path='/' exact element={<Home />} />)
          } */}


          {/*           
          {
            user && role == 1 ? 
            (<Route path="/" exact element={<Dashboard />} />)
            :
            (<Route path='/' exact element={<Home />} />)
          } */}





        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
