import './style.css'
import styles from './style.module.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import config from '../../config'

// import api from '../../../api/'

const Login = () => {

    // console.log(config.baseURL);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState("");


    function login(event) {
        event.preventDefault()

        const user = {
            userName: username,
            password: password
        }

        
        // useEffect( () => {

        
            axios.post(config.baseURL + '/v1/user/login', user)
            .then(res => {
                const response = res.data;
                const data = response.data
                console.log(data);
                if (response.responseCode === 200) {
                    if (data.role === 1) {
                        localStorage.setItem("token", data.token);
                        localStorage.setItem("role", data.role);
                        localStorage.setItem("usersd", data.userName);
                        window.location = "/";
                    }else{
                        localStorage.setItem("token", data.token);
                        localStorage.setItem("role", data.role);
                        localStorage.setItem("usersd", data.userName);
                        window.location = "/";
                    }
                } else {
                    setError(response.responseMessage);
                }
            }).catch(err => {
                //console.log(err);
                // if (
                //     error.response &&
                //     error.response.status >= 400 &&
                //     error.response.status <= 500
                // ) {
                //     setError(error.response.data.message);
                // }
            })    
        // }, [])

        // axios.post(config.baseURL + '/v1/user/login', user)
        //     .then(res => {
        //         const response = res.data;
        //         const data = response.data
        //         console.log(data);
        //         if (response.responseCode === 200) {
        //             if (data.role === 1) {
        //                 localStorage.setItem("token", data.token);
        //                 localStorage.setItem("role", data.role);
        //                 window.location = "/";
        //             }else{
        //                 localStorage.setItem("token", data.token);
        //                 localStorage.setItem("role", data.role);
        //                 window.location = "/";
        //             }
        //         } else {
        //             setError(response.responseMessage);
        //         }
        //     }).catch(err => {
        //         //console.log(err);
        //         // if (
        //         //     error.response &&
        //         //     error.response.status >= 400 &&
        //         //     error.response.status <= 500
        //         // ) {
        //         //     setError(error.response.data.message);
        //         // }
        //     })
    }

    return (
        <section className='logIn_sec'>
            <div className="container logIn_container">
                <div className='container'>
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className={styles.login_form_container}>
                                <div className={styles.left}>
                                    <form className={styles.form_container} onSubmit={login}>
                                        <h1>Login to Your Account</h1>
                                        <input
                                            type='text' placeholder='Username' name='userName'
                                            value={username}
                                            required
                                            className={styles.input}
                                            onChange={(e) => { setUsername(e.target.value) }}
                                        />

                                        <input
                                            type="password"
                                            placeholder="Password"
                                            name="password"
                                            // onChange={handleChange}
                                            value={password}
                                            required
                                            className={styles.input}
                                            onChange={(e) => { setPassword(e.target.value) }}
                                        />
                                        {error && <div className={styles.error_msg}>{error}</div>}
                                        <button type='submit' className={styles.green_btn}>Log In</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Login;