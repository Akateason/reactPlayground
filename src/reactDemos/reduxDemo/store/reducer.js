// reducer相当于图书管理员
// Reducer里只能接收State, 不能改变State.
// reducer必须是一个纯函数, 变化只依赖于参数(state,action). 不能返回和参数无关的结果.

import { ADD_ITEM, CHANGE_INPUT, DELETE_ITEM, GET_LIST } from "./actionTypes";

const defaultState = {
  inputValue:'Write Something!',
  list:[]
}

export default (state = defaultState, action)=>{
  console.log(state,action); // 结合log看懂action传过来了
  // Reducer里只能接收State, 不能改变State.
  if (action.type === CHANGE_INPUT) {
    let newState = JSON.parse(JSON.stringify(state));//深拷贝
    newState.inputValue = action.value;
    return newState;//处理完业务逻辑返回仓库.
  }

  if (action.type === ADD_ITEM) {
    let newState = JSON.parse(JSON.stringify(state));//深拷贝
    newState.list.push(newState.inputValue);
    newState.inputValue = '';
    return newState;
  }

  if (action.type === DELETE_ITEM) {
    let newState = JSON.parse(JSON.stringify(state));//深拷贝
    newState.list.splice(action.index,1);    
    return newState;
  }

  if (action.type === GET_LIST) {
    let newState = JSON.parse(JSON.stringify(state));//深拷贝    
    newState.list = action.data.datas;
    return newState;
  }

  return state
}
