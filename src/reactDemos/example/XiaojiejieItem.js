import React, { Component } from 'react';

// 子组件
export default class XiaojiejieItem extends Component {  
  constructor(props){
    super(props);
    this.handleClick=this.handleClick.bind(this); //bind(this)最好写constructor里
  }

  shouldComponentUpdate(nextProps, nextState){
    if(nextProps.content!==this.props.content){
      return true;
    } else {
      return false;
    }
  }


  render(){ 
    console.log('child render');
    return ( 
        <li onClick={this.handleClick}>{this.props.content}</li>  //这也可以写bind(this)
    );
  };

  handleClick(){
    console.log(this.props.index);
    this.props.deleteItem(this.props.index); //this.props.xx 子组件接受父组件的值, 子组件调用父组件传递过来的函数
  }
}
 
