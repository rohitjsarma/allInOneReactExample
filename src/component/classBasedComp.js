import React, { Component } from 'react'
import './class.css';
 class ClassBasedComp extends Component {
      state={
        name:'rohit',
        desg:"sse",
        cart:[],
        total:1
      }
      add=()=>{
        this.setState({
          cart:['item1'],
          total:this.state.total+5
        })
      }
      
      remove=()=>{
        this.setState({
          total : this.state.total - 1 > 0 ? this.state.total - 1 : 1
        })
    }
  render() {
    return (
      <div> ClassBasedComp
        <h1 className='name'>{this.state.name}</h1>
        <h1 className='deg'>{this.state.desg}</h1>
        <h1 className='crt'>Total Item :: {this.state.cart.length}</h1>
        <h1 className='ttl'>{this.state.total}</h1>
        <div className="product"><span role="img" aria-label="ice cream">🍦</span></div>
        <button className='btn btn-sm btn-primary' onClick={this.add}>Add</button>&nbsp;
        <button className='btn btn-sm btn-danger' onClick={this.remove}>Remove</button>

      </div>
      
      
    )
  }
}
export default ClassBasedComp;


