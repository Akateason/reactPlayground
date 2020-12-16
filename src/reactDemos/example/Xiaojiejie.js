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

  //渲染
  render(){    
    
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
