import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchEmployee} from "./redux/emp/employee.actions";
//import Spinner from  './spinner/Spinner';
import {Emp_Feature_Key} from "./redux/emp/employee.reducer";
import Spinner from './spinner';
let Employee=()=>{
    let dispatch= useDispatch();

    let empInfo =useSelector((state)=>{
        return state[Emp_Feature_Key];

    })
   
    let getEmpDetails=()=>{
        dispatch(fetchEmployee());
    };

    return(
        <React.Fragment>
             <pre>{JSON.stringify(empInfo)}</pre>
            <h1>Employee List Using React Redux</h1>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header text-primary">
                                
                                <button type="button" className='btn btn-sm btn-danger float-right ' onClick={getEmpDetails}>Get Employee Details </button>
                            </div>
                            <div className="card-body">
                            <table className="table">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">Eid</th>
                                        <th scope="col">Ename</th>
                                        <th scope="col">Gender</th>
                                        <th scope="col">Dept</th>
                                        <th scope="col">City</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                             empInfo.employee.length>0?<React.Fragment>
                                 {
                                     empInfo.loading ? <Spinner/> :
                                         <React.Fragment>
                                             {
                                                 empInfo.employee.map((e)=>{
                                                     return(

                                                             <tr key={e.id}>
                                                                 <td>{e.id}</td>
                                                                 <td>{e.ename}</td>
                                                                 <td>{e.gender}</td>
                                                                 <td>{e.dept}</td>
                                                                 <td>{e.city}</td>
                                                             </tr>

                                                     )
                                                 })
                                             }
                                         </React.Fragment>
                                 }
                             </React.Fragment> : null
                         }
                                
                                </tbody>
                            </table>

                            </div>
                            <div className="card-footer">
                                <button type="button" className='btn btn-sm btn-success float-left'>Add New Emp</button> &nbsp;
                                <button type="button" className='btn btn-sm btn-warning float-right'>Delete Record</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}
export default Employee;
