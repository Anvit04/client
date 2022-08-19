import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'
import config from '../../../config'
import styles from '../style.module.css';
import '../style.css';
import { DatePicker } from "rsuite";
import "../../../../node_modules/rsuite/dist/rsuite.min.css";

export default function Addemployee() {

    const [firstname, setFirstname] = useState('');
    const [lastname, setlastname] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [joindate, setJoindate] = useState('');
    const [email, setEmail] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [designation, setDesignation] = useState('');
    const [leaves, setLeaves] = useState('');


    function addEmployee(event) {
        event.preventDefault()

        const user = {
            firstName: firstname,
            lastName: lastname,
            userName: username,
            email: email,
            password: password,
            joinDate: joindate,
            birthDate: birthdate,
            designation: designation,
            leaves: leaves
        }

        axios.post(config.baseURL + 'v1/user/addemployee', user)
            .then(res => {
                const response = res;
                console.log(response);
                if (response.responseCode === 200) {
                    window.location.reload();
                } else {
                    window.location = "/";
                }

            }).catch(err => {
                console.log(err);
            })

        event.target.reset();

    }

    return (
        <>
            <section className='addEmployee'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-md-12 col-lg-10 col-xl-10'>
                            <form className='row justify-content-center' onSubmit={addEmployee}>
                                <h1 className={styles.addEmployee_head}>Add New Employee</h1>
                                <div className='col-md-4'>
                                    <input type='text' placeholder='First name' name='firstName' className={styles.addEmployee_input}
                                        value={firstname}
                                        onChange={(e) => { setFirstname(e.target.value) }}
                                        required
                                    />
                                </div>

                                <div className='col-md-4'>
                                    <input type='text' placeholder='Last name' name='lastName' className={styles.addEmployee_input}
                                        value={lastname}
                                        onChange={(e) => { setlastname(e.target.value) }}
                                        required
                                    />
                                </div>

                                <div className='col-md-4'>
                                    <DatePicker id="date_of_join" placeholder="Date of joining" name="joinDate" format="dd MMM yyyy"
                                        onChange={date => setJoindate(date)}
                                        required
                                    />
                                </div>

                                <div className='col-md-4'>
                                    <DatePicker placeholder="Date of Birth" name="birthDate" format="dd MMM yyyy"
                                        onChange={date => setBirthdate(date)}
                                        required
                                    />
                                </div>

                                <div className='col-md-4'>
                                    <input type='text' placeholder='Username' name='userName' className={styles.addEmployee_input} value={username}
                                        onChange={(e) => { setUsername(e.target.value) }}
                                        required
                                    />
                                </div>

                                <div className='col-md-4'>
                                    <input type='email' placeholder='Email' name='email' className={styles.addEmployee_input} value={email}
                                        onChange={(e) => { setEmail(e.target.value) }}
                                        required
                                    />
                                </div>

                                <div className='col-md-4'>
                                    <input type='password' placeholder='Password' name='password' className={styles.addEmployee_input} value={password}
                                        onChange={(e) => { setPassword(e.target.value) }}
                                        required
                                    />
                                </div>

                                <div className='col-md-4'>
                                    <select className={styles.addEmployee_input} aria-label="Default select example" name="designation" value={designation}
                                        onChange={(e) => { setDesignation(e.target.value) }} required >

                                        <option selected disabled value="">Designation </option>
                                        <option value="1">Developer</option>
                                        <option value="2">UI Designer</option>
                                        <option value="3">UX Designer</option>
                                        <option value="4">HR</option>
                                        <option value="5">Team leader</option>

                                    </select>
                                </div>

                                <div className='col-md-4'>
                                    <input type="number" placeholder='Leaves' name="leaves" className={styles.addEmployee_input}
                                        value={leaves}
                                        onChange={(e) => { setLeaves(e.target.value) }} required
                                    />
                                </div>
                                <div className='col-md-4'>
                                    <button type='submit' class="btn btn-success cst_subBtn">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
