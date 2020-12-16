import React, { Component, Fragment } from 'react';
import XiaojiejieItem from './XiaojiejieItem';

export default class Xiaojiejie extends Component{
  
  //初始化阶段
  constructor(props) {
    super(props);
    this.state={
      inputValue:'',
      list:['服务1','服务2']
    }
  }

  componentWillMount(){
    console.log('componentWillMount 将要挂载')
  }

  componentDidMount(){
    console.log('componentDidMount 挂载完成')
  }

  shouldComponentUpdate(){
    console.log('1-shouldComponentUpdate')
    return true;
  }

  componentWillUpdate(){
    console.log('2-componentWillUpdate')
  }

  componentDidUpdate(){
    console.log('4-componentDidUpdate')
  }

  componentWillUnmount(){
    console.log('componentWillUnmount 组件删除')
  }

  //渲染
  render(){
    console.log('3-render - 组件挂载中')
    return(      
        <Fragment>
          <div>
          {/*  状态绑定, 和事件绑定 */}
            <input
              id='jspang'
              value={this.state.inputValue}
              onChange={this.inputChange.bind(this)}
              ref = {((input)=>{this.input=input})} //ref绑定 es6. 把input赋给this.input
            />
            <button onClick={this.addList.bind(this)}>增加服务</button>
          </div>

          <ul>
            {
              // es6数组, map方法
              this.state.list.map((item,index)=>{
                // eslint-disable-next-line no-lone-blocks
                { /*                   
                return (<li 
                            key={index+item} 
                            onClick={this.deleteItem.bind(this,index)}>  
                              {item}                  
                        </li>);  
                */}                
                return (<XiaojiejieItem 
                          key={index+item} 
                          content={item}
                          index={index}
                          deleteItem={this.deleteItem.bind(this)}
                          />);                          
                          // 父组件传值给子组件. 子组件不能有方法, 也要用父组件的方法传值过去.
              })
            }
          </ul>
        </Fragment>      
    )
  }
 
  // inputChange(e){
  //   console.log(e.target.value); 
  //   console.log(this); // this.inputChange.bind(this) 不写就是undefined
  //   this.setState({inputValue:e.target.value});
  // }
//jsx中用了ref绑定了this.input, 替换e.target.value的写法
  inputChange(){        
    this.setState({inputValue:this.input.value});
  }

  addList(){
    this.setState({      
      list:[...this.state.list, this.state.inputValue], //...是扩展运算符, 动态添加数组.
      inputValue:''  //赋值后, 输入框置空
    })
  }

  deleteItem(index){
    let list = this.state.list;
    list.splice(index,1);
    this.setState({
      list:list
    });
  }
}
