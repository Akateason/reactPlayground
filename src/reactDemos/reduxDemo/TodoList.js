import React, { Component } from 'react';

import store from './store';
import { addItemAction, changeInputAction, deleteItemAction, getTodoList } from './store/actionCreators';
import TodoListUI from './TodoListUI';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();  // 从redux拿state
    this.changeInputValue = this.changeInputValue.bind(this);    
    this.clickBtn = this.clickBtn.bind(this);    
    this.storeChange = this.storeChange.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    store.subscribe(this.storeChange) //订阅
  }

  render() { 
    return ( 
      <TodoListUI
        inputValue={this.state.inputValue} 
        changeInputValue={this.changeInputValue}
        clickBtn={this.clickBtn}
        list={this.state.list}
        deleteItem={this.deleteItem}
      />
    );
  }

  componentDidMount(){
    const action = getTodoList();
    store.dispatch(action);
  }

  changeInputValue(e){       
    // console.log(e.target.value);
    const action = changeInputAction(e.target.value);    
    store.dispatch(action);
  }

  storeChange(){
    this.setState(store.getState());
  }

  clickBtn(){
    const action = addItemAction();
    store.dispatch(action);
  }

  deleteItem(index){
    const action = deleteItemAction(index);
    store.dispatch(action)
  }
}
 
export default TodoList;
