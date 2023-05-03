import { Fetch_Emp_Failure, Fetch_Emp_Request, Fetch_Emp_Success } from './employee.action.Type';
export const Emp_Feature_Key='employeeKey';
let initialstate={
    loading:false,
    employee:[],
    errorMsg:''
};
let empReducer=(state=initialstate,action)=>{
    let{payload,type}=action
    
    switch(type){
        case Fetch_Emp_Request:
            return{
                ...state,
                loading:true
            };
        case Fetch_Emp_Success:
            return{
                ...state,
                loading:false,
                employee:payload
            };
        case Fetch_Emp_Failure:
            return{
                ...state,
                loading:false,
                errorMsg:payload
            };
        default:return state;
    }

}
export {empReducer}
