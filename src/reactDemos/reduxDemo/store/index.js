import {createStore}  from 'redux'
import reducer from './reducer';

//store必须是唯一的
//store相当于 仓库(图书馆)

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;

