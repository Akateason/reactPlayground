import React from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd';

// TodoListUI 抽离出UI部分，把class改成func（无状态组件,没有state，没有生命周期，性能会高一些,没有任何业务逻辑，只有UI）
const TodoListUI = (props)=>{
  return ( 
    <div style={{margin:'10'}}>
    <div>
      <Input 
        placeholder={props.inputValue}
        style={{width:'250px', marginRight:'10px'}} 
        onChange={props.changeInputValue}
        value={props.inputValue}
      />
      <Button 
        type="primary"
        onClick={props.clickBtn}
        >增加</Button>
    </div>

    <div style={{margin:'10px',width:'300px'}}>
      <List
        bordered
        dataSource={props.list}
        renderItem={
          (item,index)=>(
          <List.Item onClick={()=>{props.deleteItem(index)}}>
            {item}
          </List.Item>)
        }   
      />
    </div>
  </div> 
    );
}

export default TodoListUI;
