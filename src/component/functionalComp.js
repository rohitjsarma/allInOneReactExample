import React, { useState } from 'react';
import './class.css';
let FunctionalComp=()=>{
    let [count,setCount]=useState('0')
    let add=()=>{
        setCount(count+1)
      }
      
      let remove=()=>{
        setCount(count-1)
    }

    return(
        <React.Fragment>
            <h1>Functional Component example</h1>
             <h2 className='count'> Total Count is :: {count}</h2>
             <button className='btn btn-sm btn-primary' onClick={add}>Add</button>&nbsp;
           <button className='btn btn-sm btn-danger' onClick={remove}>Remove</button>

        </React.Fragment>
    )
}
export default FunctionalComp;
