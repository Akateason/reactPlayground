import Axios from "axios";
import { ADD_ITEM, CHANGE_INPUT, DELETE_ITEM, GET_LIST } from "./actionTypes";

export const changeInputAction = (value) => ({
  type:CHANGE_INPUT,
  value
})

export const addItemAction = () => ({
  type:ADD_ITEM,
})

export const deleteItemAction = (index) => ({
  type:DELETE_ITEM,
  index
})

export const getListAction = (data) => ({
  type:GET_LIST,
  data
})

//通过redux-thunk中间件，可以返回一个函数，也是action
export const getTodoList = ()=>{
  return (dispatch)=>{
    Axios.get('http://rap2api.taobao.org/app/mock/273479/jspangdemo/datas')
    .then(res=>{      
      const data = res.data;
      const action = getListAction(data);
      dispatch(action);
    })
  }
}
