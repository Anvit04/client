import styles from './style.module.css';
import './style.css';
import { Link } from "react-router-dom";
import axios from 'axios'
import config from '../../config'
import { useState, useEffect } from 'react';
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import { DatePicker } from "rsuite";
import "../../../node_modules/rsuite/dist/rsuite.min.css";

const Userlist = () => {

    const [startDate, setStartDate] = useState(new Date());

    const [data, setData] = useState([])

    // const paraStyle = { 
    //     marginBottom: "25px", 
    //     marginTop: "10px" 
    // };


    useEffect(() => {
        axios.get(config.baseURL + '/v1/user/employees')
            .then(res => {
                setData(res.data.data.emp_list)
                console.log(res.data)
            }).catch(err => {
                console.log(err)
            })
    }, [])

    const employelist = data && data.length && data.map((el, ind) => {
        const letIndex = ind + 1;
        console.log(el.firstName)
        // const fname = el.firstName;
        const roles = el.role;

        return (
            <tr key={ind}>

                <th scope="row">{letIndex}</th>
                <td>{el.firstName}</td>



            </tr>
        )
    })

    return <>
        <section className={styles.userList_sec}>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-md-8'>
                        <h1>Employee List</h1>
                        <table className="table table-success table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">No.</th>
                                    <th scope="col">Name</th>

                                </tr>
                            </thead>
                            <tbody>

                                {employelist}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </section>

        <section className={styles.modalSec}>
            {/* <!-- Button trigger modal --> */}
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Add Employee
            </button>

            {/* <!-- Modal --> */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" data-bs-backdrop="false" aria-hidden="true">
                <div className={styles.employee_modalBox}>
                    <div class="modal-dialog modal-dialog-scrollable">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Add Employee</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <input type='text' placeholder='First name' name='firstName' className={styles.addEmployee_input} />

                                    <input type='text' placeholder='Last name' name='lastName' className={styles.addEmployee_input} />

                                    {/* <DatePicker dateFormat="dd/MMM/yyyy" selected={startDate} className={styles.addEmployee_input} placeholderText="Date of joining" onChange={date => setStartDate(date)} /> */}

                                    <DatePicker id="date_of_join" placeholder="Date of joining" />

                                    <DatePicker placeholder="Date of Birth" />

                                    <input type='text' placeholder='Username' name='userName' className={styles.addEmployee_input} />

                                    <input type='password' placeholder='Password' name='password' className={styles.addEmployee_input} />

                                    <select className={styles.addEmployee_input} aria-label="Default select example">
                                        <option selected disabled value="">Designation </option>
                                        <option value="1">Developer</option>
                                        <option value="2">UI Designer</option>
                                        <option value="3">UX Designer</option>
                                        <option value="3">HR</option>
                                        <option value="3">Team leader</option>
                                    </select>

                                    <input type="number" placeholder='Leaves' name="leaves" className={styles.addEmployee_input}/>

                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>

}

export default Userlist;