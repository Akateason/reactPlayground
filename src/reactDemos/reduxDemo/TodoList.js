import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd';
import store from './store';
import { ADD_ITEM, CHANGE_INPUT, DELETE_ITEM } from './store/actionTypes';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();  // 从redux拿state
    this.changeInputValue = this.changeInputValue.bind(this);
    this.storeChange = this.storeChange.bind(this);
    this.clickBtn = this.clickBtn.bind(this);    
    store.subscribe(this.storeChange) //订阅
  }

  render() { 
    return ( 
      <div style={{margin:'10'}}>
        <div>
          <Input 
            placeholder={this.state.inputValue}
            style={{width:'250px', marginRight:'10px'}} 
            onChange={this.changeInputValue}
            value={this.state.inputValue}
          />
          <Button 
            type="primary"
            onClick={this.clickBtn}
            >增加</Button>
        </div>

        <div style={{margin:'10px',width:'300px'}}>
          <List
            bordered
            dataSource={this.state.list}
            renderItem={
              (item,index)=>(
              <List.Item onClick={this.deleteItem.bind(this,index)}>
                {item}
              </List.Item>)}
          />
        </div>
      </div> 
    );
  }

  changeInputValue(e){       
    //console.log(e.target.value);
    const action = {
      type: CHANGE_INPUT,
      value: e.target.value
    }
    store.dispatch(action);
  }

  storeChange(){
    this.setState(store.getState());
  }

  clickBtn(){
    const action = {type:ADD_ITEM};
    store.dispatch(action);
  }

  deleteItem(index){
    const action = {
      type:DELETE_ITEM,
      index
    };
    store.dispatch(action)
  }
}
 
export default TodoList;
