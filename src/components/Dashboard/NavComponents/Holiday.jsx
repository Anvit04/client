import React from 'react'
import styles from '../style.module.css';
import '../style.css';

export default function Holiday() {
  return (
    <>

      <section className='holidayCal_sec'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-12 col-lg-10 col-xl-10'>
              <h1 className={styles.holiday_head}>Holidays 2022</h1>
              <table className="table table-success table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th>Holiday Date</th>
                    <th>Day</th>
                  </tr>
                </thead>

                <tbody>

                  <tr >
                    <th scope="row">1</th>
                    <td>New Year</td>
                    <td>1 Jan 2022</td>
                    <td>Sunday</td>
                  </tr>

                  <tr >
                    <th scope="row">2</th>
                    <td>New Year</td>
                    <td>1 Jan 2022</td>
                    <td>Sunday</td>
                  </tr>

                  <tr >
                    <th scope="row">3</th>
                    <td>New Year</td>
                    <td>1 Jan 2022</td>
                    <td>Sunday</td>
                  </tr>

                  <tr >
                    <th scope="row">4</th>
                    <td>New Year</td>
                    <td>1 Jan 2022</td>
                    <td>Sunday</td>
                  </tr>

                </tbody>

              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
