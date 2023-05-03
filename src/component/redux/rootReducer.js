import {combineReducers} from 'redux';
import { Emp_Feature_Key,empReducer } from './emp/employee.reducer';
let rootReducer = combineReducers({
    [ Emp_Feature_Key]: empReducer
    
});
export {rootReducer};

