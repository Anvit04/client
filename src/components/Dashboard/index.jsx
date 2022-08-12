import styles from './style.module.css';
import './style.css';
import { Link } from "react-router-dom";
import axios from 'axios'
import config from '../../config'
import { useState } from 'react';
import { useEffect } from 'react';
import Userlist from './userlist';
// import DatePicker from "react-bootstrap-date-picker";

const Dashboard = () => {

    const role = localStorage.getItem("role");

    const usersd = localStorage.getItem("usersd");

    console.log(usersd);
    // console.log(role);

    const [data, setData] = useState([])

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.reload();
    }

    // useEffect(() => {
    //     axios.get(config.baseURL + '/v1/user/employees')
    //         .then(res => {
    //             setData(res.data.data.emp_list)
    //             console.log(res.data)
    //         }).catch(err => {
    //             console.log(err)
    //         })
    // }, [])


    // const employelist = data && data.length && data.map((el, ind) => {
    //     const letIndex = ind + 1;
    //     console.log(el.firstName)
    //     // const fname = el.firstName;
    //     const roles = el.role;

    //     return (
    //         <>
    //         </>
            
    //     )
    // })


    return (
        <>
            <div className={styles.dasbordNav}>
                <div className='container'>
                    <nav className="navbar navbar-expand-lg navbar-dark ">
                        <div className="container-fluid">

                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Holiday Calendar</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Policy </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Leaves </a>
                                    </li>


                                </ul>

                            </div>
                            <ul className={styles.userBox}>
                                <li className="nav-item dropdown">
                                    <a className="navbar-brand" id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false" href="#">{usersd}</a>
                                    <ul className="dropdown-menu animate slideIn" aria-labelledby="navbarDropdown2">

                                        <li><a className="dropdown-item" href="#">My Account</a></li>
                                        <li><a className="dropdown-item" href="#">Setting</a></li>
                                        <li><a className="dropdown-item" onClick={handleLogout}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z" />
                                            <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z" />
                                        </svg>Logout</a></li>

                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
            
            {
                (() => {

                    if (role == 1 && true) {
                        return <div>
                            <Userlist />
                        </div>
                    }
                    else {
                        return <div>
                            <h1>This rendered when statement is false</h1>
                        </div>
                    }

                })()
            }
            

            


        </>
    )
}

export default Dashboard;