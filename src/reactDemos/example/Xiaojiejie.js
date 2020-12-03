import React, { Component, Fragment } from 'react';

export default class Xiaojiejie extends Component{
  constructor(props) {
    super(props);
    this.state={
      inputValue:'jspang',
      list:[]
    }
  }

  render(){
    return(      
        <Fragment>
          <div>
            <input value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
            <button>增加服务</button>
          </div>
          <ul>
            <li>服务1</li>
            <li>服务2</li>
          </ul>
        </Fragment>      
    )
  }
 
  inputChange(e){
    console.log(e.target.value);
    console.log(this);
    this.setState(
      {inputValue:e.target.value}
    );
  }
}
