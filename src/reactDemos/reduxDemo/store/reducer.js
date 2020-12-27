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
  return state
}
