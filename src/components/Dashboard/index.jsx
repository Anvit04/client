import styles from './style.module.css';
import './style.css';
import Userlist from './userlist';

// import DatePicker from "react-bootstrap-date-picker";


const Dashboard = () => {

    
    const role = localStorage.getItem("role");

    const usersd = localStorage.getItem("usersd");

    console.log(usersd);

    // console.log(role);

    // const [data, setData] = useState([])

    

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
        
            {/* <Header /> */}

            {/* <Route path='/holiday'  element={<Holiday />} /> */}
            
            
            
            {
                (() => {

                    if (role == 1 && true) {
                        // Admin
                        return <div>
                            <Userlist />
                        </div>
                    }
                    else {
                        // User
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