import Axios from 'axios';
import React, { Component, Fragment } from 'react';
import XiaojiejieItem from './XiaojiejieItem';

export default class Xiaojiejie extends Component{
  
  //初始化阶段
  constructor(props) {
    super(props);
    this.state={
      inputValue:'',
      list:[]
    }
  }

  componentDidMount(){
    // 用rap2的假数据
    Axios.get('http://rap2api.taobao.org/app/mock/data/1829085')
    .then((res)=>{
      console.log('axios sucess : ' + JSON.stringify(res))
      //axios sucess : {"data":{"datas":["product1","product2","product3"]},"status":200,"statusText":"OK","headers":{"content-length":"67","content-type":"application/json; charset=utf-8"},"config":{"url":"http://rap2api.taobao.org/app/mock/data/1829085","method":"get","headers":{"Accept":"application/json, text/plain, */*"},"transformRequest":[null],"transformResponse":[null],"timeout":0,"xsrfCookieName":"XSRF-TOKEN","xsrfHeaderName":"X-XSRF-TOKEN","maxContentLength":-1,"maxBodyLength":-1},"request":{}}
      this.setState({
        list:res.data.datas //js解析直接解析
      })      
    })
    .catch((error)=>{console.log('axios fail : ' + error);})
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



