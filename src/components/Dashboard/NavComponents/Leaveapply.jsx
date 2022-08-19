import React from 'react'
import styles from '../style.module.css';
import '../style.css';
import { DatePicker } from "rsuite";
import "../../../../node_modules/rsuite/dist/rsuite.min.css";
import { useState, useEffect } from 'react';

export default function Leaveapply() {

    const [fromdate, setFromdate] = useState('');
    const [todate, setTodate] = useState('');

    return (
        <>
            <section className='leaveApply_sec'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-md-12 col-lg-10 col-xl-10'>

                            <form className='row justify-content-center'>
                                <h1 className={styles.addEmployee_head}>Apply For Leave</h1>
                                <div className='col-md-4'>
                                    <DatePicker placeholder="From date" name="fromDate" format="dd MMM yyyy"
                                        onChange={date => setFromdate(date)}
                                        required
                                    />
                                </div>
                                <div className='col-md-4'>
                                    <DatePicker placeholder="To date" name="toDate" format="dd MMM yyyy"
                                        onChange={date => setTodate(date)}
                                        required
                                    />
                                </div>
                                <div className='col-md-4'>
                                    <select className={styles.addEmployee_input} aria-label="Default select example">

                                        <option selected disabled value="">Reason</option>
                                        <option value="1">Going to Hospital</option>
                                        <option value="2">Personal</option>
                                        <option value="3">Casual Leave</option>

                                    </select>
                                </div>
                                <div className='col-md-4'>
                                <button type='submit' class="btn btn-success cst_subBtn">Apply</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
