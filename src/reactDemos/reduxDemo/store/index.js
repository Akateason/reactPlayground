import {createStore, applyMiddleware, compose}  from 'redux'
import reducer from './reducer';
import thunk from 'redux-thunk'

//由于createStore只能接收两个参数，这里用增强函数（一种嵌套结构）的方式，表示一个函数不行，就执行另一个函数
const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));


//store必须是唯一的
//store相当于 仓库(图书馆)
const store = createStore(
  reducer,
  enhancer
);
export default store;

