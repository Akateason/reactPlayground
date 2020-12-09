import React, { Component, Fragment } from 'react';

export default class Xiaojiejie extends Component{
  constructor(props) {
    super(props);
    this.state={
      inputValue:'',
      list:['服务1','服务2']
    }
  }

  render(){
    return(      
        <Fragment>
          <div>
          {/*  状态绑定, 和事件绑定 */}
            <input value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
            <button onClick={this.addList.bind(this)}>增加服务</button>
          </div>
          <ul>
            {
              // es6数组, map方法
              this.state.list.map((item,index)=>{
                // 注意这里的 bind() 两个东西, index传过去了
                return (<li 
                            key={index+item} 
                            onClick={this.deleteItem.bind(this,index)}>  
                              {item}                  
                        </li>);
              })
            }
          </ul>
        </Fragment>      
    )
  }
 
  inputChange(e){
    console.log(e.target.value); 
    console.log(this); // this.inputChange.bind(this) 不写就是undefined
    this.setState({inputValue:e.target.value});
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
