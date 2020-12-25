import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

// react-transition-group 三个部分组成
// - Transition
// - CSSTransition
// - TransitionGroup

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
      <CSSTransition in={this.state.isShow} timeout={2000} classNames='boss-text' unmountOnExit>
        <div className={this.state.isShow?'show':'hide'}>Boss来了, 有动画</div>
      </CSSTransition>      
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
