import {Fetch_Emp_Failure, Fetch_Emp_Request, Fetch_Emp_Success  } from "./employee.action.Type"; 
import Axios from 'axios';   

let fetchRequest=()=>{
    return{
        type:Fetch_Emp_Request
    }
}
let fetchSuccess=(employeeDetails)=>{
    return{
        type:Fetch_Emp_Success,
        payload:employeeDetails
    }
}
let fetchFailure=(error)=>{
    return{
        type:Fetch_Emp_Failure,
        payload:error
    }
    
}
let fetchEmployee=()=>{
    return (dispatch)=>{
    dispatch(fetchRequest());
    setTimeout(()=>{
        Axios.get('https://gist.githubusercontent.com/rohitjsarma/b9817241841b03383a8ff08bbdef01c7/raw/ae1278ffa31c19c08b8a6544f3cfa7da0f609476/empDetails31March')
    .then((resp)=>{dispatch(fetchSuccess(resp))}).catch((error)=>{dispatch(fetchFailure(error))})
    },5000)
    }
   

}
export {fetchEmployee}