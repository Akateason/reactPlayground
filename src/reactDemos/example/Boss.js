import React, { Component } from 'react';

export default class Boss extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isShow: true
     }
     
  }
  
  render() { 
    return ( 
      <div>
        <div className={this.state.isShow?'show':'hide'}>Boss来了</div>
        <div><button onClick={()=>{this.toggle()}}>召唤boss</button></div>
      </div> 
    );
  }

  toggle(){
    this.setState(
      {
        isShow:this.state.isShow?false:true
      }
    )    
  }
}
