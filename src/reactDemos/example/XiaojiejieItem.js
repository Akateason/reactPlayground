import React, { Component } from 'react';

// 子组件
export default class XiaojiejieItem extends Component {  
  constructor(props){
    super(props);
    this.handleClick=this.handleClick.bind(this); //bind(this)最好写constructor里
  }

  //componentWillReceiveProps
  // 1.组件第一次存在于Dom中, 函数是不会被执行的.
  // 2.如果已经存在于Dom中, 函数才会被执行.
  componentWillReceiveProps(){
    console.log('子组件 componentWillReceiveProps')
  }

  render(){ 
    return ( 
        <li onClick={this.handleClick}>{this.props.content}</li>  //这也可以写bind(this)
    );
  };

  handleClick(){
    console.log(this.props.index);
    this.props.deleteItem(this.props.index); //this.props.xx 子组件接受父组件的值, 子组件调用父组件传递过来的函数
  }
}
 
