// reducer相当于图书管理员

const defaultState = {
  inputValue:'Write Something!',
  list:[
    '早上6点开会, 分配任务',
    '早上9点吃饭',
    '晚上10点睡觉'
  ]
}

export default (state = defaultState, action)=>{
  console.log(state,action);//结合log看懂action传过来了
  //Reducer里只能接收State, 不能改变State.
  if (action.type==="changeInputValue") {
    let newState = JSON.parse(JSON.stringify(state));//深拷贝
    newState.inputValue = action.value;
    return newState;//处理完业务逻辑返回仓库.
  }

  if (action.type === 'addItem') {
    let newState = JSON.parse(JSON.stringify(state));//深拷贝
    newState.list.push(newState.inputValue);
    newState.inputValue = '';
    return newState;
  }

  if (action.type === 'deleteItem') {
    let newState = JSON.parse(JSON.stringify(state));//深拷贝
    newState.list.splice(action.index,1);    
    return newState;
  }

  return state
}
